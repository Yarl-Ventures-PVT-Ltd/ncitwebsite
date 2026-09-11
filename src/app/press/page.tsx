import type { Metadata } from "next";

import PageHeader from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { ArticleRow } from "@/components/content/article-card";
import { ActionLink } from "@/components/ui/action";
import { pressItems } from "@/lib/notices";
import { DOCUMENT_GROUPS } from "@/lib/resources";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
    alternates: { canonical: "/press" },
    title: "Press and Official Statements",
    description:
        "Official statements from the Northern Chamber of Information Technology, including AGM outcomes, board decisions and partnership announcements, with media contact details.",
};

/**
 * Press.
 *
 * There is no corpus of formal press releases to show, and inventing one was
 * not an option. What the chamber does have is a record of speaking
 * officially: AGM outcomes, board meeting decisions and partnership
 * announcements. That is what a journalist is looking for, so that is what
 * this page carries, together with the one thing the old site never gave them,
 * which is a named route to a human.
 */
export default function PressPage() {
    const statements = pressItems();
    const publications = DOCUMENT_GROUPS.find((group) => group.slug === "publications");

    return (
        <>
            <PageHeader
                title="Press and Official Statements"
                lede="Annual general meeting outcomes, board decisions and partnership announcements, published by the chamber."
                crumbs={[{ name: "Press", path: "/press" }]}
                meta={`${statements.length} statements on record`}
            />

            <Section tone="paper">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-8">
                        <h2 className="mb-5 text-base font-semibold text-ncit-ink">Statements</h2>

                        <div className="border-t border-ncit-line">
                            {statements.map((statement) => (
                                <ArticleRow key={statement.slug} article={statement} />
                            ))}
                        </div>
                    </div>

                    <aside className="lg:col-span-4">
                        <div className="rounded-lg border border-ncit-line bg-ncit-surface p-5">
                            <h2 className="text-sm font-semibold text-ncit-ink">Media enquiries</h2>
                            <p className="mt-2 text-sm leading-relaxed text-ncit-ink-2">
                                For comment, interviews or background on the Northern technology sector, contact the
                                chamber secretariat.
                            </p>

                            <dl className="mt-4 space-y-3 text-sm">
                                <div>
                                    <dt className="ncit-meta text-ncit-ink-3">Email</dt>
                                    <dd className="mt-1">
                                        <a
                                            href={`mailto:${SITE.email}`}
                                            className="inline-block py-1 text-ncit-blue underline underline-offset-4 hover:no-underline"
                                        >
                                            {SITE.email}
                                        </a>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="ncit-meta text-ncit-ink-3">Address</dt>
                                    <dd className="mt-1 leading-relaxed text-ncit-ink-2">
                                        {SITE.address.street}
                                        <br />
                                        {SITE.address.locality} {SITE.address.postalCode}
                                        <br />
                                        {SITE.address.region}
                                    </dd>
                                </div>
                            </dl>

                            <div className="mt-5">
                                <ActionLink href="/contact" variant="secondary">
                                    Contact page
                                </ActionLink>
                            </div>
                        </div>
                    </aside>
                </div>

                {publications ? (
                    <div className="mt-16">
                        <SectionHeading title="Chamber publications" lede={publications.description} />

                        <ul className="border-t border-ncit-line">
                            {publications.items.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="group flex items-center gap-4 border-b border-ncit-line py-4 transition-colors hover:bg-ncit-surface"
                                    >
                                        <span className="min-w-0 flex-1 text-sm font-medium text-ncit-ink group-hover:text-ncit-blue">
                                            {item.name}
                                        </span>
                                        <span className="ncit-meta shrink-0 text-ncit-ink-3">{item.note}</span>
                                        <span className="ncit-meta shrink-0 text-ncit-ink-3">
                                            {item.kind}
                                            {item.size ? `, ${item.size}` : ""}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </Section>
        </>
    );
}
