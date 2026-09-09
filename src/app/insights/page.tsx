import type { Metadata } from "next";
import InsightsClient from "@/components/sections/insights/insights-client";
import { SITE, absoluteUrl } from "@/lib/seo";

/**
 * The listing itself is interactive (category filtering), so it lives in a
 * client component. Metadata can only be exported from a server component,
 * which is why this page is a thin server wrapper: without it the route
 * silently inherited the site-wide default title and competed with the home
 * page for the same query.
 */
export const metadata: Metadata = {
  title: "Insights & News",
  description:
    "News, announcements and reports from the Northern Chamber of Information Technology: ICT industry developments, events and member stories across Jaffna and the Northern Province of Sri Lanka.",
  keywords: [
    "NCIT news",
    "ICT news Jaffna",
    "Northern Province technology news",
    "Sri Lanka ICT industry updates",
    "NCIT announcements",
  ],
  alternates: { canonical: "/insights" },
  openGraph: {
    type: "website",
    title: "Insights & News | NCIT",
    description:
      "News, announcements and reports from the Northern Chamber of Information Technology, Jaffna, Sri Lanka.",
    url: absoluteUrl("/insights"),
    siteName: SITE.legalName,
    locale: SITE.locale,
  },
};

export default function InsightsPage() {
  return <InsightsClient />;
}
