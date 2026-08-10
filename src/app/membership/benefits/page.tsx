import { Metadata } from "next";
import BenefitsHero from "@/components/sections/membership/benefits-hero";
import BenefitPillars from "@/components/sections/membership/benefit-pillars";
import BenefitMatrix from "@/components/sections/membership/benefit-matrix";

export const metadata: Metadata = {
  title: "Member Benefits | NCIT",
  description: "Explore the comprehensive benefits of joining the Northern Chamber of Information Technology.",
};

export default function BenefitsPage() {
  return (
    <>
      <BenefitsHero />
      <BenefitPillars />
      <BenefitMatrix />
    </>
  );
}
