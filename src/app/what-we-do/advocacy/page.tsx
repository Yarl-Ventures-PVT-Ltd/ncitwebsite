import { Metadata } from "next";
import PolicyThemes from "@/components/sections/what-we-do/policy-themes";
import PolicyProcess from "@/components/sections/what-we-do/policy-process";
import PageHeader from "@/components/layout/page-header";

export const metadata: Metadata = {
  alternates: { canonical: "/what-we-do/advocacy" },
  title: "Advocacy & Policy",
  description: "NCIT consolidates industry priorities and engages stakeholders on the conditions required for sustainable digital growth in Northern Sri Lanka.",
};

export default function AdvocacyPage() {
  return (
    <>
      <PageHeader
        title="A Stronger Voice for Northern Technology"
        lede="The chamber consolidates industry priorities from the Northern technology community and puts them to public, private and development stakeholders."
        crumbs={[{ name: "What we do", path: "/what-we-do" }, { name: "Advocacy", path: "/what-we-do/advocacy" }]}
      />
      <PolicyThemes />
      <PolicyProcess />
    </>
  );
}
