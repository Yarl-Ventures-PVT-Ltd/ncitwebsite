import nodemailer from "nodemailer";

import { FIELD_LIMITS, inquiryLabel, isInquiryType, type ContactPayload } from "@/lib/contact";
import { SITE } from "@/lib/seo";

/**
 * Contact form submission.
 *
 * Validates on the server regardless of what the form already checked, because
 * the endpoint is public and anyone can post to it without the form. Sends one
 * email to the chamber, with Reply-To set to the visitor so the secretariat
 * answers them directly rather than answering the no-reply address.
 *
 * Nothing is stored. The email is the record, which is also what the privacy
 * notice promises.
 *
 * nodemailer needs Node's net and tls modules, so this cannot run on the edge
 * runtime.
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

/** Every value that reaches the HTML body is escaped, so a message cannot inject markup. */
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
 * header injection adds a Bcc, so they are collapsed to spaces before use.
 */
function singleLine(value: string) {
    return value.replace(/[\r\n]+/g, " ");
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
        // A deploy without the variables should fail loudly in the logs and
        // honestly to the visitor, never pretend the message was sent.
        console.error("contact.misconfigured", { missing: "SMTP environment variables" });
        return json({ ok: false, error: "The form is unavailable right now. Please email us instead." }, 503);
    }

    const label = inquiryLabel(inquiryType);
    const fullName = singleLine(`${firstName} ${lastName}`);

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

    const textBody = [
        `New ${label} enquiry from the NCIT website contact form.`,
        "",
        ...rows.map(([key, value]) => `${key}: ${value}`),
        "",
        "Message:",
        message,
        "",
        "Reply to this email to answer the sender directly.",
    ].join("\n");

    const htmlBody = `<!doctype html><html><body style="font-family:Helvetica,Arial,sans-serif;color:#101828;line-height:1.5">
<p style="margin:0 0 16px">New <strong>${escapeHtml(label)}</strong> enquiry from the NCIT website contact form.</p>
<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-size:14px">
${rows
    .map(
        ([key, value]) =>
            `<tr><td style="color:#667085;padding-right:16px;vertical-align:top">${escapeHtml(key)}</td><td>${escapeHtml(value)}</td></tr>`,
    )
    .join("\n")}
</table>
<p style="margin:20px 0 6px;color:#667085;font-size:14px">Message</p>
<div style="white-space:pre-wrap;font-size:15px">${escapeHtml(message)}</div>
<p style="margin:24px 0 0;color:#667085;font-size:12px">Reply to this email to answer the sender directly.</p>
</body></html>`;

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        // 587 starts plain and upgrades with STARTTLS; 465 is TLS from the first byte.
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    try {
        const info = await transporter.sendMail({
            from: { name: singleLine(SMTP_FROM_NAME || SITE.name), address: SMTP_FROM_EMAIL },
            to: SITE.email,
            replyTo: { name: fullName, address: email },
            subject: singleLine(`[Website: ${label}] ${subject}`),
            text: textBody,
            html: htmlBody,
        });

        // The outcome, not the content. No name, no address, no message body,
        // and never a credential.
        console.info("contact.sent", { inquiryType, messageId: info.messageId });
        return json({ ok: true }, 200);
    } catch (error) {
        const err = error as { code?: string; responseCode?: number };
        console.error("contact.failed", { inquiryType, code: err.code, responseCode: err.responseCode });
        return json({ ok: false, error: "Your enquiry could not be sent. Please try again or email us directly." }, 502);
    }
}
