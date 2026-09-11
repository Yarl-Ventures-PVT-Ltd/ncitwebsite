import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { ArticleCard } from "@/components/content/article-card";
import { ArticleRow } from "@/components/content/article-card";
import { MoreLink } from "@/components/ui/action";
import { latestArticles, archiveYears, ARTICLE_COUNT } from "@/lib/content";
import { resolvedEvents } from "@/lib/events";
import { noticeBoardItems } from "@/lib/notices";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "What's New",
  socialTitle: "What's New",
  description: "The latest news, open notices and events from the Northern Chamber of Information Technology, gathered on one page.",
  path: "/whats-new",
});

/**
 * What's New.
 *
 * A digest across three different kinds of content rather than another list of
 * articles. That distinction is the reason the page exists: /insights is the
 * full archive with filtering, this is the short answer to "has anything
 * happened since I last looked", which is a different question.
 *
 * Nothing here is duplicated wholesale. Each block shows the top few of its
 * kind and hands off to the page that owns it.
 */
export default function WhatsNewPage() {
    const articles = latestArticles(6);
    const notices = noticeBoardItems().slice(0, 3);
    const events = resolvedEvents().slice(0, 3);
    const years = archiveYears();

    return (
        <>
            <PageHeader
                title="What's New"
                lede="The most recent news, open notices and events from the chamber, in one place."
                crumbs={[{ name: "What's New", path: "/whats-new" }]}
                meta={`${ARTICLE_COUNT} updates published between ${years.first} and ${years.last}`}
            />

            <Section tone="paper" labelledBy="whats-new-articles">
                <SectionHeading
                    id="whats-new-articles"
                    title="Latest updates"
                    action={<MoreLink href="/insights">All updates</MoreLink>}
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <ArticleCard key={article.slug} article={article} priority={index < 3} />
                    ))}
                </div>
            </Section>

            <Section tone="surface" labelledBy="whats-new-notices">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <SectionHeading
                            id="whats-new-notices"
                            title="Open notices"
                            action={<MoreLink href="/notice-board">Notice board</MoreLink>}
                            className="mb-6"
                        />

                        <div className="border-t border-ncit-line">
                            {notices.map((notice) => (
                                <ArticleRow key={notice.slug} article={notice} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <SectionHeading
                            id="whats-new-events"
                            title="Recent events"
                            action={<MoreLink href="/events">All events</MoreLink>}
                            className="mb-6"
                        />

                        <ul className="border-t border-ncit-line">
                            {events.map((event) => (
                                <li key={event.slug} className="group relative border-b border-ncit-line py-5">
                                    <p className="ncit-date text-ncit-ink-3">{event.heldOnLabel ?? event.kind}</p>
                                    <h3 className="mt-2 text-[0.95rem] leading-snug font-medium text-ncit-ink">
                                        <Link
                                            href={`/insights/${event.slug}`}
                                            className="after:absolute after:inset-0 after:content-[''] group-hover:text-ncit-blue"
                                        >
                                            {event.name}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-ncit-ink-3">{event.location}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
        </>
    );
}
