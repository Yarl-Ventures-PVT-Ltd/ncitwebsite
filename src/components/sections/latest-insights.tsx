"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getAllArticles } from "@/lib/mock-data/insights";

export default function LatestInsights() {
  // The three most recent real articles. This list used to be hardcoded, and
  // its links pointed at /insights/1, /insights/2 and /insights/3, which are
  // not real slugs, so every card on the home page led to a 404.
  const insights = getAllArticles().slice(0, 3);

  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-ncit-ink mb-4 font-heading tracking-tight">
              Insights & News
            </h2>
            <p className="text-xl text-ncit-ink/70 max-w-2xl font-light">
              The latest policy updates, ecosystem research, and announcements from NCIT.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/insights">
              <Button variant="outline" className="glass rounded-full px-6 font-semibold text-ncit-ink">
                View All Insights <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-[2rem] overflow-hidden flex flex-col group relative"
            >
              <div className="h-48 w-full bg-ncit-blue/5 border-b border-white/50 relative overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt || item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-ncit-ink z-10">
                  {item.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm text-ncit-ink/50 font-medium mb-3">
                  {new Date(item.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
                <h3 className="text-xl font-bold font-heading text-ncit-ink mb-3 group-hover:text-ncit-blue transition-colors leading-snug">
                  <Link href={`/insights/${item.slug}`} className="before:absolute before:inset-0">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-ncit-ink/70 font-light text-sm line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
