import { Metadata } from "next";
import AboutHero from "@/components/sections/about/about-hero";
import OriginAndCoverage from "@/components/sections/about/origin-and-coverage";
import VisionMission from "@/components/sections/about/vision-mission";
import ObjectivesAndSectors from "@/components/sections/about/objectives-and-sectors";
import ValuesSection from "@/components/sections/about/values-section";
import StakeholderEcosystem from "@/components/sections/about/stakeholder-ecosystem";
import HistoryTimeline from "@/components/sections/about/history-timeline";
import OrganisationFaq from "@/components/sections/about/organisation-faq";
import AboutCTA from "@/components/sections/about/about-cta";
import { ORGANISATION_FAQ, faqSchema, jsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About NCIT | Northern Chamber of Information Technology",
  description: "Learn how NCIT unites and represents the technology ecosystem across Sri Lanka’s Northern Province.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OriginAndCoverage />
      <VisionMission />
      <ObjectivesAndSectors />
      <ValuesSection />
      <StakeholderEcosystem />
      <HistoryTimeline />
      {/* Schema generated from the same array the section renders, so the
          markup always describes text that is actually on the page. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(ORGANISATION_FAQ))} />
      <OrganisationFaq />
      <AboutCTA />
    </>
  );
}
