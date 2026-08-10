import { Metadata } from "next";
import WhatWeDoHero from "@/components/sections/what-we-do/what-we-do-hero";
import CoreFunctions from "@/components/sections/what-we-do/core-functions";
import WhatWeDoCTA from "@/components/sections/what-we-do/what-we-do-cta";

export const metadata: Metadata = {
  title: "What We Do | Northern Chamber of Information Technology",
  description: "NCIT works across industry representation, business growth, investment, talent, innovation and partnerships to strengthen Northern Sri Lanka’s technology economy.",
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
