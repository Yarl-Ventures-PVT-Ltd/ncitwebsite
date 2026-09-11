import { Metadata } from "next";
import OriginAndCoverage from "@/components/sections/about/origin-and-coverage";
import VisionMission from "@/components/sections/about/vision-mission";
import ObjectivesAndSectors from "@/components/sections/about/objectives-and-sectors";
import ValuesSection from "@/components/sections/about/values-section";
import StakeholderEcosystem from "@/components/sections/about/stakeholder-ecosystem";
import HistoryTimeline from "@/components/sections/about/history-timeline";
import OrganisationFaq from "@/components/sections/about/organisation-faq";
import AboutCTA from "@/components/sections/about/about-cta";
import { ORGANISATION_FAQ, faqSchema, jsonLd, pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/layout/page-header";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "About NCIT | Northern Chamber of Information Technology" },
  socialTitle: "About NCIT",
  description: "NCIT was founded on 22 February 2016 to represent the technology sector across the five districts of Sri Lanka's Northern Province.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="One Chamber for Northern Sri Lanka’s Technology Ecosystem."
        lede="Established on 22 February 2016, NCIT brings the Northern Province’s technology associations, businesses, institutions and professionals under one platform. It serves Jaffna, Kilinochchi, Mannar, Mullaitivu and Vavuniya."
        crumbs={[{ name: "About", path: "/about" }]}
      />
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
