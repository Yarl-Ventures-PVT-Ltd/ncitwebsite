import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/mock-data/insights";
import { Home, Newspaper, Users, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you requested could not be found. Browse NCIT membership, what we do, insights and the photo gallery instead.",
  // A missing page must never be indexed, and must not pass authority on.
  robots: { index: false, follow: true },
};

const DESTINATIONS = [
  { href: "/", label: "Home", description: "Start from the beginning", icon: Home },
  { href: "/insights", label: "Insights & News", description: "Every NCIT announcement and report", icon: Newspaper },
  { href: "/membership", label: "Membership", description: "Join the chamber", icon: Users },
  { href: "/contact", label: "Contact", description: "Talk to the NCIT team", icon: Mail },
];

export default function NotFound() {
  // Offer real, recent articles rather than a dead end.
  const recent = getAllArticles().slice(0, 4);

  return (
    <div className="pt-32 pb-24 md:pt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-ncit-blue mb-4">
            404
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-ncit-ink mb-6">
            We could not find that page
          </h1>
          <p className="text-lg text-ncit-ink/70 mb-12 leading-relaxed">
            The address may be out of date, or the page may have moved when the NCIT
            site was rebuilt. Everything published on the old site is still here, so
            the links below should get you where you were going.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {DESTINATIONS.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group block p-6 rounded-2xl border border-slate-200 hover:border-ncit-blue hover:shadow-md transition-all"
            >
              <d.icon className="w-6 h-6 text-ncit-blue mb-4" />
              <div className="font-bold text-ncit-ink mb-1 group-hover:text-ncit-blue transition-colors">
                {d.label}
              </div>
              <div className="text-sm text-ncit-ink/60">{d.description}</div>
            </Link>
          ))}
        </div>

        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-ncit-ink mb-6">
            Recent from NCIT
          </h2>
          <ul className="space-y-3">
            {recent.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-ncit-ink hover:text-ncit-blue transition-colors"
                >
                  <span className="font-medium">{article.title}</span>
                  <span className="text-sm text-ncit-ink/50">
                    {new Date(article.date).toLocaleDateString("en-GB", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
