import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@/components/layout/page-header";
import { Section } from "@/components/ui/section";
import { Chip } from "@/components/ui/chip";
import { ActionLink } from "@/components/ui/action";
import { resolvedEvents } from "@/lib/events";
import { formatDate, isoDate } from "@/lib/content";
import { absoluteUrl, jsonLd, SITE } from "@/lib/seo";

export const metadata: Metadata = {
    alternates: { canonical: "/events" },
    title: "Events",
    description:
        "Summits, Startup Weekends, workshops, seminars and forums run by the Northern Chamber of Information Technology in Jaffna and across the Northern Province since 2016.",
};

/**
 * Events.
 *
 * A record of what the chamber has run, not a listing of what it is selling
 * tickets to. NCIT has published no upcoming events, so the page says that
 * plainly at the top instead of padding the list with invented ones, which is
 * what the previous home page section did.
 *
 * Each entry carries Event structured data. startDate is only emitted where
 * NCIT published a real date, because a schema Event with a made up date is
 * worse than one with no date: Google will show it.
 */
export default function EventsPage() {
    const events = resolvedEvents();

    const grouped = events.reduce<Record<string, typeof events>>((acc, event) => {
        const year = String(new Date(event.recordedOn).getFullYear());
        (acc[year] ??= []).push(event);
        return acc;
    }, {});

    const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

    const eventGraph = {
        "@context": "https://schema.org",
        "@graph": events
            .filter((event) => Boolean(event.heldOn))
            .map((event) => ({
                "@type": "Event",
                name: event.name,
                startDate: event.heldOn,
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode:
                    event.location === "Online"
                        ? "https://schema.org/OnlineEventAttendanceMode"
                        : "https://schema.org/OfflineEventAttendanceMode",
                location:
                    event.location === "Online"
                        ? { "@type": "VirtualLocation", url: absoluteUrl(`/insights/${event.slug}`) }
                        : {
                              "@type": "Place",
                              name: event.location,
                              address: { "@type": "PostalAddress", addressCountry: "LK" },
                          },
                organizer: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
                url: absoluteUrl(`/insights/${event.slug}`),
            })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(eventGraph)} />

            <PageHeader
                title="Events"
                lede="Summits, Startup Weekends, workshops, seminars and forums the chamber has run or taken part in across the Northern Province."
                crumbs={[{ name: "Events", path: "/events" }]}
                meta={`${events.length} events on record`}
            />

            <Section tone="paper">
                <div className="rounded-lg border border-ncit-line bg-ncit-surface p-5 md:p-6">
                    <h2 className="text-sm font-semibold text-ncit-ink">Upcoming events</h2>
                    <p className="mt-2 text-sm leading-relaxed text-ncit-ink-2">
                        The chamber has no upcoming events published at the moment. New events are announced on the{" "}
                        <Link
                            href="/notice-board"
                            className="text-ncit-blue underline underline-offset-4 hover:no-underline"
                        >
                            notice board
                        </Link>{" "}
                        and members are notified directly.
                    </p>
                    <div className="mt-4">
                        <ActionLink href="/contact" variant="secondary">
                            Propose an event
                        </ActionLink>
                    </div>
                </div>

                {years.map((year) => (
                    <div key={year} className="mt-12 first:mt-14">
                        <h2 className="ncit-meta mb-4 border-b border-ncit-line pb-3 text-ncit-ink-2">{year}</h2>

                        <ul>
                            {grouped[year].map((event) => (
                                <li
                                    key={event.slug}
                                    className="group relative flex flex-col gap-3 border-b border-ncit-line py-6 md:flex-row md:items-baseline md:gap-8"
                                >
                                    <time
                                        className="ncit-date shrink-0 text-ncit-ink-3 md:w-44 md:pt-1"
                                        dateTime={event.heldOn ?? isoDate(event.recordedOn)}
                                    >
                                        {event.heldOnLabel ?? formatDate(event.recordedOn)}
                                    </time>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base leading-snug font-semibold text-ncit-ink">
                                            <Link
                                                href={`/insights/${event.slug}`}
                                                className="after:absolute after:inset-0 after:content-[''] group-hover:text-ncit-blue"
                                            >
                                                {event.name}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-sm text-ncit-ink-3">{event.location}</p>
                                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ncit-ink-2">
                                            {event.article.excerpt}
                                        </p>
                                    </div>

                                    <Chip className="shrink-0 self-start md:self-baseline">{event.kind}</Chip>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Section>
        </>
    );
}
