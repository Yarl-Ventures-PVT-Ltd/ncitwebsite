import { Metadata } from "next";
import AdvocacyHero from "@/components/sections/what-we-do/advocacy-hero";
import PolicyThemes from "@/components/sections/what-we-do/policy-themes";
import PolicyProcess from "@/components/sections/what-we-do/policy-process";

export const metadata: Metadata = {
  title: "Advocacy & Policy | NCIT",
  description: "NCIT consolidates industry priorities and engages stakeholders on the conditions required for sustainable digital growth in Northern Sri Lanka.",
};

export default function AdvocacyPage() {
  return (
    <>
      <AdvocacyHero />
      <PolicyThemes />
      <PolicyProcess />
    </>
  );
}
