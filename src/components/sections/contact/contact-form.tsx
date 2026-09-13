"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Users, Briefcase, Landmark, Megaphone, HelpCircle, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";

import { FIELD_LIMITS, INQUIRY_TYPES, type InquiryType } from "@/lib/contact";
import { SITE } from "@/lib/seo";

const ICONS: Record<InquiryType, React.ReactNode> = {
  General: <MessageSquare className="w-5 h-5" />,
  Membership: <Users className="w-5 h-5" />,
  Investment: <Briefcase className="w-5 h-5" />,
  Government: <Landmark className="w-5 h-5" />,
  Media: <Megaphone className="w-5 h-5" />,
  Support: <HelpCircle className="w-5 h-5" />,
};

/**
 * One line of guidance per inquiry type. The investment line used to promise a
 * reply "within 24 hours", a commitment nobody at the chamber had made, so it
 * now describes the route instead of guaranteeing a response time.
 */
const INTROS: Record<InquiryType, React.ReactNode> = {
  General: "Have a question? We're here to help.",
  Membership: (
    <>
      To apply, use the{" "}
      <Link href="/membership/apply" className="text-ncit-blue underline underline-offset-4 hover:no-underline">
        membership application
      </Link>
      . Use this form for questions about joining.
    </>
  ),
  Investment: "For investment, partnership and sponsorship enquiries.",
  Government: "For official communications and policy matters.",
  Media: "For press enquiries, interview requests and media assets.",
  Support: "Include your member ID or registered email and we can find your record faster.",
};

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organisation: "",
  memberId: "",
  subject: "",
  message: "",
  consent: false,
  website: "",
};

type Status = { state: "idle" } | { state: "sending" } | { state: "sent" } | { state: "error"; message: string };

const INPUT =
  "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-ncit-ink focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue transition-all";

/**
 * Contact form.
 *
 * The fields live in one state object held above the animated area. Before,
 * the whole form sat inside a motion element keyed on the inquiry type, so
 * changing the type remounted the form and erased everything the visitor had
 * typed. Only the heading animates now.
 *
 * It used to report success after a timer and never sent anything, and it
 * claimed reCAPTCHA protection the site does not have. It now posts to
 * /api/contact and shows the real outcome.
 */
