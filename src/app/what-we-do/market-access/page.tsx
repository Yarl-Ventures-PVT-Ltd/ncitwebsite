import { Metadata } from "next";
import MarketAccessHero from "@/components/sections/what-we-do/market-access-hero";
import MarketPillars from "@/components/sections/what-we-do/market-pillars";
import SuccessStory from "@/components/sections/what-we-do/success-story";

export const metadata: Metadata = {
  title: "Business & Market Access | NCIT",
  description: "NCIT creates trusted pathways for member companies to discover partners, customers, expertise, procurement opportunities, and market connections.",
};

export default function MarketAccessPage() {
  return (
    <>
      <MarketAccessHero />
      <MarketPillars />
      <SuccessStory />
    </>
  );
}
