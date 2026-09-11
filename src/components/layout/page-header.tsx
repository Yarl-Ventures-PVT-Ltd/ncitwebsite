import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { breadcrumbSchema, jsonLd } from "@/lib/seo";

export interface Crumb {
    name: string;
    path: string;
}

/**
 * Inner page header.
 *
 * Every section page used to open with its own dark hero and a 500px blurred
 * colour orb, restated in each file. One component now sets the h1, the
 * breadcrumb trail and the structured data together, so a page cannot ship
 * with a visible trail and no matching BreadcrumbList, which is what happened
 * on the pages that had a trail at all.
 *
 * The trail is a real nav landmark with an aria-label, and the current page is
 * marked with aria-current rather than being left as an unlabelled last item.
 */
export default function PageHeader({
    title,
    lede,
    crumbs,
    meta,
}: {
    title: string;
    lede?: string;
    /** The trail after Home, ending with the current page. Home is added here. */
    crumbs: Crumb[];
    /** Short factual line under the lede, such as a count or a date range. */
    meta?: string;
}) {
    const trail: Crumb[] = [{ name: "Home", path: "/" }, ...crumbs];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(trail))}
            />

            <header className="border-b border-ncit-line bg-ncit-surface">
                <div className="ncit-container py-10 md:py-14">
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            {trail.map((crumb, index) => {
                                const isCurrent = index === trail.length - 1;

                                return (
                                    <li key={crumb.path} className="flex items-center gap-2">
                                        {index > 0 ? (
                                            <ChevronRight
                                                className="h-3.5 w-3.5 text-ncit-ink-3"
                                                aria-hidden="true"
                                            />
                                        ) : null}

                                        {isCurrent ? (
                                            <span className="ncit-meta text-ncit-ink-2" aria-current="page">
                                                {crumb.name}
                                            </span>
                                        ) : (
                                            <Link
                                                href={crumb.path}
                                                className="ncit-meta inline-block py-1 text-ncit-ink-3 transition-colors hover:text-ncit-blue"
                                            >
                                                {crumb.name}
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>

                    <h1 className="ncit-display max-w-4xl text-balance">{title}</h1>

                    {lede ? <p className="ncit-lede mt-5 max-w-2xl">{lede}</p> : null}

                    {meta ? <p className="ncit-meta mt-6 text-ncit-ink-3">{meta}</p> : null}
                </div>
            </header>
        </>
    );
}
