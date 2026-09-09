import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/mock-data/insights";
import { SITE, absoluteUrl, breadcrumbSchema, jsonLd } from "@/lib/seo";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Photographs from NCIT events across Jaffna and the Northern Province of Sri Lanka: startup weekends, exhibitions, training programmes, business incubation and chamber meetings from 2016 onwards.",
  keywords: [
    "NCIT gallery",
    "NCIT event photos",
    "ICT events Jaffna",
    "Northern Province technology events",
    "startup weekend Jaffna photos",
  ],
  alternates: { canonical: "/gallery" },
  openGraph: {
    type: "website",
    title: "NCIT Photo Gallery",
    description:
      "Photographs from NCIT events across Jaffna and the Northern Province of Sri Lanka, from 2016 onwards.",
    url: absoluteUrl("/gallery"),
    siteName: SITE.legalName,
  },
};

interface GalleryEvent {
  slug: string;
  title: string;
  date: string;
  category: string;
  images: string[];
}

/**
 * Every photograph the chamber has published, grouped by the event it came
 * from. The old site scattered these across individual posts, so there was no
 * single place to see the chamber's history.
 */
function buildGallery(): GalleryEvent[] {
  const events: GalleryEvent[] = [];

  for (const article of getAllArticles()) {
    const found = new Set<string>();
    for (const match of article.content.matchAll(/<img[^>]+src="([^"]+)"/g)) {
      const src = match[1];
      if (!src.startsWith("/wp-content/")) continue;
      if (/logo|icon|avatar|button/i.test(src)) continue;
      found.add(src);
    }
    if (found.size === 0) continue;
    events.push({
      slug: article.slug,
      title: article.title,
      date: article.date,
      category: article.category,
      images: [...found],
    });
  }

  return events;
}

export default function GalleryPage() {
  const events = buildGallery();
  const totalImages = events.reduce((sum, e) => sum + e.images.length, 0);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Photo Gallery", path: "/gallery" },
  ]);

  // An image gallery node, so image search can associate each photograph with
  // the event and the organisation rather than treating it as an orphan file.
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "NCIT Photo Gallery",
    description: metadata.description,
    url: absoluteUrl("/gallery"),
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    associatedMedia: events.flatMap((event) =>
      event.images.map((src) => ({
        "@type": "ImageObject",
        contentUrl: absoluteUrl(src),
        name: `${event.title} - NCIT, Jaffna, Northern Province, Sri Lanka`,
        datePublished: event.date,
      }))
    ),
  };

  return (
    <div className="pb-24 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(gallerySchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumb)} />

      <header className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ncit-ink text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-ncit-blue text-white mb-6">
              <Camera className="w-3.5 h-3.5" />
              Gallery
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              NCIT Photo Gallery
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              {totalImages} photographs from {events.length} NCIT events across Jaffna and the
              Northern Province of Sri Lanka, from 2016 onwards.
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        {events.map((event) => (
          <section key={event.slug} className="mb-16">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6 border-b border-slate-200 pb-3">
              <h2 className="font-heading text-2xl font-bold text-ncit-ink">
                <Link href={`/insights/${event.slug}`} className="hover:text-ncit-blue transition-colors">
                  {event.title}
                </Link>
              </h2>
              <span className="text-sm text-slate-500">
                {new Date(event.date).toLocaleDateString("en-GB", {
                  month: "long",
                  year: "numeric",
                })}
                {" · "}
                {event.category}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {event.images.map((src, i) => (
                <Link
                  key={src}
                  href={`/insights/${event.slug}`}
                  className="block group overflow-hidden rounded-lg bg-slate-100 aspect-4/3 relative"
                >
                  {/* next/image serves resized, modern formats. These are
                      historical uploads with no known dimensions, so fill plus
                      sizes lets the browser request only what the grid needs,
                      which is what keeps largest-contentful-paint down. */}
                  <Image
                    src={src}
                    alt={`${event.title} - NCIT Jaffna, Northern Province Sri Lanka (photo ${i + 1})`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
