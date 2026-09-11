import { Metadata } from "next";
import DocumentLibrary from "@/components/sections/about/document-library";
import PageHeader from "@/components/layout/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Governance",
  socialTitle: "Governance",
  description: "How NCIT is constituted and run, where its constitution is published, and how to obtain the records held by the secretariat.",
  path: "/about/governance",
});

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
