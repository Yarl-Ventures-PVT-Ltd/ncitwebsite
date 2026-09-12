import Link from "next/link";

import { Section, SectionHeading } from "@/components/ui/section";
import { Chip } from "@/components/ui/chip";
import { MoreLink } from "@/components/ui/action";
import { PROJECTS } from "@/lib/projects";
import { resolvedEvents } from "@/lib/events";
import { formatDate, isoDate } from "@/lib/content";

/**
 * Regional initiatives.
 *
 * The three items here were invented, and two of them were events dated in the
 * coming weeks: a "Northern Tech Summit 2026" in Jaffna on 15 October, an
 * "AgriTech Incubation Drive" in Kilinochchi, and a "Vavuniya IT Job Fair" on
 * 5 November. The chamber is running none of them. They also carried a purple
 * and an emerald badge, a second and third accent on a one accent site.
 *
 * Both columns now come from the same sources the projects page and the events
 * page use, so nothing here can say something those pages do not.
 */
export default function ProjectsAndEvents() {
    const projects = PROJECTS.filter((project) => project.status !== "Completed").slice(0, 3);
    const events = resolvedEvents().slice(0, 3);

    return (
        <Section tone="paper" labelledBy="ecosystem-initiatives">
            <SectionHeading
                id="ecosystem-initiatives"
                title="Regional initiatives"
                lede="Programmes the chamber is running now, and the events it has held across the Northern districts."
            />

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                    <div className="mb-5 flex items-baseline justify-between gap-4">
                        <h3 className="text-sm font-semibold text-ncit-ink">Current programmes</h3>
                        <MoreLink href="/what-we-do/projects">All projects</MoreLink>
                    </div>

                    <ul className="border-t border-ncit-line">
                        {projects.map((project) => (
                            <li key={project.slug} className="border-b border-ncit-line py-5">
                                <div className="mb-2">
                                    <Chip>{project.status}</Chip>
                                </div>
                                <h4 className="text-[0.95rem] font-medium text-ncit-ink">{project.title}</h4>
                                <p className="mt-1 text-sm leading-relaxed text-ncit-ink-2">{project.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="mb-5 flex items-baseline justify-between gap-4">
                        <h3 className="text-sm font-semibold text-ncit-ink">Recent events</h3>
                        <MoreLink href="/events">All events</MoreLink>
                    </div>

                    <ul className="border-t border-ncit-line">
                        {events.map((event) => (
                            <li key={event.slug} className="group relative border-b border-ncit-line py-5">
                                <time
                                    className="ncit-date text-ncit-ink-3"
                                    dateTime={event.heldOn ?? isoDate(event.recordedOn)}
                                >
                                    {event.heldOnLabel ?? formatDate(event.recordedOn)}
                                </time>
                                <h4 className="mt-2 text-[0.95rem] font-medium text-ncit-ink">
                                    <Link
                                        href={`/insights/${event.slug}`}
                                        className="after:absolute after:inset-0 after:content-[''] group-hover:text-ncit-blue"
                                    >
                                        {event.name}
                                    </Link>
                                </h4>
                                <p className="mt-1 text-sm text-ncit-ink-3">{event.location}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}
