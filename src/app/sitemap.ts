import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/mock-data/insights";
import { SITE } from "@/lib/seo";

/**
 * Static routes, with priority reflecting how much of the chamber's business
 * each one carries. Membership and contact convert; archive pages do not.
 */
const STATIC_ROUTES: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about/board", priority: 0.7, changeFrequency: "yearly" },
  { path: "/about/governance", priority: 0.6, changeFrequency: "yearly" },
  { path: "/about/governance/bylaws", priority: 0.5, changeFrequency: "yearly" },
  { path: "/about/history", priority: 0.6, changeFrequency: "yearly" },
  { path: "/membership", priority: 0.9, changeFrequency: "monthly" },
  { path: "/membership/benefits", priority: 0.8, changeFrequency: "monthly" },
  { path: "/membership/apply", priority: 0.9, changeFrequency: "monthly" },
  { path: "/members", priority: 0.7, changeFrequency: "monthly" },
  { path: "/what-we-do", priority: 0.8, changeFrequency: "monthly" },
  { path: "/what-we-do/advocacy", priority: 0.7, changeFrequency: "monthly" },
  { path: "/what-we-do/business-incubation-center", priority: 0.8, changeFrequency: "monthly" },
  { path: "/what-we-do/market-access", priority: 0.7, changeFrequency: "monthly" },
  { path: "/what-we-do/projects", priority: 0.7, changeFrequency: "monthly" },
  { path: "/what-we-do/services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ecosystem", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ecosystem/resources", priority: 0.6, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
  { path: "/invest", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
];

// Static pages have no per-page change history to draw on, so they share one
// honest date: when their content was last revised. Using build time instead
// would claim every page changed on every deploy, which makes lastmod
// meaningless as a freshness signal and search engines learn to ignore it.
const STATIC_CONTENT_REVISED = new Date("2026-09-09T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: STATIC_CONTENT_REVISED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Articles carry their real publish date, recovered from the previous site's
  // sitemap. A truthful lastModified is what makes freshness signals useful.
  const articleEntries = getAllArticles().map((article) => ({
    url: `${SITE.url}/insights/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries];
}
