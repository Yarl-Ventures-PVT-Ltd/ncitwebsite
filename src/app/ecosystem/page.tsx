import { Metadata } from "next";
import DistrictMap from "@/components/sections/ecosystem/district-map";
import SectorExplorer from "@/components/sections/ecosystem/sector-explorer";
import FeaturedEntities from "@/components/sections/ecosystem/featured-entities";
import DistrictCards from "@/components/sections/ecosystem/district-cards";
import TalentAndTraining from "@/components/sections/ecosystem/talent-and-training";
import ProjectsAndEvents from "@/components/sections/ecosystem/projects-and-events";
import EcosystemCTA from "@/components/sections/ecosystem/ecosystem-cta";
import PageHeader from "@/components/layout/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Northern Technology Ecosystem",
  socialTitle: "Northern Technology Ecosystem",
  description: "Technology businesses, institutions, startups and professionals across Jaffna, Kilinochchi, Mannar, Mullaitivu and Vavuniya.",
  path: "/ecosystem",
});

export default function EcosystemPage() {
  return (
    <>
      <PageHeader
        title="The Northern Technology Ecosystem"
        lede="Technology businesses, institutions, startups and professionals across Jaffna, Kilinochchi, Mannar, Mullaitivu and Vavuniya."
        crumbs={[{ name: "The ecosystem", path: "/ecosystem" }]}
      />
      <DistrictMap />
      <SectorExplorer />
      <FeaturedEntities />
      <DistrictCards />
      <TalentAndTraining />
      <ProjectsAndEvents />
      <EcosystemCTA />
    </>
  );
}
