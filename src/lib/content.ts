import { mockInsights, type InsightArticle, type ArticleCategory } from "@/lib/mock-data/insights";

/**
 * Content helpers shared by every page that lists articles.
 *
 * Dates were being formatted three different ways across the site: en-GB in
 * the home page list and en-US in the two insight components, so the same
 * article showed as "18 July 2026" in one place and "Jul 18, 2026" in
 * another. Sri Lanka writes day first, so everything goes through these.
 *
 * The explicit Asia/Colombo time zone matters. The stored dates are plain
 * calendar days, and formatting them on a server running in UTC shifted some
 * of them back by one day.
 */
const DISPLAY = { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Colombo" } as const;
const DISPLAY_SHORT = { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Colombo" } as const;

export function formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString("en-GB", DISPLAY);
}

export function formatDateShort(iso: string): string {
    return new Date(iso).toLocaleDateString("en-GB", DISPLAY_SHORT);
}

/** Machine readable value for <time dateTime>, which needs the raw calendar day. */
export function isoDate(iso: string): string {
    return new Date(iso).toISOString().slice(0, 10);
}

/** Newest first. Every list on the site reads in this order. */
export function byNewest(a: InsightArticle, b: InsightArticle): number {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export const ALL_ARTICLES: InsightArticle[] = [...mockInsights].sort(byNewest);

export const ARTICLE_COUNT = ALL_ARTICLES.length;

/** The categories that actually carry articles, in the order they are used. */
export const ACTIVE_CATEGORIES: ArticleCategory[] = (
    ["News", "Announcements", "Policy", "Member Stories", "Ecosystem", "Press"] as ArticleCategory[]
).filter((category) => ALL_ARTICLES.some((article) => article.category === category));

export function countByCategory(category: ArticleCategory): number {
    return ALL_ARTICLES.filter((article) => article.category === category).length;
}

export function articlesInCategory(category: ArticleCategory): InsightArticle[] {
    return ALL_ARTICLES.filter((article) => article.category === category);
}

export function latestArticles(limit: number): InsightArticle[] {
    return ALL_ARTICLES.slice(0, limit);
}

/**
 * Related articles for a detail page: same category first, then the newest of
 * anything else to fill the row. Without the fallback, an article in a thin
 * category such as Press showed a single related item or none at all.
 */
export function relatedArticles(article: InsightArticle, limit = 3): InsightArticle[] {
    const sameCategory = ALL_ARTICLES.filter(
        (candidate) => candidate.slug !== article.slug && candidate.category === article.category,
    );

    if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

    const filler = ALL_ARTICLES.filter(
        (candidate) => candidate.slug !== article.slug && candidate.category !== article.category,
    );

    return [...sameCategory, ...filler].slice(0, limit);
}

/** The span the archive covers, used in copy rather than hard coded. */
export function archiveYears(): { first: number; last: number } {
    const years = ALL_ARTICLES.map((article) => new Date(article.date).getFullYear());
    return { first: Math.min(...years), last: Math.max(...years) };
}

export type { InsightArticle, ArticleCategory };
