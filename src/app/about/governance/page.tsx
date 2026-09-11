import { Metadata } from "next";
import DocumentLibrary from "@/components/sections/about/document-library";
import PageHeader from "@/components/layout/page-header";

export const metadata: Metadata = {
  alternates: { canonical: "/about/governance" },
  title: "Governance & Policies",
  description: "Access the current governing documents, approved policies, and formal notices of the Northern Chamber of Information Technology.",
};

export default function GovernancePage() {
  return (
    <>
      <PageHeader
        title="Governance"
        lede="How the chamber is constituted and run, and where to obtain its formal records."
        crumbs={[{ name: "About", path: "/about" }, { name: "Governance", path: "/about/governance" }]}
      />
      <DocumentLibrary />
    </>
  );
}
