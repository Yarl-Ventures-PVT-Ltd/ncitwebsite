"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

import { ArticleCard, FeatureArticleCard } from "@/components/content/article-card";
import { cn } from "@/lib/utils";
import type { ArticleCategory, InsightArticle } from "@/lib/content";

/**
 * Search and category filtering over the article archive.
 *
 * The previous listing kept its filter in component state only. That meant a
 * filtered view had no address: a reader could not link to it, bookmark it, or
 * reach it with the back button, and every category looked identical to a
 * crawler. The state lives in the query string now, so /insights?category=Policy
 * is a real, shareable page.
 *
 * Filtering runs over the whole archive on the client. With 59 articles that is
 * a few hundred string comparisons, well below the point where debouncing or an
 * index would earn its complexity.
 */
export function ArticleBrowser({
    articles,
    categories,
}: {
    articles: InsightArticle[];
    categories: ArticleCategory[];
}) {
    const router = useRouter();
    const params = useSearchParams();
    const [, startTransition] = useTransition();

    const activeCategory = (params.get("category") as ArticleCategory | null) ?? "All";
    const urlQuery = params.get("q") ?? "";

    // The input is controlled locally so typing stays responsive, and the URL
    // follows it. Without the local copy every keystroke waited on a navigation.
    const [query, setQuery] = useState(urlQuery);

    // Keep the box in step when the query string changes from outside, which is
    // what the back button does. Adjusting during render is React's documented
    // way to reset state from a changing value; doing it in an effect renders
    // the stale value first and then immediately renders again.
    const [lastUrlQuery, setLastUrlQuery] = useState(urlQuery);
    if (urlQuery !== lastUrlQuery) {
        setLastUrlQuery(urlQuery);
        setQuery(urlQuery);
    }

    const pushState = (next: { category?: string; q?: string }) => {
        const search = new URLSearchParams(params.toString());

        if (next.category !== undefined) {
            if (next.category === "All") search.delete("category");
            else search.set("category", next.category);
        }

        if (next.q !== undefined) {
            if (next.q.trim() === "") search.delete("q");
            else search.set("q", next.q);
        }

        const qs = search.toString();
        startTransition(() => router.replace(qs ? `/insights?${qs}` : "/insights", { scroll: false }));
    };

    const results = useMemo(() => {
        const needle = query.trim().toLowerCase();

        return articles.filter((article) => {
            if (activeCategory !== "All" && article.category !== activeCategory) return false;
            if (!needle) return true;

            return (
                article.title.toLowerCase().includes(needle) ||
                article.excerpt.toLowerCase().includes(needle) ||
                article.category.toLowerCase().includes(needle) ||
                (article.keywords ?? []).some((keyword) => keyword.toLowerCase().includes(needle))
            );
        });
    }, [articles, activeCategory, query]);

    const isUnfiltered = activeCategory === "All" && query.trim() === "";
    const [lead, ...rest] = results;

    return (
        <div>
            <div className="border-b border-ncit-line pb-6">
                <form
                    role="search"
                    onSubmit={(event) => {
                        event.preventDefault();
                        pushState({ q: query });
                    }}
                    className="max-w-md"
                >
                    <label htmlFor="article-search" className="ncit-meta mb-2 block text-ncit-ink-3">
                        Search updates
                    </label>

                    <div className="relative">
                        <Search
                            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-ncit-ink-3"
                            aria-hidden="true"
                        />
                        <input
                            id="article-search"
                            type="search"
                            value={query}
                            onChange={(event) => {
                                setQuery(event.target.value);
                                pushState({ q: event.target.value });
                            }}
                            placeholder="Title, topic or keyword"
                            className="h-11 w-full rounded-md border border-ncit-line-strong bg-ncit-paper pr-10 pl-9 text-sm text-ncit-ink placeholder:text-ncit-ink-3 focus-visible:border-ncit-blue"
                        />
                        {query ? (
                            <button
                                type="button"
                                onClick={() => {
                                    setQuery("");
                                    pushState({ q: "" });
                                }}
                                className="absolute top-1/2 right-2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-ncit-ink-3 hover:bg-ncit-surface hover:text-ncit-ink"
                            >
                                <X className="h-4 w-4" aria-hidden="true" />
                                <span className="sr-only">Clear search</span>
                            </button>
                        ) : null}
                    </div>
                </form>

                <div className="mt-6">
                    <h2 className="ncit-meta mb-3 text-ncit-ink-3">Filter by category</h2>
                    <ul className="flex flex-wrap gap-2">
                        {(["All", ...categories] as const).map((category) => {
                            const active = activeCategory === category;

                            return (
                                <li key={category}>
                                    <button
                                        type="button"
                                        aria-pressed={active}
                                        onClick={() => pushState({ category })}
                                        className={cn(
                                            "inline-flex min-h-[36px] items-center rounded-full border px-4 font-mono text-[11px] tracking-[0.08em] uppercase transition-colors",
                                            active
                                                ? "border-ncit-blue bg-ncit-blue text-white"
                                                : "border-ncit-line bg-ncit-paper text-ncit-ink-2 hover:border-ncit-blue hover:text-ncit-blue",
                                        )}
                                    >
                                        {category}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <p aria-live="polite" className="mt-6 text-sm text-ncit-ink-2">
                {results.length === articles.length
                    ? `Showing all ${articles.length} updates`
                    : `${results.length} of ${articles.length} updates`}
                {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
                {query.trim() ? ` matching "${query.trim()}"` : ""}
            </p>

            {results.length === 0 ? (
                <div className="mt-8 rounded-lg border border-ncit-line bg-ncit-surface p-8 text-center">
                    <h3 className="text-base font-semibold text-ncit-ink">No updates match that search</h3>
                    <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ncit-ink-2">
                        Try a shorter phrase, or clear the filters to see the full archive.
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            setQuery("");
                            startTransition(() => router.replace("/insights", { scroll: false }));
                        }}
                        className="mt-5 inline-flex min-h-[44px] items-center rounded-md border border-ncit-line-strong bg-ncit-paper px-5 text-sm font-medium text-ncit-ink hover:bg-ncit-surface-2"
                    >
                        Clear filters
                    </button>
                </div>
            ) : (
                <div className="mt-8">
                    {isUnfiltered && lead ? (
                        <>
                            <FeatureArticleCard article={lead} />
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
        </div>
    );
}
