import { Metadata } from "next";
import MembershipHero from "@/components/sections/membership/membership-hero";
import WhyJoin from "@/components/sections/membership/why-join";
import MembershipPlans from "@/components/sections/membership/membership-plans";
import HowItWorks from "@/components/sections/membership/how-it-works";
import MembershipFAQ from "@/components/sections/membership/membership-faq";
import { MEMBERSHIP_FAQS } from "@/lib/membership-faqs";
import { faqSchema, jsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Membership | NCIT",
  description: "Join the Network Building Northern Sri Lanka’s Technology Future. Discover NCIT membership plans for companies, professionals, startups, and students.",
};

export default function MembershipPage() {
  return (
    <>
      {/* FAQ schema built from the same array the page renders, so the markup
          and the visible text can never disagree. This lives here rather than
          in the root layout because these questions only appear on this page. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(MEMBERSHIP_FAQS))} />
      <MembershipHero />
      <WhyJoin />
      <MembershipPlans />
      <HowItWorks />
      <MembershipFAQ />
    </>
  );
}
