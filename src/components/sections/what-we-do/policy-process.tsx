import Link from "next/link";
import { MessageSquare, Users, FileSearch, CheckSquare, Megaphone } from "lucide-react";

import { Section } from "@/components/ui/section";
import { ActionLink, MoreLink } from "@/components/ui/action";

/**
 * How the chamber develops a policy position.
 *
 * The panel that used to sit on the right was invented. It advertised a
 * consultation on a "Jaffna IT Park Infrastructure Proposal" marked open for
 * input, a closed "National AI Strategy Response" said to be under board
 * review, and two published submissions, a "2024 Pre-Budget Submission" and a
 * "Response to Data Protection Authority Draft Rules". None of them exist, and
 * both submission links pointed at href="#", so a reader who clicked either
 * one stayed exactly where they were.
 *
 * The process on the left is a description of how the chamber works, which is
 * fair to state. What replaces the right panel is the part that is true and
 * useful: where a member actually raises something, and the engagements the
 * archive can evidence.
 */
const STEPS = [
    {
        icon: MessageSquare,
        title: "Member input",
        description: "Issues are raised by members through the portal or through committees.",
    },
    {
        icon: Users,
        title: "Working groups",
        description: "A group with relevant experience reviews the issue and drafts options.",
    },
    {
        icon: FileSearch,
        title: "Evidence",
        description: "Data and member case studies are gathered to support the position.",
    },
    {
        icon: CheckSquare,
        title: "Board approval",
        description: "The position is reviewed and approved by the NCIT board.",
    },
    {
        icon: Megaphone,
        title: "Engagement",
        description: "The chamber puts the position to the relevant public and industry bodies.",
    },
];

const ENGAGEMENTS = [
    {
        slug: "digital-roadmap-for-northern-province-online-event-26th-june-2-30pm",
        title: "Digital Roadmap for the Northern Province",
        note: "Main forum convened with ICTA, June 2021. The NCIT chairman spoke on developing the technology industry in the Northern Province.",
    },
    {
        slug: "slasscom-presents-sri-lankas-largest-it-bpm-week-2021-ncit-on-board-as-event-partner",
        title: "Sri Lanka IT/BPM Week 2021",
        note: "NCIT joined the national industry body SLASSCOM as an event partner, putting Northern firms on a national programme.",
    },
];

export default function PolicyProcess() {
    return (
        <Section tone="surface" labelledBy="policy-process">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                    <h2 id="policy-process" className="ncit-h2 ncit-tick">
                        How positions are developed
                    </h2>
                    <p className="ncit-lede mt-4">
                        Advocacy follows member needs and is backed by evidence. The chamber takes up systemic issues
                        affecting the Northern technology sector rather than individual commercial interests.
                    </p>

                    <ol className="mt-8 border-t border-ncit-line">
                        {STEPS.map((step) => (
                            <li key={step.title} className="flex gap-4 border-b border-ncit-line py-5">
                                <step.icon
                                    className="mt-0.5 h-5 w-5 shrink-0 text-ncit-blue"
                                    aria-hidden="true"
                                />
                                <div className="min-w-0">
                                    <h3 className="text-[0.95rem] font-semibold text-ncit-ink">{step.title}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-ncit-ink-2">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div className="mt-8">
                        <ActionLink href="/portal" variant="primary" withArrow>
                            Member portal
                        </ActionLink>
                    </div>
                </div>

                <div>
                    <h2 className="ncit-h2">Where the chamber has engaged</h2>
                    <p className="ncit-lede mt-4">
                        Engagements the chamber has published a record of. There is no open public consultation at the
                        moment; members raise issues through the portal or the secretariat.
                    </p>

                    <ul className="mt-8 border-t border-ncit-line">
                        {ENGAGEMENTS.map((item) => (
                            <li key={item.slug} className="group relative border-b border-ncit-line py-5">
                                <h3 className="text-[0.95rem] font-semibold text-ncit-ink">
                                    <Link
                                        href={`/insights/${item.slug}`}
                                        className="after:absolute after:inset-0 after:content-[''] group-hover:text-ncit-blue"
                                    >
                                        {item.title}
                                    </Link>
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-ncit-ink-2">{item.note}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6">
                        <MoreLink href="/press">Official statements</MoreLink>
                    </div>
                </div>
            </div>
        </Section>
    );
}
