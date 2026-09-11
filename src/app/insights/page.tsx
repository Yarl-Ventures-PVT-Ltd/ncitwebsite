import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";

import PageHeader from "@/components/layout/page-header";
import { Section } from "@/components/ui/section";
import { ArticleFilters } from "@/components/content/article-filters";
import { ArticleCard, FeatureArticleCard } from "@/components/content/article-card";
import { ALL_ARTICLES, ACTIVE_CATEGORIES, ARTICLE_COUNT, archiveYears } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "News and Insights",
    socialTitle: "News and Insights",
    description:
        "News and announcements from NCIT: ICT industry developments, chamber events and member stories across Jaffna and the Northern Province of Sri Lanka.",
    path: "/insights",
    keywords: [
        "NCIT news",
        "ICT news Jaffna",
        "Northern Province technology news",
        "Sri Lanka ICT industry updates",
        "NCIT announcements",
    ],
});

/**
 * The article archive.
 *
 * The list is rendered on the SERVER from the query string. That is the whole
 * point of this file and it must stay that way.
 *
 * It did not always. The filtering used to live in a client component that
 * called useSearchParams, which forced the entire island to render on the
 * client. The server then shipped the Suspense fallback, so /insights, the
 * only complete index of the 59 articles, sent a crawler the string "Loading
 * the archive" and not one article link. The list arriving at hydration also
 * pushed the footer down, which was a cumulative layout shift of 0.30, the
 * single worst metric on the site and the only page that shifted at all.
 *
 * A page receives searchParams as a prop, so no client component is needed to
 * read them. Only the controls are interactive, and they live in
 * ArticleFilters. If you add anything to this page, render it here, not there.
 */
export default async function InsightsPage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string; category?: string }>;
}) {
    const { q, category } = await searchParams;
    const years = archiveYears();

    const needle = (q ?? "").trim().toLowerCase();
    const activeCategory = category ?? "All";

    const results = ALL_ARTICLES.filter((article) => {
        if (activeCategory !== "All" && article.category !== activeCategory) return false;
        if (!needle) return true;
        return (
            article.title.toLowerCase().includes(needle) ||
            article.excerpt.toLowerCase().includes(needle) ||
            article.category.toLowerCase().includes(needle) ||
            (article.keywords ?? []).some((keyword) => keyword.toLowerCase().includes(needle))
        );
    });

    const isUnfiltered = activeCategory === "All" && needle === "";
    const [lead, ...rest] = results;

    return (
        <>
            <PageHeader
                title="News and Insights"
                lede="Announcements, policy updates, member stories and reports from the Northern Chamber of Information Technology."
                crumbs={[{ name: "News and Insights", path: "/insights" }]}
                meta={`${ARTICLE_COUNT} updates published between ${years.first} and ${years.last}`}
            />

            <Section tone="paper">
                {/* useSearchParams needs a Suspense boundary, but only the
                    controls sit inside it now, so the articles below are in the
                    server HTML either way. */}
                <Suspense
                    fallback={<div className="h-[184px] border-b border-ncit-line" aria-hidden="true" />}
                >
                    <ArticleFilters
                        categories={ACTIVE_CATEGORIES}
                        total={ARTICLE_COUNT}
                        shown={results.length}
                    />
                </Suspense>

                {results.length === 0 ? (
                    <div className="mt-8 rounded-lg border border-ncit-line bg-ncit-surface p-8 text-center">
                        <h2 className="text-base font-semibold text-ncit-ink">No updates match that search</h2>
                        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ncit-ink-2">
                            Try a shorter phrase, or clear the filters to see the full archive.
                        </p>
                        <Link
                            href="/insights"
                            className="mt-5 inline-flex min-h-[44px] items-center rounded-md border border-ncit-line-strong bg-ncit-paper px-5 text-sm font-medium text-ncit-ink hover:bg-ncit-surface-2"
                        >
                            Clear filters
                        </Link>
                    </div>
                ) : (
                    <div className="mt-8">
                        {isUnfiltered && lead ? (
                            <>
                                <FeatureArticleCard article={lead} priority />
                                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {rest.map((article) => (
                                        <ArticleCard key={article.slug} article={article} />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {results.map((article, index) => (
                                    <ArticleCard key={article.slug} article={article} priority={index < 3} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </Section>
        </>
    );
}
