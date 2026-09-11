import { ALL_ARTICLES, type InsightArticle } from "@/lib/content";

/**
 * NCIT's event record.
 *
 * The home page used to advertise three events that do not exist: a "Northern
 * Tech Investment Summit 2026", a "Startup Incubation Pitch Day" and a "Cloud
 * Architecture Masterclass", all dated in the near future. A chamber
 * advertising an event it is not running is worse than a chamber advertising
 * nothing, so they are gone.
 *
 * Every entry below traces to an article NCIT published. The slug is the
 * chamber's own account of the event, which is the claim a reader can check.
 *
 * Two dates matter and they are not the same, which is why both are kept:
 *
 *   heldOn     when the event actually ran, only where NCIT stated it. Left
 *              undefined rather than guessed.
 *   recordedOn the date of the published account. Always present, and what
 *              the list sorts on, because it is the one date that is true for
 *              every entry.
 *
 * The list is curated rather than matched by keyword. A regex over titles also
 * picked up the two "employment based skill training programme" notices, which
 * are administrative announcements rather than events, and would have put them
 * on an events page under a date that means nothing.
 */
export interface ChamberEvent {
    slug: string;
    name: string;
    /** Stated event date, where NCIT published one. */
    heldOn?: string;
    /** Human readable form of heldOn, as NCIT wrote it. */
    heldOnLabel?: string;
    location: string;
    kind: "Summit" | "Startup Weekend" | "Workshop" | "Seminar" | "Forum" | "Exhibition" | "Tech Talk";
}

export const CHAMBER_EVENTS: ChamberEvent[] = [
    {
        slug: "slasscom-presents-sri-lankas-largest-it-bpm-week-2021-ncit-on-board-as-event-partner",
        name: "Sri Lanka IT/BPM Week 2021",
        location: "National, with NCIT as event partner",
        kind: "Summit",
    },
    {
        slug: "digital-roadmap-for-northern-province-online-event-26th-june-2-30pm",
        name: "Digital Roadmap for the Northern Province: Main Forum",
        heldOn: "2021-06-26",
        heldOnLabel: "26 June 2021",
        location: "Online",
        kind: "Forum",
    },
    {
        slug: "the-first-ever-international-tech-summit-nextwork-2020-in-jaffna-successfully-came-to-end",
        name: "NExTWORK 2020, International Tech Summit",
        heldOn: "2020-02-14",
        heldOnLabel: "14 to 16 February 2020",
        location: "Jaffna",
        kind: "Summit",
    },
    {
        slug: "seminar-for-new-ventures",
        name: "Seminar for New Ventures",
        location: "Northern Province",
        kind: "Seminar",
    },
    {
        slug: "awareness-program-on-5g-technology",
        name: "Awareness Programme on 5G Technology",
        location: "Northern Province",
        kind: "Seminar",
    },
    {
        slug: "sirakukal-organized-workshop-with-the-support-of-ncit",
        name: "Sirakukal Workshop, supported by NCIT",
        location: "Northern Province",
        kind: "Workshop",
    },
    {
        slug: "women-empowerment-and-digitization-workshop",
        name: "Women Empowerment and Digitisation Workshop",
        location: "Northern Province",
        kind: "Workshop",
    },
    {
        slug: "first-ever-startup-weekend-mannar-came-to-end",
        name: "Startup Weekend Mannar",
        location: "Mannar",
        kind: "Startup Weekend",
    },
    {
        slug: "talk-session-kannan",
        name: "NCIT Talk Session: Criteria of Global Citizenry",
        location: "Jaffna",
        kind: "Tech Talk",
    },
    {
        slug: "the-world-tourism-day-exhibition-2018-was-held-in-jaffna-with-the-theme-of-drive-digital-tourism",
        name: "World Tourism Day Exhibition 2018",
        location: "Jaffna",
        kind: "Exhibition",
    },
    {
        slug: "digital-transformation-workshop-batticaloa-2017",
        name: "Digital Transformation Workshop and Exhibition",
        location: "Batticaloa",
        kind: "Workshop",
    },
    {
        slug: "startup-weekend-jaffna-2017",
        name: "Startup Weekend Jaffna 2017",
        location: "Jaffna",
        kind: "Startup Weekend",
    },
    {
        slug: "business-digitalization-seminar-in-mannar",
        name: "Business Digitalisation Seminar",
        location: "Mannar",
        kind: "Seminar",
    },
    {
        slug: "applications-for-infotel2017-exhibition-from-north-region-it-smes",
        name: "INFOTEL 2017, Northern IT SME participation",
        location: "Colombo, for Northern exhibitors",
        kind: "Exhibition",
    },
    {
        slug: "seminar-on-computerization-of-business-in-mannar",
        name: "Seminar on Computerisation of Business",
        location: "Mannar",
        kind: "Seminar",
    },
    {
        slug: "northern-it-sme-business-to-business-expo-2017-organized-in-grant-scale-for-smes-in-northern-province",
        name: "Northern IT SME Business to Business Expo 2017",
        location: "Northern Province",
        kind: "Exhibition",
    },
    {
        slug: "itsmeexhibition",
        name: "IT SME Business to Business Exhibition",
        location: "Northern Province",
        kind: "Exhibition",
    },
    {
        slug: "ncits-first-ever-tech-talk-in-jaffna",
        name: "NCIT's First Tech Talk",
        location: "Jaffna",
        kind: "Tech Talk",
    },
    {
        slug: "startup-weekend-vanni-was-success-full-end-for-startup-weekend-journey-in-2016",
        name: "Startup Weekend Vanni",
        location: "Vanni",
        kind: "Startup Weekend",
    },
    {
        slug: "youth-entrepreneurship-technical-advisory-forum",
        name: "Youth Entrepreneurship Technical Advisory Forum",
        location: "Northern Province",
        kind: "Forum",
    },
    {
        slug: "startupweekendjaffna",
        name: "Startup Weekend Jaffna",
        location: "Jaffna",
        kind: "Startup Weekend",
    },
];

export interface ResolvedEvent extends ChamberEvent {
    article: InsightArticle;
    recordedOn: string;
}

/**
 * Joins each curated event to its article. An event whose article has been
 * removed drops out rather than rendering a dead link, and the build logs it
 * so the mismatch is noticed instead of shipping quietly.
 */
export function resolvedEvents(): ResolvedEvent[] {
    const resolved: ResolvedEvent[] = [];

    for (const event of CHAMBER_EVENTS) {
        const article = ALL_ARTICLES.find((candidate) => candidate.slug === event.slug);

        if (!article) {
            console.warn(`[events] no article for event slug "${event.slug}", dropping it from the list`);
            continue;
        }

        resolved.push({ ...event, article, recordedOn: article.date });
    }

    return resolved.sort((a, b) => new Date(b.recordedOn).getTime() - new Date(a.recordedOn).getTime());
}

export const EVENT_KINDS = [...new Set(CHAMBER_EVENTS.map((event) => event.kind))].sort();
