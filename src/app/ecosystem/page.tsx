import { Metadata } from "next";
import DistrictMap from "@/components/sections/ecosystem/district-map";
import SectorExplorer from "@/components/sections/ecosystem/sector-explorer";
import FeaturedEntities from "@/components/sections/ecosystem/featured-entities";
import DistrictCards from "@/components/sections/ecosystem/district-cards";
import TalentAndTraining from "@/components/sections/ecosystem/talent-and-training";
import ProjectsAndEvents from "@/components/sections/ecosystem/projects-and-events";
import EcosystemCTA from "@/components/sections/ecosystem/ecosystem-cta";
import PageHeader from "@/components/layout/page-header";

export const metadata: Metadata = {
  alternates: { canonical: "/ecosystem" },
  title: "Northern Tech Ecosystem",
  description: "Discover verified technology businesses, institutions, startups, professionals and opportunities across Jaffna, Kilinochchi, Mannar, Mullaitivu and Vavuniya.",
};

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
