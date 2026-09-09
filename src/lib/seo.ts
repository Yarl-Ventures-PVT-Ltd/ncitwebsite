/**
 * Site-wide SEO configuration and structured-data builders.
 *
 * Three audiences are served here, and they want different things:
 *  - Search engines want titles, descriptions, canonicals and a sitemap.
 *  - Local search wants a real postal address and a named service area.
 *  - Answer engines (AI assistants, featured snippets) want explicit, factual
 *    JSON-LD they can quote without guessing.
 *
 * Every value below is confirmed by NCIT. The office address matches the
 * visible contact page and its map pin; the previous site published an older
 * K.K.S Road address which is superseded. Nothing here is invented: if a fact
 * is not known, it is left out rather than filled in with a placeholder.
 */

export const SITE = {
  name: "NCIT",
  legalName: "Northern Chamber of Information Technology",
  url: "https://www.ncit.lk",
  description:
    "NCIT is the industry chamber for the ICT sector in Northern Sri Lanka, connecting technology companies, talent, startups and investors across Jaffna.",
  locale: "en_LK",
  founded: "2016",
  address: {
    street: "136/1 Palaly Road, Parameswara Junction",
    locality: "Jaffna",
    region: "Northern Province",
    postalCode: "40000",
    country: "LK",
  },
  email: "support@ncit.lk",
  telephone: "+94770869328",
  social: [
    "https://www.facebook.com/NCITLK/",
    "https://www.facebook.com/groups/190201704676007/",
    "https://www.linkedin.com/company/ncitsl/",
  ],
} as const;

/** Area served, stated explicitly so local and generative search can use it. */
export const SERVICE_AREA = [
  "Jaffna",
  "Kilinochchi",
  "Mullaitivu",
  "Mannar",
  "Vavuniya",
  "Northern Province",
  "Sri Lanka",
];

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * Organization plus local-business details in one node. The postal address and
 * the named service area are what local and map results read.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    description: SITE.description,
    foundingDate: SITE.founded,
    email: SITE.email,
    telephone: SITE.telephone,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo/ncit-logo.png"),
      width: 800,
      height: 344,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    // Coordinates taken from the map embed on the contact page, so the pin a
    // visitor sees and the one a search engine reads are the same point.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.697425,
      longitude: 79.999615,
    },
    // The contact page displays these hours; the markup only restates them.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: SERVICE_AREA.map((name) => ({ "@type": "Place", name })),
    knowsAbout: [
      "Information and communication technology",
      "ICT industry development",
      "Startup ecosystem development",
      "Business incubation",
      "Digital transformation",
      "ICT skills and training",
    ],
    sameAs: [...SITE.social],
  };
}

/** The site as a searchable entity. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.legalName,
    description: SITE.description,
    inLanguage: "en",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
  section?: string;
  language?: "English" | "Tamil" | "Sinhala" | "Bilingual";
}

/**
 * Map the editorial language label to a BCP-47 tag. Several migrated articles
 * are wholly or partly Tamil, so claiming English on all of them misstates the
 * content to both search engines and assistants. A bilingual piece lists both
 * tags rather than picking one.
 */
const BCP47: Record<string, string | string[]> = {
  English: "en",
  Tamil: "ta",
  Sinhala: "si",
  Bilingual: ["en", "ta"],
};

/** A news article, so it can surface as a dated, attributed result. */
export function articleSchema(a: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": absoluteUrl(`/insights/${a.slug}#article`),
    headline: a.title.slice(0, 110),
    description: a.description,
    datePublished: a.datePublished,
    dateModified: a.dateModified || a.datePublished,
    articleSection: a.section,
    keywords: a.keywords?.join(", "),
    inLanguage: BCP47[a.language || "English"] ?? "en",
    image: a.image ? [absoluteUrl(a.image)] : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/insights/${a.slug}`) },
    author: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
    publisher: { "@id": `${SITE.url}/#organization` },
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}

/** Breadcrumbs give search results a readable hierarchy under the title. */
export function breadcrumbSchema(trail: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * Question and answer pairs, written so an assistant can lift them verbatim.
 * This is the part that answer engines quote, so each answer is self-contained
 * and names the organisation and the place rather than relying on context.
 */
export function faqSchema(qa: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Baseline questions about NCIT, used on the home page. */
export const ORGANISATION_FAQ = [
  {
    question: "What is NCIT?",
    answer:
      "NCIT is the Northern Chamber of Information Technology, the industry chamber representing the information and communication technology sector in Northern Sri Lanka. It was founded in 2016 and is based at 136/1 Palaly Road, Parameswara Junction, Jaffna.",
  },
  {
    question: "Where is NCIT located?",
    answer:
      "NCIT is located at 136/1 Palaly Road, Parameswara Junction, Jaffna, in the Northern Province of Sri Lanka. It serves Jaffna, Kilinochchi, Mullaitivu, Mannar and Vavuniya.",
  },
  {
    question: "Who can join NCIT?",
    answer:
      "Technology companies, ICT professionals, startups, training institutions and students connected to the Northern Province of Sri Lanka can apply for NCIT membership. Membership categories and benefits are listed on the NCIT membership pages.",
  },
  {
    question: "What does NCIT do?",
    answer:
      "NCIT develops the ICT industry in Northern Sri Lanka through advocacy, business incubation, market access for member companies, skills and training programmes, and events that connect the regional technology ecosystem with national and international partners.",
  },
  {
    question: "How do I contact NCIT?",
    answer:
      "NCIT can be reached by email at support@ncit.lk, or by telephone on +94 77 086 9328. The chamber office is at 136/1 Palaly Road, Parameswara Junction, Jaffna, Sri Lanka.",
  },
];

/** Renders a JSON-LD block. Next inlines this into the served HTML. */
export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
