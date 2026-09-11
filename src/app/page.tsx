import type { Metadata } from "next";

import { pageMetadata } from "@/lib/seo";

import HeroSection from "@/components/sections/hero";
import CredibilityStrip from "@/components/sections/credibility-strip";
import AboutIntro from "@/components/sections/about-intro";
import LatestInsights from "@/components/sections/latest-insights";
import EventsOpportunities from "@/components/sections/events-opportunities";
import ProjectsImpact from "@/components/sections/projects-impact";
import MembershipBand from "@/components/sections/membership-band";
import FeaturedMembers from "@/components/sections/featured-members";
import ResourcesPreview from "@/components/sections/resources-preview";
import ConversionBand from "@/components/sections/conversion-band";

// The home page declares its own metadata like every other page. It used to
// rely on the root layout's openGraph, and when those inherited values were
// removed to stop twenty five interior pages claiming the home page URL, the
// home page would otherwise have been left with no og:url at all.
export const metadata: Metadata = pageMetadata({
    title: { absolute: "NCIT | Northern Sri Lanka's Technology Chamber" },
    socialTitle: "Northern Chamber of Information Technology",
    description:
        "The industry chamber for information and communication technology in Northern Sri Lanka, representing companies, educators and startups since 2016.",
    path: "/",
});

/**
 * Home page.
 *
 * The order answers a visitor's questions in the order they ask them: what is
 * this organisation, what has it done lately, what does it run, how do I join,
 * who is already in, where are the documents.
 *
 * Two sections that used to sit here have been removed rather than restyled:
 *
 *   partner-strip      claimed USAID and GIZ as partners. Neither appears once
 *                      in anything NCIT has published. The others on the strip
 *                      do appear in the archive, but appearing in a news post
 *                      is not the same as a partnership, and the chamber has
 *                      published nothing that establishes one. The section can
 *                      come back the day there is a confirmed list.
 *
 *   ecosystem-preview  gave each of the five districts a startup count and a
 *                      talent pool figure, such as Jaffna "50+ startups, 5000+
 *                      talent". All invented. The districts are named in the
 *                      hero and in the record strip, which is what the site can
 *                      actually support.
 */
export default function Home() {
    return (
        <>
            <HeroSection />
            <CredibilityStrip />
            <AboutIntro />
            <LatestInsights />
            <EventsOpportunities />
            <ProjectsImpact />
            <MembershipBand />
            <FeaturedMembers />
            <ResourcesPreview />
            <ConversionBand />
        </>
    );
}
