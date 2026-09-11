import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section, SectionHeading } from "@/components/ui/section";
import { MoreLink } from "@/components/ui/action";
import { LINKED_MEMBERS, MEMBER_COUNT } from "@/lib/members";

/**
 * Member companies.
 *
 * This replaced an infinitely scrolling marquee that duplicated the whole
 * member array to fake a seamless loop. It moved forever, could not be read at
 * its own pace, printed every company name twice into the page, and sat under
 * a heading calling members "organisations that trust NCIT", which is not what
 * a member is.
 *
 * It is now a plain index. Only members with a public website appear, because
 * that link is the one claim on the list a reader can go and check for
 * themselves. The full directory, including members without a site, is one
 * click away.
 */
export default function FeaturedMembers() {
    const members = LINKED_MEMBERS;

    return (
        <Section tone="surface" labelledBy="home-members">
            <SectionHeading
                id="home-members"
                title="Member companies"
                lede={`${MEMBER_COUNT} organisations are listed in the NCIT directory. Those with a public website are shown here.`}
                action={<MoreLink href="/members">Full directory</MoreLink>}
            />

            <ul className="grid gap-px overflow-hidden rounded-lg border border-ncit-line bg-ncit-line sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                    <li key={member.name} className="bg-ncit-paper">
                        <a
                            href={member.link ?? undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-full items-start justify-between gap-3 p-5 transition-colors hover:bg-ncit-surface"
                        >
                            <span className="min-w-0">
                                <span className="block text-sm font-medium text-ncit-ink group-hover:text-ncit-blue">
                                    {member.name}
                                </span>
                                {member.info ? (
                                    <span className="ncit-meta mt-1.5 block text-ncit-ink-3">{member.info}</span>
                                ) : null}
                            </span>
                            <ArrowUpRight
                                className="mt-0.5 h-4 w-4 shrink-0 text-ncit-ink-3 transition-colors group-hover:text-ncit-blue"
                                aria-hidden="true"
                            />
                            <span className="sr-only">opens in a new tab</span>
                        </a>
                    </li>
                ))}
            </ul>

            <p className="mt-6 text-sm text-ncit-ink-3">
                Listing follows the membership categories set out in the{" "}
                <Link
                    href="/about/governance/bylaws"
                    className="text-ncit-blue underline underline-offset-4 hover:no-underline"
                >
                    chamber bylaws
                </Link>
                .
            </p>
        </Section>
    );
}
