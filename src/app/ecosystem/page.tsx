import { Metadata } from "next";
import EcosystemHero from "@/components/sections/ecosystem/ecosystem-hero";
import DistrictMap from "@/components/sections/ecosystem/district-map";
import SectorExplorer from "@/components/sections/ecosystem/sector-explorer";
import FeaturedEntities from "@/components/sections/ecosystem/featured-entities";
import DistrictCards from "@/components/sections/ecosystem/district-cards";
import TalentAndTraining from "@/components/sections/ecosystem/talent-and-training";
import ProjectsAndEvents from "@/components/sections/ecosystem/projects-and-events";
import EcosystemCTA from "@/components/sections/ecosystem/ecosystem-cta";

export const metadata: Metadata = {
  title: "Northern Tech Ecosystem | NCIT",
  description: "Discover verified technology businesses, institutions, startups, professionals and opportunities across Jaffna, Kilinochchi, Mannar, Mullaitivu and Vavuniya.",
};

export default function EcosystemPage() {
  return (
    <>
      <EcosystemHero />
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
