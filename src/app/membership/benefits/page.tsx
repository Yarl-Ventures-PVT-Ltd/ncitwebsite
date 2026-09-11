import { Metadata } from "next";
import BenefitPillars from "@/components/sections/membership/benefit-pillars";
import BenefitMatrix from "@/components/sections/membership/benefit-matrix";
import PageHeader from "@/components/layout/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Member Benefits",
  socialTitle: "Member Benefits",
  description: "What NCIT membership provides: industry representation, market access, incubation support and the chamber's programmes, by category.",
  path: "/membership/benefits",
});

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
