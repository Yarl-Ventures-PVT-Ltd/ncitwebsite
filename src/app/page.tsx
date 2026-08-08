import HeroSection from "@/components/sections/hero";
import CredibilityStrip from "@/components/sections/credibility-strip";
import StakeholderTiles from "@/components/sections/stakeholder-tiles";
import BentoGrid from "@/components/sections/bento-grid";
import EcosystemPreview from "@/components/sections/ecosystem-preview";
import FeaturedMembers from "@/components/sections/featured-members";
import InvestPartner from "@/components/sections/invest-partner";
import EventsOpportunities from "@/components/sections/events-opportunities";
import ProjectsImpact from "@/components/sections/projects-impact";
import LatestInsights from "@/components/sections/latest-insights";
import PartnerStrip from "@/components/sections/partner-strip";
import ConversionBand from "@/components/sections/conversion-band";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CredibilityStrip />
      <StakeholderTiles />
      <BentoGrid />
      <EcosystemPreview />
      <FeaturedMembers />
      <InvestPartner />
      <EventsOpportunities />
      <ProjectsImpact />
      <LatestInsights />
      <PartnerStrip />
      <ConversionBand />
    </>
  );
}
