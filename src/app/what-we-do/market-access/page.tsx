import { Metadata } from "next";
import MarketPillars from "@/components/sections/what-we-do/market-pillars";
import SuccessStory from "@/components/sections/what-we-do/success-story";
import PageHeader from "@/components/layout/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Market Access",
  socialTitle: "Market Access",
  description: "How NCIT puts Northern technology firms in front of buyers, through national exhibitions such as INFOTEL and the IT SME expos.",
  path: "/what-we-do/market-access",
});

export default function MarketAccessPage() {
  return (
    <>
      <PageHeader
        title="Market Access"
        lede="Trusted pathways for member companies and professionals to reach partners, customers, expertise and procurement opportunities."
        crumbs={[{ name: "What we do", path: "/what-we-do" }, { name: "Market access", path: "/what-we-do/market-access" }]}
      />
      <MarketPillars />
      <SuccessStory />
    </>
  );
}
