import { Metadata } from "next";
import InvestHero from "@/components/sections/invest/invest-hero";
import WhyTheNorth from "@/components/sections/invest/why-the-north";
import SectorOpportunities from "@/components/sections/invest/sector-opportunities";
import HowNcitSupports from "@/components/sections/invest/how-ncit-supports";
import PartnershipPathways from "@/components/sections/invest/partnership-pathways";
import TrustedPartners from "@/components/sections/invest/trusted-partners";
import InvestInquiryForm from "@/components/sections/invest/invest-inquiry-form";

export const metadata: Metadata = {
  alternates: { canonical: "/invest" },
  title: "Invest & Partner",
  description: "Discover technology opportunities in Northern Sri Lanka. NCIT provides a trusted gateway to companies, talent, institutions, startups and partnerships.",
};

export default function InvestPage() {
  return (
    <>
      <InvestHero />
      <WhyTheNorth />
      <SectorOpportunities />
      <HowNcitSupports />
      <PartnershipPathways />
      <TrustedPartners />
      <InvestInquiryForm />
    </>
  );
}
