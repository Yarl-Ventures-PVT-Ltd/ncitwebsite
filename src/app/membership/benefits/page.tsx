import { Metadata } from "next";
import BenefitPillars from "@/components/sections/membership/benefit-pillars";
import BenefitMatrix from "@/components/sections/membership/benefit-matrix";
import PageHeader from "@/components/layout/page-header";

export const metadata: Metadata = {
  alternates: { canonical: "/membership/benefits" },
  title: "Member Benefits",
  description: "Explore the comprehensive benefits of joining the Northern Chamber of Information Technology.",
};

export default function BenefitsPage() {
  return (
    <>
      <PageHeader
        title="Member Benefits"
        lede="Credibility, connections, industry voice, knowledge and practical support, with benefits set by membership category."
        crumbs={[{ name: "Membership", path: "/membership" }, { name: "Member benefits", path: "/membership/benefits" }]}
      />
      <BenefitPillars />
      <BenefitMatrix />
    </>
  );
}
