import { Metadata } from "next";
import MembershipHero from "@/components/sections/membership/membership-hero";
import WhyJoin from "@/components/sections/membership/why-join";
import MembershipPlans from "@/components/sections/membership/membership-plans";
import HowItWorks from "@/components/sections/membership/how-it-works";
import MembershipFAQ from "@/components/sections/membership/membership-faq";

export const metadata: Metadata = {
  title: "Membership | NCIT",
  description: "Join the Network Building Northern Sri Lanka’s Technology Future. Discover NCIT membership plans for companies, professionals, startups, and students.",
};

export default function MembershipPage() {
  return (
    <>
      <MembershipHero />
      <WhyJoin />
      <MembershipPlans />
      <HowItWorks />
      <MembershipFAQ />
    </>
  );
}
