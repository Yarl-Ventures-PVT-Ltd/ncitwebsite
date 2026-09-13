import nodemailer from "nodemailer";

import { FIELD_LIMITS, inquiryLabel, isInquiryType, type ContactPayload } from "@/lib/contact";
import { SITE } from "@/lib/seo";

/**
 * Contact form submission.
 *
 * Two emails per enquiry:
 *
 *   1. The enquiry, to the chairman's office, with Reply-To set to the visitor
 *      so a reply goes straight to them.
 *   2. A confirmation to the visitor, echoing what they sent, with Reply-To set
 *      to the support inbox because the sending address is not monitored.
 *
 * They fail differently on purpose. If the first fails, the enquiry never
 * reached the chamber, so the visitor is told and asked to retry. If only the
 * second fails, the enquiry did arrive, and telling the visitor it failed would
 * make them send it again; that failure is logged and the visitor sees success.
 *
 * Validated on the server regardless of what the form checked, because the
 * endpoint is public and anyone can post to it without the form. Nothing is
 * stored: the emails are the record.
 *
 * nodemailer needs Node's net and tls modules, so this cannot run on the edge.
 */
export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Result = { ok: true } | { ok: false; error: string };

function json(body: Result, status: number) {
    return Response.json(body, { status });
}

function text(value: unknown, max: number) {
    return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Every value reaching an HTML body is escaped, so a message cannot inject markup. */
function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/**
 * Header values are single line. A newline in a subject or a name is how a
 * header injection adds a Bcc, so they collapse to spaces before use.
 */
function singleLine(value: string) {
    return value.replace(/[\r\n]+/g, " ");
}

function detailRows(rows: [string, string][]) {
    return rows
        .map(
            ([key, value]) =>
                `<tr><td style="color:#667085;padding:6px 16px 6px 0;vertical-align:top;white-space:nowrap">${escapeHtml(key)}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
        )
        .join("\n");
}

export async function POST(request: Request) {
    let body: Partial<ContactPayload>;
    try {
        body = await request.json();
    } catch {
        return json({ ok: false, error: "The request could not be read." }, 400);
    }

    // A filled honeypot is a bot. Answer as if it worked, so it learns nothing
    // and does not retry with a different strategy.
    if (typeof body.website === "string" && body.website.trim() !== "") {
        console.info("contact.rejected", { reason: "honeypot" });
        return json({ ok: true }, 200);
    }

    const inquiryType = body.inquiryType;
    const firstName = text(body.firstName, FIELD_LIMITS.firstName);
    const lastName = text(body.lastName, FIELD_LIMITS.lastName);
    const email = text(body.email, FIELD_LIMITS.email);
    const phone = text(body.phone, FIELD_LIMITS.phone);
    const organisation = text(body.organisation, FIELD_LIMITS.organisation);
    const memberId = text(body.memberId, FIELD_LIMITS.memberId);
    const subject = text(body.subject, FIELD_LIMITS.subject);
    const message = text(body.message, FIELD_LIMITS.message);

    if (!isInquiryType(inquiryType)) {
        return json({ ok: false, error: "Choose an inquiry type." }, 400);
    }
    if (!firstName || !lastName || !organisation || !subject || !message) {
        return json({ ok: false, error: "Fill in every required field." }, 400);
    }
    if (!EMAIL_PATTERN.test(email)) {
        return json({ ok: false, error: "Enter a valid email address." }, 400);
    }
    if (body.consent !== true) {
        return json({ ok: false, error: "Tick the consent box to send your enquiry." }, 400);
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM_NAME, SMTP_FROM_EMAIL } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM_EMAIL) {
        // A deploy without the variables fails loudly in the logs and honestly
        // to the visitor, and never pretends the message was sent.
        console.error("contact.misconfigured", { missing: "SMTP environment variables" });
        return json({ ok: false, error: "The form is unavailable right now. Please email us instead." }, 503);
    }

    const label = inquiryLabel(inquiryType);
    const fullName = singleLine(`${firstName} ${lastName}`);
    const from = { name: singleLine(SMTP_FROM_NAME || SITE.name), address: SMTP_FROM_EMAIL };

    const rows: [string, string][] = [
        ["Inquiry type", label],
        ["Name", `${firstName} ${lastName}`],
        ["Email", email],
        ["Phone", phone || "Not given"],
        ["Organisation", organisation],
    ];
    if (inquiryType === "Support") {
        rows.push(["Member ID", memberId || "Not given"]);
    }
    rows.push(["Subject", subject]);

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        // 587 starts plain and upgrades with STARTTLS; 465 is TLS from the first byte.
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    // 1. The enquiry, to the chamber.
    try {
        const info = await transporter.sendMail({
            from,
            to: SITE.enquiriesEmail,
            replyTo: { name: fullName, address: email },
            subject: singleLine(`[Website: ${label}] ${subject}`),
            text: [
                `New ${label} enquiry from the NCIT website contact form.`,
                "",
                ...rows.map(([key, value]) => `${key}: ${value}`),
                "",
                "Message:",
                message,
                "",
                "Reply to this email to answer the sender directly.",
            ].join("\n"),
            html: `<!doctype html><html><body style="font-family:Helvetica,Arial,sans-serif;color:#101828;line-height:1.5">
<p style="margin:0 0 16px">New <strong>${escapeHtml(label)}</strong> enquiry from the NCIT website contact form.</p>
<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px">
${detailRows(rows)}
</table>
<p style="margin:20px 0 6px;color:#667085;font-size:14px">Message</p>
<div style="white-space:pre-wrap;font-size:15px">${escapeHtml(message)}</div>
<p style="margin:24px 0 0;color:#667085;font-size:12px">Reply to this email to answer the sender directly.</p>
</body></html>`,
        });
        console.info("contact.sent", { inquiryType, messageId: info.messageId });
    } catch (error) {
        const err = error as { code?: string; responseCode?: number };
        console.error("contact.failed", { inquiryType, code: err.code, responseCode: err.responseCode });
        return json({ ok: false, error: "Your enquiry could not be sent. Please try again or email us directly." }, 502);
    }

    // 2. The confirmation, to the visitor. A failure here does not undo the
    //    enquiry, which has already arrived, so it is logged and not surfaced.
    const telLink = `tel:${SITE.telephone}`;
    const whatsappLink = `https://wa.me/${SITE.telephone.replace("+", "")}`;
    try {
        const info = await transporter.sendMail({
            from,
            to: { name: fullName, address: email },
            // The sending mailbox is not monitored, so a reply lands in support
            // even when the visitor ignores the notice and replies anyway.
            replyTo: SITE.email,
            subject: "We have received your enquiry | NCIT",
            text: [
                `Dear ${firstName},`,
                "",
                "Thank you for contacting the Northern Chamber of Information Technology.",
                "Your enquiry has been received. We will contact you or provide a solution as soon as we can,",
                "so please be patient while the secretariat reviews it.",
                "",
                `URGENT: if your enquiry is an emergency, please call or WhatsApp us immediately on ${SITE.telephoneDisplay}.`,
                "",
                "Your enquiry",
                ...rows.map(([key, value]) => `${key}: ${value}`),
                "",
                "Message:",
                message,
                "",
                `PLEASE DO NOT REPLY TO THIS EMAIL. This mailbox is not monitored. To reply, write to ${SITE.email}.`,
                "",
                `${SITE.legalName}`,
                `${SITE.address.street}, ${SITE.address.locality}, Sri Lanka`,
            ].join("\n"),
            html: `<!doctype html><html><body style="margin:0;background:#f7f8fa;font-family:Helvetica,Arial,sans-serif;color:#101828;line-height:1.55">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;padding:24px 12px">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #e3e7ee;border-radius:8px">
<tr><td style="padding:28px 28px 8px">
<p style="margin:0 0 4px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#2448cc;font-weight:bold">Northern Chamber of Information Technology</p>
<h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:#101828">We have received your enquiry</h1>
<p style="margin:0 0 12px;font-size:15px">Dear ${escapeHtml(firstName)},</p>
<p style="margin:0 0 12px;font-size:15px">Thank you for contacting the Northern Chamber of Information Technology. Your enquiry has been received. We will contact you or provide a solution as soon as we can, so please be patient while the secretariat reviews it.</p>
</td></tr>

<tr><td style="padding:8px 28px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2fd;border-left:4px solid #2448cc;border-radius:4px">
<tr><td style="padding:14px 16px;font-size:14px">
<strong>Is it urgent?</strong> If your enquiry is an emergency, please call or WhatsApp us immediately on
<a href="${telLink}" style="color:#2448cc;font-weight:bold;text-decoration:none">${escapeHtml(SITE.telephoneDisplay)}</a>.
<br><a href="${telLink}" style="color:#2448cc">Call now</a> &nbsp;|&nbsp; <a href="${whatsappLink}" style="color:#2448cc">Message on WhatsApp</a>
</td></tr>
</table>
</td></tr>

<tr><td style="padding:16px 28px 8px">
<p style="margin:0 0 8px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#667085;font-weight:bold">Your enquiry</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px">
${detailRows(rows)}
</table>
<p style="margin:16px 0 6px;color:#667085;font-size:14px">Message</p>
<div style="white-space:pre-wrap;font-size:14px;background:#f7f8fa;border:1px solid #e3e7ee;border-radius:4px;padding:12px">${escapeHtml(message)}</div>
</td></tr>

<tr><td style="padding:20px 28px 8px">
<p style="margin:0;padding:12px 14px;border:1px solid #fecdca;background:#fef3f2;border-radius:4px;font-size:14px;color:#b42318;font-weight:bold">
Please do not reply to this email. This mailbox is not monitored. To reply, write to
<a href="mailto:${SITE.email}" style="color:#b42318">${escapeHtml(SITE.email)}</a>.
</p>
</td></tr>

<tr><td style="padding:16px 28px 28px;font-size:12px;color:#667085">
${escapeHtml(SITE.legalName)}<br>${escapeHtml(SITE.address.street)}, ${escapeHtml(SITE.address.locality)}, Sri Lanka
</td></tr>
</table>
</td></tr>
</table>
</body></html>`,
        });
        console.info("contact.confirmation_sent", { inquiryType, messageId: info.messageId });
    } catch (error) {
        const err = error as { code?: string; responseCode?: number };
        console.error("contact.confirmation_failed", { inquiryType, code: err.code, responseCode: err.responseCode });
    }

    return json({ ok: true }, 200);
}
