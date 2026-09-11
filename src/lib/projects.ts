/**
 * NCIT projects and initiatives.
 *
 * Single source for the projects page and the home page summary. The home page
 * previously carried a separate, invented list: a "NExTWORK 2023" with
 * "1,200+ participants", a "Startup Accelerator Phase I" with "15 funded
 * startups", and an "Industry Readiness Program" with "450+ graduates placed".
 *
 * None of those figures exist in NCIT's material. Two of the three programmes
 * do not either. NExTWORK is real, but it ran in 2020, not 2023.
 *
 * What follows is the list NCIT actually publishes, with the statuses it
 * actually uses. There are no participation figures because the chamber has
 * not published any.
 */
export type ProjectStatus = "Completed" | "Ongoing" | "In progress" | "Planned";

export interface Project {
    slug: string;
    title: string;
    description: string;
    status: ProjectStatus;
    details: string[];
}

export const PROJECTS: Project[] = [
    {
        slug: "startup-weekend",
        title: "Startup Events",
        description:
            "Startup Weekend events run across the region to give first time founders a structured way into entrepreneurship.",
        status: "Completed",
        details: ["Startup Weekend Jaffna 1 and 2", "Startup Weekend Vanni", "Startup Weekend Mannar"],
    },
    {
        slug: "community-events",
        title: "Local Community Events",
        description:
            "Community led technology events that build grassroots awareness and practical skills outside the main centres.",
        status: "Ongoing",
        details: ["Held across the Northern Province"],
    },
    {
        slug: "business-incubation-center",
        title: "Business Incubation Center",
        description:
            "A co-working and incubation space for members, established with funding support and now operating.",
        status: "Completed",
        details: ["Funded by IE NESL", "Currently operational"],
    },
    {
        slug: "tech-talk-forum",
        title: "Monthly Tech Talk and Forum",
        description:
            "A recurring platform for knowledge sharing and technical discussion among professionals and students.",
        status: "Ongoing",
        details: ["Jointly organised with the Jaffna Learning Forum"],
    },
    {
        slug: "ict-job-bank",
        title: "ICT Job Bank",
        description:
            "A central register matching technology talent in the Northern Province with employers who are hiring.",
        status: "In progress",
        details: ["Platform development and data collection under way"],
    },
    {
        slug: "investor-business-forums",
        title: "Investor and Business Forums",
        description:
            "Forums to connect Northern startups and small businesses with national and international investors.",
        status: "Planned",
        details: ["Monthly business forum", "Annual investor forum"],
    },
];

/** Status drives the chip styling, so the mapping lives with the data. */
export const STATUS_TONE: Record<ProjectStatus, "neutral" | "accent"> = {
    Completed: "neutral",
    Ongoing: "accent",
    "In progress": "accent",
    Planned: "neutral",
};
