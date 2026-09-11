/**
 * Site navigation.
 *
 * One definition, used by the header and the footer, so the two cannot drift.
 * They had, in a small way that matters: the footer pointed at a Resources URL
 * the header no longer used.
 */
export interface NavLink {
    label: string;
    href: string;
    description?: string;
}

export interface NavGroup {
    label: string;
    href: string;
    items: NavLink[];
}

export const NAV_GROUPS: NavGroup[] = [
    {
        label: "About",
        href: "/about",
        items: [
            { label: "About NCIT", href: "/about", description: "What the chamber is and who it represents" },
            { label: "Board of Directors", href: "/about/board", description: "The elected board and office bearers" },
            { label: "Our history", href: "/about/history", description: "From the 2016 inauguration onwards" },
            { label: "Governance", href: "/about/governance", description: "How the chamber is run" },
            { label: "Bylaws", href: "/about/governance/bylaws", description: "The constitution of the chamber" },
        ],
    },
    {
        label: "What we do",
        href: "/what-we-do",
        items: [
            { label: "Overview", href: "/what-we-do", description: "The chamber's areas of work" },
            { label: "Projects and initiatives", href: "/what-we-do/projects", description: "Programmes and their status" },
            {
                label: "Business Incubation Center",
                href: "/what-we-do/business-incubation-center",
                description: "Co-working and incubation for members",
            },
            { label: "Market access", href: "/what-we-do/market-access", description: "Exhibitions and trade events" },
            { label: "Advocacy", href: "/what-we-do/advocacy", description: "Representing the industry" },
            { label: "Services", href: "/what-we-do/services", description: "What members can draw on" },
        ],
    },
    {
        label: "Membership",
        href: "/membership",
        items: [
            { label: "Membership", href: "/membership", description: "Categories and how it works" },
            { label: "Member benefits", href: "/membership/benefits", description: "What membership gives you" },
            { label: "Join with us", href: "/membership/apply", description: "Apply to become a member" },
            { label: "Member directory", href: "/members", description: "Organisations in the chamber" },
        ],
    },
    {
        label: "News and events",
        href: "/whats-new",
        items: [
            { label: "What's new", href: "/whats-new", description: "The latest across the chamber" },
            { label: "Notice board", href: "/notice-board", description: "Bids, vacancies and calls" },
            { label: "Events", href: "/events", description: "Summits, workshops and forums" },
            { label: "Press", href: "/press", description: "Official statements and media contact" },
            { label: "All updates", href: "/insights", description: "The full archive" },
        ],
    },
    {
        label: "Resources",
        href: "/resources",
        items: [
            { label: "Resources and downloads", href: "/resources", description: "Forms, publications and speeches" },
            { label: "Useful links", href: "/useful-links", description: "Government and national bodies" },
            { label: "Photo gallery", href: "/gallery", description: "The chamber's photographic archive" },
            { label: "The ecosystem", href: "/ecosystem", description: "Technology in the Northern Province" },
            { label: "Invest", href: "/invest", description: "For investors and partners" },
        ],
    },
];

export const NAV_SIMPLE: NavLink[] = [{ label: "Contact", href: "/contact" }];
