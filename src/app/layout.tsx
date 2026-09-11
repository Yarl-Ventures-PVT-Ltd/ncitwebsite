import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SITE, organizationSchema, websiteSchema, jsonLd } from "@/lib/seo";

// One family carries the whole site. Geist is a neutral technical grotesque,
// which suits a technology chamber without tipping into startup styling, and
// using it for both display and body removes the mixed-family emphasis that
// the previous design leaned on.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

// Mono is reserved for metadata: publication dates, categories, counts and
// reference numbers. It keeps figures aligned down a list of notices.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Twelve of the published articles carry Tamil, so the stack has to render it
// properly rather than falling back to whatever the device happens to have.
// preload is off because no Tamil glyph appears above the fold on any page,
// and preloading it would compete with the largest contentful paint.
const notoTamil = Noto_Sans_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil", "latin"],
  display: "swap",
  preload: false,
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
  // Only what is true of EVERY page belongs here. title, description and url
  // are deliberately absent: a page that declares no openGraph of its own
  // inherits this object literally, and setting them here shipped og:url
  // pointing at the home page on twenty five interior pages. Page-specific
  // values come from pageMetadata() in lib/seo.ts instead.
  openGraph: {
    type: "website",
    siteName: SITE.legalName,
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
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
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${notoTamil.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ncit-paper font-sans text-ncit-ink selection:bg-ncit-blue/15">
        {/* Structured data describing the entity and the site as a whole, so
            it is correct on every page. The organisation and website nodes are
            referenced by @id from the article and gallery pages, which keeps
            the graph connected. Page-specific types such as FAQPage belong on
            the page whose visible content they describe, not here. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema())} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema())} />
        {/* First tab stop on every page, so a keyboard reader is not forced
            through the whole navigation before reaching the content. */}
        <a href="#main" className="ncit-skip">
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
