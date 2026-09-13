"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, CalendarCheck, CheckCircle2, AlertCircle } from "lucide-react";

import { FIELD_LIMITS, submitEnquiry } from "@/lib/contact";
import { SITE } from "@/lib/seo";

/**
 * Investor enquiry form.
 *
 * It used to do nothing at all: the submit handler only prevented the default,
 * so a visitor pressed the button and nothing happened, with no message either
 * way. It now sends through the same /api/contact route as the contact form,
 * as an Investment enquiry, so it lands in the same inbox and the visitor gets
 * the same confirmation.
 *
 * The primary interest becomes the email subject, which is what the chamber
 * needs to triage an investor enquiry at a glance.
 */
const INTERESTS = [
  { value: "investment", label: "Direct Investment / Funding" },
  { value: "outsource", label: "Outsourcing / Vendor Discovery" },
  { value: "presence", label: "Establishing a Presence" },
  { value: "partnership", label: "Strategic Partnership" },
  { value: "other", label: "Other Inquiry" },
] as const;

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  organisation: "",
  interest: "",
  message: "",
  consent: false,
  website: "",
};

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; confirmationSent: boolean }
  | { state: "error"; message: string };

const INPUT =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue";

export default function InvestInquiryForm() {
  const [fields, setFields] = useState(EMPTY);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const set =
    (name: keyof typeof EMPTY) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const target = event.target;
      const value = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value;
      setFields((current) => ({ ...current, [name]: value }));
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus({ state: "sending" });

    const interest = INTERESTS.find((option) => option.value === fields.interest)?.label ?? "Investment enquiry";
    const result = await submitEnquiry({
      inquiryType: "Investment",
      firstName: fields.firstName,
      lastName: fields.lastName,
      email: fields.email,
      phone: "",
      organisation: fields.organisation,
      memberId: "",
      subject: interest,
      message: fields.message,
      consent: fields.consent,
      website: fields.website,
    });

    if (result.ok) {
      setStatus({ state: "sent", confirmationSent: result.confirmationSent });
      setFields(EMPTY);
      return;
    }
    setStatus({ state: "error", message: result.error });
  };

  const sending = status.state === "sending";

  return (
    <section id="inquiry" className="py-24 bg-ncit-ink text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Start a Conversation</h2>
            <div className="w-12 h-1 bg-ncit-blue rounded-full mb-8"></div>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
              Whether you are ready to invest, seeking a reliable technology partner, or exploring the ecosystem, the
              Northern Chamber of Information Technology is your first point of contact.
            </p>
            {/* This card used to offer "a 30-minute introductory call with our
                partnerships team", a specific service nobody at the chamber had
                committed to. It now describes what actually happens. */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-ncit-blue/20 text-ncit-blue flex items-center justify-center shrink-0">
                <CalendarCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Tell us what you are looking for</h3>
                <p className="text-sm text-white/60">
                  Your enquiry goes directly to the chamber, and we will come back to you to discuss your requirements.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl"
          >
            {status.state === "sent" ? (
              <div role="status" className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">Thank you. Your enquiry has been received.</p>
                    <p className="mt-1 text-sm text-white/80">
                      {status.confirmationSent
                        ? "We have emailed a copy to the address you gave. "
                        : "We could not email you a copy, but your enquiry reached us. "}
                      We will contact you as soon as we can, so please be patient.
                    </p>
                    <p className="mt-3 text-sm text-white/80">
                      Urgent? Call or WhatsApp us now on{" "}
                      <a href={`tel:${SITE.telephone}`} className="font-semibold text-white underline underline-offset-4 hover:no-underline">
                        {SITE.telephoneDisplay}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus({ state: "idle" })}
                      className="mt-4 inline-block py-1 text-sm font-medium text-white underline underline-offset-4 hover:no-underline"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Honeypot: off screen and out of the tab order. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor="invest-website">Website</label>
                  <input id="invest-website" name="website" type="text" tabIndex={-1} autoComplete="off"
                    value={fields.website} onChange={set("website")} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="invest-first-name" className="text-sm font-medium text-white/80">First Name</label>
                    <input id="invest-first-name" name="firstName" type="text" required autoComplete="given-name"
                      maxLength={FIELD_LIMITS.firstName} value={fields.firstName} onChange={set("firstName")}
                      className={INPUT} placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="invest-last-name" className="text-sm font-medium text-white/80">Last Name</label>
                    <input id="invest-last-name" name="lastName" type="text" required autoComplete="family-name"
                      maxLength={FIELD_LIMITS.lastName} value={fields.lastName} onChange={set("lastName")}
                      className={INPUT} placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="invest-email" className="text-sm font-medium text-white/80">Work Email</label>
                  <input id="invest-email" name="email" type="email" required autoComplete="email"
                    maxLength={FIELD_LIMITS.email} value={fields.email} onChange={set("email")}
                    className={INPUT} placeholder="jane@company.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="invest-organisation" className="text-sm font-medium text-white/80">Organization / Fund</label>
                  <input id="invest-organisation" name="organisation" type="text" required autoComplete="organization"
                    maxLength={FIELD_LIMITS.organisation} value={fields.organisation} onChange={set("organisation")}
                    className={INPUT} placeholder="Company Name" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="invest-interest" className="text-sm font-medium text-white/80">Primary Interest</label>
                  <select id="invest-interest" name="interest" required value={fields.interest} onChange={set("interest")}
                    className={`${INPUT} appearance-none`}>
                    <option value="" className="text-gray-900">Select an option</option>
                    {INTERESTS.map((option) => (
                      <option key={option.value} value={option.value} className="text-gray-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="invest-message" className="text-sm font-medium text-white/80">How can we help?</label>
                  <textarea id="invest-message" name="message" required rows={4}
                    maxLength={FIELD_LIMITS.message} value={fields.message} onChange={set("message")}
                    className={`${INPUT} resize-none`} placeholder="Briefly describe your objectives..." />
                </div>

                <div className="flex items-start gap-3">
                  <input id="invest-consent" name="consent" type="checkbox" required checked={fields.consent}
                    onChange={set("consent")} className="mt-0.5 h-6 w-6 rounded border-white/30 text-ncit-blue focus:ring-ncit-blue" />
                  <label htmlFor="invest-consent" className="text-xs text-white/70 leading-relaxed">
                    I consent to the Northern Chamber of Information Technology using these details to answer my enquiry,
                    as described in the{" "}
                    <Link href="/privacy" className="text-white underline underline-offset-4 hover:no-underline">
                      Privacy Notice
                    </Link>
                    .
                  </label>
                </div>

                {status.state === "error" ? (
                  <div role="alert" className="flex items-start gap-3 rounded-xl border border-rose-400/30 bg-rose-400/10 p-4">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-300" aria-hidden="true" />
                    <p className="text-sm text-white">{status.message}</p>
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center bg-ncit-blue text-white hover:bg-ncit-blue-hover h-14 px-8 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Submit Inquiry"}
                  {!sending && <Send className="w-4 h-4 ml-2" aria-hidden="true" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
