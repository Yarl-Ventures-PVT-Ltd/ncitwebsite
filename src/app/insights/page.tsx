import type { Metadata } from "next";
import { Suspense } from "react";

import PageHeader from "@/components/layout/page-header";
import { Section } from "@/components/ui/section";
import { ArticleBrowser } from "@/components/content/article-browser";
import { ALL_ARTICLES, ACTIVE_CATEGORIES, ARTICLE_COUNT, archiveYears } from "@/lib/content";
import { SITE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
    title: "News and Insights",
    description:
        "News and announcements from NCIT: ICT industry developments, chamber events and member stories across Jaffna and the Northern Province of Sri Lanka.",
    keywords: [
        "NCIT news",
        "ICT news Jaffna",
        "Northern Province technology news",
        "Sri Lanka ICT industry updates",
        "NCIT announcements",
    ],
    alternates: { canonical: "/insights" },
    openGraph: {
        type: "website",
        title: "News and Insights | NCIT",
        description:
            "News, announcements and reports from the Northern Chamber of Information Technology, Jaffna, Sri Lanka.",
        url: absoluteUrl("/insights"),
        siteName: SITE.legalName,
        locale: SITE.locale,
    },
};

/**
 * The article archive.
 *
 * The page shell is a server component and only the filter island is
 * interactive, so the full list is in the HTML for a crawler and for anyone
 * whose JavaScript has not arrived yet.
 *
 * The non-functional newsletter form that used to close this page has been
 * removed. It called preventDefault and did nothing else, so a reader who
 * entered an address believed they had subscribed to something that did not
 * exist.
 */
export default function InsightsPage() {
    const years = archiveYears();

    return (
        <>
            <PageHeader
                title="News and Insights"
                lede="Announcements, policy updates, member stories and reports from the Northern Chamber of Information Technology."
                crumbs={[{ name: "News and Insights", path: "/insights" }]}
                meta={`${ARTICLE_COUNT} updates published between ${years.first} and ${years.last}`}
            />

            <Section tone="paper">
                <Suspense fallback={<p className="text-sm text-ncit-ink-3">Loading the archive.</p>}>
                    <ArticleBrowser articles={ALL_ARTICLES} categories={ACTIVE_CATEGORIES} />
                </Suspense>
            </Section>
        </>
    );
}
