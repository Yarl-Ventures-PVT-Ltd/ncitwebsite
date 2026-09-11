import { Metadata } from "next";
import WhyTheNorth from "@/components/sections/invest/why-the-north";
import SectorOpportunities from "@/components/sections/invest/sector-opportunities";
import HowNcitSupports from "@/components/sections/invest/how-ncit-supports";
import PartnershipPathways from "@/components/sections/invest/partnership-pathways";
import InvestInquiryForm from "@/components/sections/invest/invest-inquiry-form";
import PageHeader from "@/components/layout/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Invest and Partner",
  socialTitle: "Invest and Partner",
  description: "A route into the Northern Province for investors and partners: companies, talent, institutions and the local stakeholders who can introduce them.",
  path: "/invest",
});

export default function InvestPage() {
  return (
    <>
      <PageHeader
        title="Technology Opportunity in Northern Sri Lanka"
        lede="NCIT is a route into the Northern Province for serious partners: companies, talent, institutions and startups, and the local stakeholders who can introduce them."
        crumbs={[{ name: "Invest", path: "/invest" }]}
      />
      <WhyTheNorth />
      <SectorOpportunities />
      <HowNcitSupports />
      <PartnershipPathways />
      <InvestInquiryForm />
    </>
  );
}
