import { Download, ExternalLink } from "lucide-react";

import { Section, SectionHeading } from "@/components/ui/section";
import { MoreLink } from "@/components/ui/action";
import { DOCUMENT_GROUPS, USEFUL_LINK_GROUPS } from "@/lib/resources";

/**
 * Resources, on the home page.
 *
 * Documents and outward links sit side by side because they answer two
 * different questions a visitor arrives with: "where is the membership form"
 * and "where do I register a company". Both are common enough to deserve a
 * route off the front page.
 *
 * File type and size are printed next to every download. On a mobile
 * connection a 3.7 MB newsletter is a decision, and a link that does not say
 * so is a small act of rudeness.
 */
export default function ResourcesPreview() {
    const documents = DOCUMENT_GROUPS.flatMap((group) => group.items).slice(0, 4);
    const links = USEFUL_LINK_GROUPS.flatMap((group) => group.items).slice(0, 4);

    return (
        <Section tone="paper" labelledBy="home-resources">
            <SectionHeading
                id="home-resources"
                title="Resources"
                lede="Membership forms, chamber publications and the national bodies members deal with."
            />

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                    <div className="mb-4 flex items-baseline justify-between gap-4">
                        <h3 className="text-sm font-semibold text-ncit-ink">Documents</h3>
                        <MoreLink href="/resources">All documents</MoreLink>
                    </div>

                    <ul className="border-t border-ncit-line">
                        {documents.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="group flex items-center gap-4 border-b border-ncit-line py-4 transition-colors hover:bg-ncit-surface"
                                >
                                    <Download
                                        className="h-4 w-4 shrink-0 text-ncit-ink-3 group-hover:text-ncit-blue"
                                        aria-hidden="true"
                                    />
                                    <span className="min-w-0 flex-1 text-sm font-medium text-ncit-ink group-hover:text-ncit-blue">
                                        {item.name}
                                    </span>
                                    <span className="ncit-meta shrink-0 text-ncit-ink-3">
                                        {item.kind}
                                        {item.size ? `, ${item.size}` : ""}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="mb-4 flex items-baseline justify-between gap-4">
                        <h3 className="text-sm font-semibold text-ncit-ink">Useful links</h3>
                        <MoreLink href="/useful-links">All links</MoreLink>
                    </div>

                    <ul className="border-t border-ncit-line">
                        {links.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 border-b border-ncit-line py-4 transition-colors hover:bg-ncit-surface"
                                >
                                    <ExternalLink
                                        className="h-4 w-4 shrink-0 text-ncit-ink-3 group-hover:text-ncit-blue"
                                        aria-hidden="true"
                                    />
                                    <span className="min-w-0 flex-1 text-sm font-medium text-ncit-ink group-hover:text-ncit-blue">
                                        {item.name}
                                        <span className="sr-only"> (opens in a new tab)</span>
                                    </span>
                                    <span className="ncit-meta shrink-0 text-ncit-ink-3">{item.note}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}
