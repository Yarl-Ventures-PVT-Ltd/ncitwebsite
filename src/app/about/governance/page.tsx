import { Metadata } from "next";
import GovernanceHero from "@/components/sections/about/governance-hero";
import DocumentLibrary from "@/components/sections/about/document-library";

export const metadata: Metadata = {
  title: "Governance & Policies | NCIT",
  description: "Access the current governing documents, approved policies, and formal notices of the Northern Chamber of Information Technology.",
};

export default function GovernancePage() {
  return (
    <>
      <GovernanceHero />
      <DocumentLibrary />
    </>
  );
}
