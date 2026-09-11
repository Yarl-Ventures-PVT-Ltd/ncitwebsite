import { Metadata } from "next";
import CoreFunctions from "@/components/sections/what-we-do/core-functions";
import WhatWeDoCTA from "@/components/sections/what-we-do/what-we-do-cta";
import PageHeader from "@/components/layout/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "What We Do | Northern Chamber of Information Technology" },
  socialTitle: "What We Do",
  description: "How NCIT strengthens the Northern technology economy: industry representation, business growth, investment, talent and partnerships.",
  path: "/what-we-do",
});

export default function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        title="What We Do"
        lede="NCIT works across industry representation, business growth, investment, talent, innovation and partnerships to strengthen the Northern technology economy."
        crumbs={[{ name: "What we do", path: "/what-we-do" }]}
      />
      <CoreFunctions />
      <WhatWeDoCTA />
    </>
  );
}
