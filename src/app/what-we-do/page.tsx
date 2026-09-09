import { Metadata } from "next";
import WhatWeDoHero from "@/components/sections/what-we-do/what-we-do-hero";
import CoreFunctions from "@/components/sections/what-we-do/core-functions";
import WhatWeDoCTA from "@/components/sections/what-we-do/what-we-do-cta";

export const metadata: Metadata = {
  alternates: { canonical: "/what-we-do" },
  title: { absolute: "What We Do | Northern Chamber of Information Technology" },
  description: "How NCIT strengthens the Northern Sri Lankan technology economy: industry representation, business growth, investment, talent and partnerships.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <WhatWeDoHero />
      <CoreFunctions />
      <WhatWeDoCTA />
    </>
  );
}
