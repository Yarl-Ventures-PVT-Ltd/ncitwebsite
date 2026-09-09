import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SITE, organizationSchema, websiteSchema, faqSchema, ORGANISATION_FAQ, jsonLd } from "@/lib/seo";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase makes every relative image and canonical resolve to an
  // absolute URL, which is what crawlers and social scrapers require.
  metadataBase: new URL(SITE.url),
  title: {
    default: "NCIT | Northern Sri Lanka’s Technology Chamber",
    // Every page supplies its own title; this keeps the brand on the end.
    template: "%s | NCIT Jaffna",
  },
  description: SITE.description,
  applicationName: SITE.legalName,
  keywords: [
    "NCIT",
    "Northern Chamber of Information Technology",
    "ICT Jaffna",
    "IT companies Northern Province",
    "technology chamber Sri Lanka",
    "startup Jaffna",
    "business incubation Jaffna",
    "ICT industry Sri Lanka",
  ],
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.legalName,
    title: "NCIT | Northern Sri Lanka’s Technology Chamber",
    description: SITE.description,
    url: SITE.url,
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: "NCIT | Northern Sri Lanka’s Technology Chamber",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans mesh-bg text-ncit-ink selection:bg-ncit-blue/20">
        {/* Structured data. The organisation and website nodes are referenced
            by @id from every article page, so the graph stays connected. The
            FAQ block is what answer engines quote about NCIT. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema())} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema())} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(ORGANISATION_FAQ))} />
        <Header />
        <main className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
