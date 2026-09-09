import { ORGANISATION_FAQ } from "@/lib/seo";

/**
 * The core questions about NCIT, rendered as real page text.
 *
 * These answers previously existed only inside a JSON-LD script tag, which is
 * the wrong way round twice over: Google requires FAQ markup to describe
 * content visible on the page, and the extraction pipelines that answer
 * engines use strip script tags before reading anything. Written for a reader
 * first; the schema on this page is generated from the same source.
 *
 * Each answer is deliberately self-contained, naming the organisation and the
 * place rather than relying on the surrounding page for context, so it can be
 * quoted on its own.
 */
export default function OrganisationFaq() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ncit-ink mb-4">
            Common questions about NCIT
          </h2>
          <p className="text-ncit-ink/70 text-lg mb-12">
            The essentials about who we are, where we are, and how to join.
          </p>

          <dl className="space-y-8">
            {ORGANISATION_FAQ.map((item) => (
              <div key={item.question} className="border-b border-slate-200 pb-8 last:border-0">
                <dt className="font-heading text-xl font-bold text-ncit-ink mb-3">
                  {item.question}
                </dt>
                <dd className="text-ncit-ink/75 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
