import { Metadata } from "next";
import ApplyHero from "@/components/sections/membership/apply-hero";
import ApplicationWizard from "@/components/sections/membership/application-wizard";

export const metadata: Metadata = {
  title: "Apply for Membership | NCIT",
  description: "Complete your NCIT membership application online.",
};

export default function ApplyPage() {
  return (
    <>
      <ApplyHero />
      <ApplicationWizard />
    </>
  );
}
