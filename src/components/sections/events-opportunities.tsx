import Link from "next/link";

import { Section, SectionHeading } from "@/components/ui/section";
import { Chip } from "@/components/ui/chip";
import { MoreLink } from "@/components/ui/action";
import { resolvedEvents } from "@/lib/events";
import { formatDate, isoDate } from "@/lib/content";

/**
 * Events, on the home page.
 *
 * This section previously listed three events that NCIT is not running, with
 * dates in the coming weeks. They have been replaced by the chamber's real
 * event record, newest first.
 *
 * The honest framing matters here. NCIT has no published upcoming events, so
 * the section says so rather than padding the list. When there is one to
 * announce it goes on the notice board and appears here through the archive.
 */
export default function EventsOpportunities() {
    const events = resolvedEvents().slice(0, 5);

    return (
        <Section tone="paper" labelledBy="home-events">
            <SectionHeading
                id="home-events"
                title="Events"
                lede="Summits, Startup Weekends, workshops and forums the chamber has run or taken part in."
                action={<MoreLink href="/events">All events</MoreLink>}
            />

            <ul className="border-t border-ncit-line">
                {events.map((event) => (
                    <li
                        key={event.slug}
                        className="group relative flex flex-col gap-3 border-b border-ncit-line py-5 sm:flex-row sm:items-baseline sm:gap-6"
                    >
                        <time className="ncit-date shrink-0 text-ncit-ink-3 sm:w-36 sm:pt-1" dateTime={isoDate(event.recordedOn)}>
                            {event.heldOnLabel ?? formatDate(event.recordedOn)}
                        </time>

                        <div className="min-w-0 flex-1">
                            <h3 className="text-[0.95rem] leading-snug font-medium text-ncit-ink">
                                <Link
                                    href={`/insights/${event.slug}`}
                                    className="after:absolute after:inset-0 after:content-[''] group-hover:text-ncit-blue"
                                >
                                    {event.name}
                                </Link>
                            </h3>
                            <p className="mt-1 text-sm text-ncit-ink-3">{event.location}</p>
                        </div>

                        <Chip className="shrink-0 self-start sm:self-baseline">{event.kind}</Chip>
                    </li>
                ))}
            </ul>

            <p className="mt-6 text-sm text-ncit-ink-3">
                Upcoming events are announced on the{" "}
                <Link href="/notice-board" className="text-ncit-blue underline underline-offset-4 hover:no-underline">
                    notice board
                </Link>
                .
            </p>
        </Section>
    );
}
