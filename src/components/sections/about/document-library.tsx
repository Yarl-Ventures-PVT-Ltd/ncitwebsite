import Link from "next/link";
import { ScrollText, Mail } from "lucide-react";

import { ActionLink, MoreLink } from "@/components/ui/action";
import { SITE } from "@/lib/seo";

/**
 * Governance documents.
 *
 * What stood here was invented, and on a governance page that is the worst
 * place for it to happen. It listed seven documents in a tabbed Current and
 * Archived library: a Constitution "v4.1" of 15 January 2024 at 1.2 MB, a
 * Membership Policy and Fee Schedule "v2.0", a Member Code of Conduct, a
 * Privacy and Data Protection Notice, Annual General Meeting Minutes 2023, and
 * two superseded versions under a notice explaining they were kept "for
 * historical reference and audit purposes".
 *
 * None of those documents exist. No file, no version, no date, no size was
 * real, and not one entry carried a link, so every row was a download that
 * could not be downloaded. A member or a government stakeholder reading that
 * page would reasonably believe the chamber publishes a fee schedule and a
 * privacy notice that it does not.
 *
 * The bylaws are the one governance document NCIT actually publishes, and they
 * are published as a page rather than a file. That is what this shows now.
 * Anything else is an honest pointer to the secretariat.
 */
export default function DocumentLibrary() {
    return (
        <section aria-labelledby="governance-documents" className="bg-ncit-paper py-16 md:py-24">
            <div className="ncit-container">
                <div className="max-w-3xl">
                    <h2 id="governance-documents" className="ncit-h2 ncit-tick">
                        Published documents
                    </h2>
                    <p className="ncit-lede mt-4">
                        The chamber&rsquo;s constitution is published in full on this site. Other governance records are
                        held by the secretariat and released on request.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    <article className="rounded-lg border border-ncit-line p-6">
                        <div className="flex items-start gap-4">
                            <ScrollText className="mt-0.5 h-5 w-5 shrink-0 text-ncit-blue" aria-hidden="true" />
                            <div className="min-w-0">
                                <h3 className="text-base font-semibold text-ncit-ink">
                                    <Link href="/about/governance/bylaws" className="inline-block py-0.5 hover:text-ncit-blue">
                                        Constitution and bylaws
                                    </Link>
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-ncit-ink-2">
                                    The rules the chamber is run under: objectives, membership classes, the board, and
                                    the conduct of general meetings. Published as a page so it can be read, searched and
                                    linked to section by section.
                                </p>
                                <div className="mt-4">
                                    <MoreLink href="/about/governance/bylaws">Read the bylaws</MoreLink>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="rounded-lg border border-ncit-line bg-ncit-surface p-6">
                        <div className="flex items-start gap-4">
                            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-ncit-blue" aria-hidden="true" />
                            <div className="min-w-0">
                                <h3 className="text-base font-semibold text-ncit-ink">Records held by the secretariat</h3>
                                <p className="mt-2 text-sm leading-relaxed text-ncit-ink-2">
                                    Annual general meeting minutes, board resolutions and the membership fee schedule
                                    are not published online. Members and stakeholders can request them from the
                                    secretariat.
                                </p>
                                <dl className="mt-4 text-sm">
                                    <dt className="ncit-meta text-ncit-ink-3">Email</dt>
                                    <dd className="mt-1">
                                        <a
                                            href={`mailto:${SITE.email}`}
                                            className="inline-block py-1 text-ncit-blue underline underline-offset-4 hover:no-underline"
                                        >
                                            {SITE.email}
                                        </a>
                                    </dd>
                                </dl>
                                <div className="mt-4">
                                    <ActionLink href="/contact" variant="secondary">
                                        Contact the chamber
                                    </ActionLink>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
