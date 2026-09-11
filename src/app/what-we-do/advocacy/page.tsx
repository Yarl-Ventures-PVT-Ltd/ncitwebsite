import { Metadata } from "next";
import PolicyThemes from "@/components/sections/what-we-do/policy-themes";
import PolicyProcess from "@/components/sections/what-we-do/policy-process";
import PageHeader from "@/components/layout/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Advocacy",
  socialTitle: "Advocacy",
  description: "How NCIT forms a policy position from member input and puts it to public, private and development stakeholders.",
  path: "/what-we-do/advocacy",
});

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
