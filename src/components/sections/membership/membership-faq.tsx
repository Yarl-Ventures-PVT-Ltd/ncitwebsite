import { MEMBERSHIP_FAQS } from "@/lib/membership-faqs";
import { ChevronDown } from "lucide-react";

/**
 * The membership questions, as a native disclosure list.
 *
 * This was a client accordion that rendered only the open panel, so four of the
 * five answers never appeared in the server HTML at all. A crawler saw four
 * questions with no answers, and the FAQPage markup on this page claimed
 * answers that were not on the page, which is exactly what Google's structured
 * data guidelines forbid.
 *
 * details and summary keep every answer in the document, collapse without
 * JavaScript, and are already understood by assistive technology, so the
 * component no longer needs to be a client component at all.
 */
export default function MembershipFAQ() {
  return (
    <section className="py-24 bg-ncit-cloud relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-ncit-ink mb-4">Frequently Asked Questions</h2>
          <p className="text-ncit-ink/70">
            Have questions about joining NCIT? Check our common queries below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {MEMBERSHIP_FAQS.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group bg-white rounded-2xl border border-gray-200 open:border-ncit-blue open:shadow-sm transition-all"
            >
              <summary className="flex items-center justify-between gap-8 p-6 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="font-bold text-ncit-ink">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 shrink-0 text-ncit-ink/50 transition-transform group-open:rotate-180 group-open:text-ncit-blue" />
              </summary>
              <div className="p-6 pt-0 text-sm text-ncit-ink/70 leading-relaxed border-t border-gray-50">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
