import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Nothing is blocked here on purpose. The member portal is kept out of
        // search with a noindex tag on the page itself, and a crawler has to be
        // able to fetch the page to read that tag. Blocking it here instead
        // would leave the URL eligible to appear as a bare, description-less
        // result that nothing can remove.
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
