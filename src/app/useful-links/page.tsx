import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@/components/layout/page-header";
import { Section } from "@/components/ui/section";
import { ResourceList } from "@/components/content/resource-list";
import { USEFUL_LINK_GROUPS, USEFUL_LINK_COUNT } from "@/lib/resources";

export const metadata: Metadata = {
    alternates: { canonical: "/useful-links" },
    title: "Useful Links",
    description:
        "Government and regulatory bodies a Northern Province technology business deals with: ICTA, the Export Development Board, the Department for Registration of Companies and the Treasury.",
};

/**
 * Useful links.
 *
 * Restored to its original URL. Every link is to a Sri Lankan government or
 * regulatory body, and the list is deliberately short: four organisations a
 * Northern technology business actually has to deal with, rather than a long
 * page of links nobody maintains.
 */
export default function UsefulLinksPage() {
    return (
        <>
            <PageHeader
                title="Useful Links"
                lede="National bodies and government portals that Northern Province technology businesses deal with."
                crumbs={[{ name: "Useful Links", path: "/useful-links" }]}
                meta={`${USEFUL_LINK_COUNT} organisations`}
            />

            <Section tone="paper">
                <div className="max-w-3xl">
                    {USEFUL_LINK_GROUPS.map((group) => (
                        <ResourceList key={group.slug} group={group} />
                    ))}

                    <p className="mt-12 border-t border-ncit-line pt-6 text-sm text-ncit-ink-3">
                        Chamber documents and membership forms are on the{" "}
                        <Link
                            href="/resources"
                            className="text-ncit-blue underline underline-offset-4 hover:no-underline"
                        >
                            resources page
                        </Link>
                        . To suggest a link,{" "}
                        <Link
                            href="/contact"
                            className="text-ncit-blue underline underline-offset-4 hover:no-underline"
                        >
                            contact the chamber
                        </Link>
                        .
                    </p>
                </div>
            </Section>
        </>
    );
}
