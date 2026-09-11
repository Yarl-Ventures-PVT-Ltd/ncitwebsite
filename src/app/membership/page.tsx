import { Metadata } from "next";
import WhyJoin from "@/components/sections/membership/why-join";
import MembershipPlans from "@/components/sections/membership/membership-plans";
import HowItWorks from "@/components/sections/membership/how-it-works";
import MembershipFAQ from "@/components/sections/membership/membership-faq";
import { MEMBERSHIP_FAQS } from "@/lib/membership-faqs";
import { faqSchema, jsonLd } from "@/lib/seo";
import PageHeader from "@/components/layout/page-header";

export const metadata: Metadata = {
  alternates: { canonical: "/membership" },
  title: "Membership",
  description: "Join the Network Building Northern Sri Lanka’s Technology Future. Discover NCIT membership plans for companies, professionals, startups, and students.",
};

export default function MembershipPage() {
  return (
    <>
      {/* FAQ schema built from the same array the page renders, so the markup
          and the visible text can never disagree. This lives here rather than
          in the root layout because these questions only appear on this page. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(MEMBERSHIP_FAQS))} />
      <PageHeader
        title="Membership"
        lede="Membership connects your organisation to a trusted industry network, greater visibility, business and investment opportunities, policy engagement and the wider Northern technology community."
        crumbs={[{ name: "Membership", path: "/membership" }]}
      />
      <WhyJoin />
      <MembershipPlans />
      <HowItWorks />
      <MembershipFAQ />
    </>
  );
}
