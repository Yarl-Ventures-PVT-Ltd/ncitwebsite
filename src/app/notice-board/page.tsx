import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@/components/layout/page-header";
import { Section } from "@/components/ui/section";
import { ArticleRow } from "@/components/content/article-card";
import { ActionLink } from "@/components/ui/action";
import { noticeBoardItems } from "@/lib/notices";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Notice Board",
  socialTitle: "Notice Board",
  description: "Calls for bids, vacancies, calls for applications and selection results from the Northern Chamber of Information Technology, and compliance notices members need to act on.",
  path: "/notice-board",
});

/**
 * Notice board.
 *
 * This URL existed on the previous ncit.lk and had been turned into a redirect
 * to the insights index, which lost the distinction between a general news
 * post and a notice a supplier has to act on before a deadline. Restoring the
 * page also restores a 200 at a URL search engines already know.
 */
export default function NoticeBoardPage() {
    const notices = noticeBoardItems();

    return (
        <>
            <PageHeader
                title="Notice Board"
                lede="Calls for bids, vacancies, calls for applications and selection results from the chamber, and compliance notices members need to act on."
                crumbs={[{ name: "Notice Board", path: "/notice-board" }]}
                meta={`${notices.length} notices on record`}
            />

            <Section tone="paper">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-8">
                        <h2 className="mb-5 text-base font-semibold text-ncit-ink">Current notices</h2>

                        <div className="border-t border-ncit-line">
                            {notices.map((notice) => (
                                <ArticleRow key={notice.slug} article={notice} />
                            ))}
                        </div>
                    </div>

                    <aside className="lg:col-span-4">
                        <div className="rounded-lg border border-ncit-line bg-ncit-surface p-5">
                            <h2 className="text-sm font-semibold text-ncit-ink">Submitting a notice</h2>
                            <p className="mt-2 text-sm leading-relaxed text-ncit-ink-2">
                                Members can ask the chamber to publish a vacancy, a tender or a call for applications.
                                Contact the secretariat with the details and the closing date.
                            </p>
                            <div className="mt-4">
                                <ActionLink href="/contact" variant="secondary">
                                    Contact the chamber
                                </ActionLink>
                            </div>
                        </div>

                        <div className="mt-6 rounded-lg border border-ncit-line p-5">
                            <h2 className="text-sm font-semibold text-ncit-ink">Elsewhere</h2>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li>
                                    <Link
                                        href="/events"
                                        className="inline-block py-1 text-ncit-blue underline underline-offset-4 hover:no-underline"
                                    >
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/press"
                                        className="inline-block py-1 text-ncit-blue underline underline-offset-4 hover:no-underline"
                                    >
                                        Press and official statements
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/insights"
                                        className="inline-block py-1 text-ncit-blue underline underline-offset-4 hover:no-underline"
                                    >
                                        All updates
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </Section>
        </>
    );
}
