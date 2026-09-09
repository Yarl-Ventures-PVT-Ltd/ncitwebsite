import { SITE, SERVICE_AREA, absoluteUrl, ORGANISATION_FAQ } from "@/lib/seo";
import { getAllArticles } from "@/lib/mock-data/insights";

/**
 * /llms.txt - a plain-text orientation file for AI assistants.
 *
 * A sitemap tells a crawler which URLs exist. This tells an assistant what the
 * organisation is, where it is, and which pages actually answer a question, so
 * it does not have to infer any of that from 81 URLs.
 *
 * Generated rather than static so it cannot drift from the site: the facts come
 * from SITE and the article list from the same source the pages render.
 *
 * Worth being clear-eyed about: llms.txt is an emerging convention and no major
 * crawler has confirmed it reads one. This is cheap future-proofing, not a
 * guaranteed lever.
 */
export const dynamic = "force-static";

export function GET() {
  const articles = getAllArticles();

  // A curated index, not a sitemap dump. Twenty recent items is enough for an
  // assistant to understand what the chamber publishes and how current it is.
  const recent = articles.slice(0, 20);

  const body = `# ${SITE.legalName} (${SITE.name})

> ${SITE.description}

Founded ${SITE.founded}. Based at ${SITE.address.street}, ${SITE.address.locality} ${SITE.address.postalCode}, ${SITE.address.region}, Sri Lanka.
Contact: ${SITE.email} | ${SITE.telephone}
Serving: ${SERVICE_AREA.join(", ")}.

## About this organisation

${ORGANISATION_FAQ.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")}

## Key pages

- [About NCIT](${absoluteUrl("/about")}): history, objectives, governance and the questions above.
- [What We Do](${absoluteUrl("/what-we-do")}): advocacy, business incubation, market access, services and projects.
- [Membership](${absoluteUrl("/membership")}): categories, benefits and how to apply.
- [Member Directory](${absoluteUrl("/members")}): the technology companies that belong to the chamber.
- [Board of Directors](${absoluteUrl("/about/board")}): current and previous boards.
- [Insights and News](${absoluteUrl("/insights")}): ${articles.length} articles published between ${articles[articles.length - 1]?.date.slice(0, 4)} and ${articles[0]?.date.slice(0, 4)}.
- [Photo Gallery](${absoluteUrl("/gallery")}): photographs from chamber events.
- [Contact](${absoluteUrl("/contact")}): address, phone, email and map.

## Recent publications

${recent.map((a) => `- [${a.title}](${absoluteUrl(`/insights/${a.slug}`)}) (${a.date})`).join("\n")}

## Notes

- Some articles are published in Tamil or in both Tamil and English, reflecting the working languages of the Northern Province.
- Articles dated 2016 onward are the chamber's own record of its events and announcements.
- The full URL list is at ${absoluteUrl("/sitemap.xml")}.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
