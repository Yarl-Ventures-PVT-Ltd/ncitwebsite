import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@/components/layout/page-header";
import { Section } from "@/components/ui/section";
import { ResourceList } from "@/components/content/resource-list";
import { DOCUMENT_GROUPS, DOCUMENT_COUNT } from "@/lib/resources";

export const metadata: Metadata = {
    alternates: { canonical: "/resources" },
    title: "Resources and Downloads",
    description:
        "Membership forms in English and Tamil, project proposal formats, newsletters, brochures and conference speeches published by the Northern Chamber of Information Technology.",
};

/**
 * Resources.
 *
 * Restored to the URL the previous ncit.lk used. It had been redirected to
 * /ecosystem/resources, which buried the membership form two levels down under
 * a section name no one searches for.
 */
export default function ResourcesPage() {
    return (
        <>
            <PageHeader
                title="Resources and Downloads"
                lede="Membership forms, proposal formats, chamber publications and conference speeches from the archive."
                crumbs={[{ name: "Resources", path: "/resources" }]}
                meta={`${DOCUMENT_COUNT} documents, all hosted here`}
            />

            <Section tone="paper">
                <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">
                    {DOCUMENT_GROUPS.map((group) => (
                        <ResourceList key={group.slug} group={group} />
                    ))}
                </div>

                <p className="mt-12 border-t border-ncit-line pt-6 text-sm text-ncit-ink-3">
                    Looking for national bodies and government portals? See{" "}
                    <Link
                        href="/useful-links"
                        className="text-ncit-blue underline underline-offset-4 hover:no-underline"
                    >
                        useful links
                    </Link>
                    .
                </p>
            </Section>
        </>
    );
}
