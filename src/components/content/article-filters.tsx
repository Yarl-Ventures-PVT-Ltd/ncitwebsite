"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ArticleCategory } from "@/lib/content";

/**
 * The filter controls for the article archive.
 *
 * This is the only part of the archive that needs to be a client component.
 * The list itself is rendered on the server from the query string, which is
 * what it always should have done: when the whole browser lived in here it
 * called useSearchParams, that forced the entire island to render on the
 * client, and the server shipped the Suspense fallback instead of the
 * articles. A crawler fetching /insights received the string "Loading the
 * archive" and zero of the 59 article links, and the list appearing at
 * hydration pushed the footer down for a layout shift of 0.30, the only one
 * on the site and deep in Google's poor band.
 *
 * So the split is deliberate and worth keeping: controls here, content on the
 * server. Anything added to this file should be an input, never an article.
 */
export function ArticleFilters({
    categories,
    total,
    shown,
}: {
    categories: ArticleCategory[];
    total: number;
    shown: number;
}) {
    const router = useRouter();
    const params = useSearchParams();
    const [, startTransition] = useTransition();

    const activeCategory = params.get("category") ?? "All";
    const urlQuery = params.get("q") ?? "";
    const [query, setQuery] = useState(urlQuery);

    // Keep the box in step when the query string changes from outside, which is
    // what the back button does.
    const [lastUrlQuery, setLastUrlQuery] = useState(urlQuery);
    if (urlQuery !== lastUrlQuery) {
        setLastUrlQuery(urlQuery);
        setQuery(urlQuery);
    }

    // Typing pushes the URL, but not on every keystroke: each push is a server
    // round trip now that the list renders there.
    useEffect(() => {
        if (query === urlQuery) return;
        const timer = window.setTimeout(() => {
            const search = new URLSearchParams(params.toString());
            if (query.trim()) search.set("q", query.trim());
            else search.delete("q");
            const qs = search.toString();
            startTransition(() => router.replace(qs ? `/insights?${qs}` : "/insights", { scroll: false }));
        }, 250);
        return () => window.clearTimeout(timer);
    }, [query, urlQuery, params, router]);

    const setCategory = (category: string) => {
        const search = new URLSearchParams(params.toString());
        if (category === "All") search.delete("category");
        else search.set("category", category);
        const qs = search.toString();
        startTransition(() => router.replace(qs ? `/insights?${qs}` : "/insights", { scroll: false }));
    };

    const clearAll = () => {
        setQuery("");
        startTransition(() => router.replace("/insights", { scroll: false }));
    };

    return (
        <div className="border-b border-ncit-line pb-6">
            <form role="search" onSubmit={(event) => event.preventDefault()} className="max-w-md">
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
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Title, topic or keyword"
                        className="h-11 w-full rounded-md border border-ncit-line-strong bg-ncit-paper pr-10 pl-9 text-sm text-ncit-ink placeholder:text-ncit-ink-3 focus-visible:border-ncit-blue"
                    />
                    {query ? (
                        <button
                            type="button"
                            onClick={clearAll}
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
                                    onClick={() => setCategory(category)}
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

            <p aria-live="polite" className="mt-6 text-sm text-ncit-ink-2">
                {shown === total ? `Showing all ${total} updates` : `${shown} of ${total} updates`}
                {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
                {urlQuery ? ` matching "${urlQuery}"` : ""}
            </p>
        </div>
    );
}
