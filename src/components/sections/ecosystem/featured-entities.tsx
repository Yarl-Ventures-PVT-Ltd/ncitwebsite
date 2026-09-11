"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import Link from "next/link";
import { MEMBER_CATEGORIES } from "@/lib/members";

/**
 * A spotlight on real chamber members.
 *
 * This section previously listed three hand-written entries under the heading
 * "Featured Members". Two of the companies did not exist: invented names,
 * invented districts and invented descriptions, published on the chamber's own
 * site as organisations in its ecosystem. The third was a real Jaffna
 * organisation that is not an NCIT member. All three claims were false.
 *
 * It now reads the actual directory, so a name can only appear here if the
 * chamber has it on the books, and it shows only what the chamber recorded: the
 * name, the membership class, and the website. Nothing is inferred from a
 * company name or a domain, and the card links out so a reader can check.
 */
const featured = MEMBER_CATEGORIES.find((c) => c.key === "full")!
  .members.filter((m) => m.link)
  .slice(0, 3)
  .map((m) => ({ ...m, type: "Category I Full Member" }));

export default function FeaturedEntities() {
  return (
    <section className="py-24 bg-ncit-ink text-white relative overflow-hidden">

      <div className="container relative z-10 mx-auto px-4 md:px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 text-white/80">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold tracking-widest uppercase">Spotlight</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Members</h2>
            <p className="text-lg text-white/70 font-light">
              A few of the technology organisations that belong to the chamber.
              The full list is in the member directory.
            </p>
          </motion.div>

          <Link
            href="/members"
            className="inline-block min-h-[24px] py-1 text-sm font-semibold whitespace-nowrap text-white/85 transition-colors hover:text-white"
          >
            View the full directory &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((entity, index) => (
            <motion.a
              key={entity.name}
              href={entity.link ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group block"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-ncit-blue transition-colors">
                    {entity.name}
                  </h3>
                  <p className="text-sm text-white/50">{entity.type}</p>
                  {entity.info && (
                    <p className="mt-4 text-white/70 font-light leading-relaxed">{entity.info}</p>
                  )}
                </div>
                <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-ncit-blue transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
