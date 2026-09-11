import { Download, ExternalLink } from "lucide-react";

import type { ResourceGroup } from "@/lib/resources";

/**
 * Renders a group of documents or outward links.
 *
 * Shared by the resources page, the useful links page and the press page so
 * that a download says the same thing about itself everywhere it appears.
 *
 * Two accessibility points are load bearing here. The file type and size sit
 * inside the link text, not beside it, so a screen reader announces "NCIT
 * newsletter, PDF, 3.7 MB" as one name rather than reading a bare "NCIT
 * newsletter" and leaving the reader to discover the download. External links
 * carry a visually hidden note that they open in a new tab.
 */
export function ResourceList({ group }: { group: ResourceGroup }) {
    return (
        <section aria-labelledby={`group-${group.slug}`}>
            <h2 id={`group-${group.slug}`} className="text-base font-semibold text-ncit-ink">
                {group.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ncit-ink-2">{group.description}</p>

            <ul className="mt-5 border-t border-ncit-line">
                {group.items.map((item) => {
                    const isExternal = item.kind === "LINK";
                    const Icon = isExternal ? ExternalLink : Download;

                    return (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className="group flex items-center gap-4 border-b border-ncit-line py-4 transition-colors hover:bg-ncit-surface"
                            >
                                <Icon
                                    className="h-4 w-4 shrink-0 text-ncit-ink-3 group-hover:text-ncit-blue"
                                    aria-hidden="true"
                                />

                                <span className="min-w-0 flex-1 text-sm font-medium text-ncit-ink group-hover:text-ncit-blue">
                                    {item.name}
                                    <span className="sr-only">
                                        {isExternal
                                            ? " (opens in a new tab)"
                                            : `, ${item.kind}${item.size ? `, ${item.size}` : ""}`}
                                    </span>
                                </span>

                                <span className="ncit-meta hidden shrink-0 text-ncit-ink-3 sm:block">{item.note}</span>

                                <span className="ncit-meta shrink-0 text-ncit-ink-3" aria-hidden="true">
                                    {item.kind}
                                    {item.size ? `, ${item.size}` : ""}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