export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("General");
  const [fields, setFields] = useState(EMPTY);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const set = (name: keyof typeof EMPTY) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.type === "checkbox" ? (event.target as HTMLInputElement).checked : event.target.value;
    setFields((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus({ state: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inquiryType, ...fields }),
      });
      const result = await response.json().catch(() => ({ ok: false }));

      if (response.ok && result.ok) {
        setStatus({ state: "sent" });
        setFields(EMPTY);
        return;
      }
      setStatus({ state: "error", message: result.error || "Your enquiry could not be sent. Please try again." });
    } catch {
      setStatus({ state: "error", message: "Your enquiry could not be sent. Check your connection and try again." });
    }
  };

  const current = INQUIRY_TYPES.find((type) => type.id === inquiryType)!;
  const sending = status.state === "sending";

  return (
    <section className="py-20 bg-white relative -mt-8 z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            {/* Sidebar Routes */}
            <div className="lg:w-1/3 bg-ncit-cloud p-6 md:p-8 border-r border-gray-100">
              <h2 id="inquiry-type-heading" className="text-lg font-bold text-ncit-ink mb-6">
                Select Inquiry Type
              </h2>
              <div role="group" aria-labelledby="inquiry-type-heading" className="flex flex-col gap-2">
                {INQUIRY_TYPES.map((type) => {
                  const selected = inquiryType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setInquiryType(type.id)}
                      className={`flex items-center gap-3 w-full p-4 rounded-xl text-left transition-all duration-300 ${
                        selected
                          ? "bg-ncit-blue text-white shadow-md shadow-ncit-blue/20"
                          : "bg-white text-ncit-ink/70 hover:text-ncit-ink border border-gray-100"
                      }`}
                    >
                      {ICONS[type.id]}
                      <span className="font-medium text-sm">{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:w-2/3 p-6 md:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={inquiryType}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-ncit-ink mb-2">{current.label}</h2>
                  <p className="text-ncit-ink/60 text-sm mb-8">{INTROS[inquiryType]}</p>
                </motion.div>
              </AnimatePresence>

              {status.state === "sent" ? (
                <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-emerald-900">Thank you. Your enquiry has been received.</p>
                      <p className="mt-1 text-sm text-emerald-800">
                        We have emailed a copy to the address you gave. We will contact you or provide a solution as
                        soon as we can, so please be patient.
                      </p>
                      <p className="mt-3 text-sm text-emerald-900">
                        Urgent? Call or WhatsApp us now on{" "}
                        <a href={`tel:${SITE.telephone}`} className="font-semibold underline underline-offset-4 hover:no-underline">
                          {SITE.telephoneDisplay}
                        </a>
                        .
                      </p>
                      <button
                        type="button"
                        onClick={() => setStatus({ state: "idle" })}
                        className="mt-4 inline-block py-1 text-sm font-medium text-emerald-900 underline underline-offset-4 hover:no-underline"
                      >
                        Send another enquiry
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
                  {/* Honeypot. Off screen and out of the tab order, so a person
                      never meets it. A bot that fills every field fills this
                      one too, and the server drops the submission. */}
                  <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                    <label htmlFor="contact-website">Website</label>
                    <input
                      id="contact-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={fields.website}
                      onChange={set("website")}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-first-name" className="text-sm font-medium text-ncit-ink">
                        First Name
                      </label>
                      <input id="contact-first-name" name="firstName" type="text" required autoComplete="given-name"
                        maxLength={FIELD_LIMITS.firstName} value={fields.firstName} onChange={set("firstName")} className={INPUT} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-last-name" className="text-sm font-medium text-ncit-ink">
                        Last Name
                      </label>
                      <input id="contact-last-name" name="lastName" type="text" required autoComplete="family-name"
                        maxLength={FIELD_LIMITS.lastName} value={fields.lastName} onChange={set("lastName")} className={INPUT} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-sm font-medium text-ncit-ink">
                        Work Email
                      </label>
                      <input id="contact-email" name="email" type="email" required autoComplete="email"
                        maxLength={FIELD_LIMITS.email} value={fields.email} onChange={set("email")} className={INPUT} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-phone" className="text-sm font-medium text-ncit-ink">
                        Phone Number (Optional)
                      </label>
                      <input id="contact-phone" name="phone" type="tel" autoComplete="tel"
                        maxLength={FIELD_LIMITS.phone} value={fields.phone} onChange={set("phone")} className={INPUT} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-organisation" className="text-sm font-medium text-ncit-ink">
                      Organization / Company
                    </label>
                    <input id="contact-organisation" name="organisation" type="text" required autoComplete="organization"
                      maxLength={FIELD_LIMITS.organisation} value={fields.organisation} onChange={set("organisation")} className={INPUT} />
                  </div>

                  {inquiryType === "Support" && (
                    <div className="space-y-2">
                      <label htmlFor="contact-member-id" className="text-sm font-medium text-ncit-ink">
                        Member ID (Optional)
                      </label>
                      <input id="contact-member-id" name="memberId" type="text"
                        maxLength={FIELD_LIMITS.memberId} value={fields.memberId} onChange={set("memberId")} className={INPUT} />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-sm font-medium text-ncit-ink">
                      Subject
                    </label>
                    <input id="contact-subject" name="subject" type="text" required
                      maxLength={FIELD_LIMITS.subject} value={fields.subject} onChange={set("subject")} className={INPUT} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-sm font-medium text-ncit-ink">
                      Message
                    </label>
                    <textarea id="contact-message" name="message" required rows={5}
                      maxLength={FIELD_LIMITS.message} value={fields.message} onChange={set("message")}
                      className={`${INPUT} resize-none`} />
                  </div>

                  <div className="flex items-start gap-3">
                    <input id="consent" name="consent" type="checkbox" required checked={fields.consent} onChange={set("consent")}
                      className="mt-0.5 h-6 w-6 rounded border-gray-300 text-ncit-blue focus:ring-ncit-blue" />
                    <label htmlFor="consent" className="text-xs text-ncit-ink/60 leading-relaxed">
                      I consent to the Northern Chamber of Information Technology using these details to answer my
                      enquiry, as described in the{" "}
                      <Link href="/privacy" className="text-ncit-blue underline underline-offset-4 hover:no-underline">
                        Privacy Notice
                      </Link>
                      .
                    </label>
                  </div>

                  {status.state === "error" ? (
                    <div role="alert" className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-700" aria-hidden="true" />
                      <p className="text-sm text-rose-900">{status.message}</p>
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-ncit-blue text-white hover:bg-ncit-blue-hover h-12 px-8 text-sm font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Inquiry"}
                    {!sending && <Send className="w-4 h-4 ml-2" aria-hidden="true" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
