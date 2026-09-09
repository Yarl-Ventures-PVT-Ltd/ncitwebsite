import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/mock-data/insights";
import { SITE } from "@/lib/seo";

/**
 * Static routes.
 *
 * No priority or changefreq. Google ignores both, and stating them invites the
 * next person to spend an afternoon tuning numbers that change nothing.
 * Listed in the order a visitor would meet them.
 */
const STATIC_ROUTES: string[] = [
  "/",
  "/about",
  "/about/board",
  "/about/governance",
  "/about/governance/bylaws",
  "/about/history",
  "/membership",
  "/membership/benefits",
  "/membership/apply",
  "/members",
  "/what-we-do",
  "/what-we-do/advocacy",
  "/what-we-do/business-incubation-center",
  "/what-we-do/market-access",
  "/what-we-do/projects",
  "/what-we-do/services",
  "/ecosystem",
  "/ecosystem/resources",
  "/insights",
  "/gallery",
  "/invest",
  "/contact",
];

// Static pages have no per-page change history to draw on, so they share one
// honest date: when their content was last revised. Using build time instead
// would claim every page changed on every deploy, which makes lastmod
// meaningless as a freshness signal and search engines learn to ignore it.
const STATIC_CONTENT_REVISED = new Date("2026-09-09T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: STATIC_CONTENT_REVISED,
  }));

  // Articles carry their real publish date, recovered from the previous site's
  // sitemap. A truthful lastModified is what makes freshness signals useful.
  const articleEntries = getAllArticles().map((article) => ({
    url: `${SITE.url}/insights/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.date),
  }));

  return [...staticEntries, ...articleEntries];
}
