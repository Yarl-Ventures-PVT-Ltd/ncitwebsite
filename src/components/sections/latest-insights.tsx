"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LatestInsights() {
  const insights = [
    {
      id: 1,
      title: "Northern Tech Policy Submission 2026",
      category: "Policy",
      date: "Aug 02, 2026",
      desc: "NCIT's formal submission to the Ministry of Technology outlining required infrastructure investments for the Northern Province.",
    },
    {
      id: 2,
      title: "Q2 Ecosystem Growth Report",
      category: "Research",
      date: "Jul 15, 2026",
      desc: "A comprehensive look at startup funding, job creation, and export revenue across NCIT member companies.",
    },
    {
      id: 3,
      title: "New Cloud Partnership with Global Tech Giant",
      category: "News",
      date: "Jun 28, 2026",
      desc: "NCIT members will now have access to subsidized cloud credits and architecture training through our new enterprise partnership.",
    }
  ];

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
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-[2rem] overflow-hidden flex flex-col group"
            >
              {/* Image Placeholder */}
              <div className="h-48 w-full bg-ncit-blue/5 border-b border-white/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ncit-blue/20 to-ncit-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-ncit-ink">
                  {item.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm text-ncit-ink/50 font-medium mb-3">
                  {item.date}
                </div>
                <h3 className="text-xl font-bold font-heading text-ncit-ink mb-3 group-hover:text-ncit-blue transition-colors leading-snug">
                  <Link href={`/insights/${item.id}`} className="before:absolute before:inset-0">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-ncit-ink/70 font-light text-sm line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
