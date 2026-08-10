"use client";

import { motion } from "framer-motion";
import { ArticleCategory } from "@/lib/mock-data/insights";

interface InsightsHeroProps {
  selectedCategory: ArticleCategory | "All";
  onSelectCategory: (category: ArticleCategory | "All") => void;
}

const categories: (ArticleCategory | "All")[] = [
  "All",
  "News",
  "Announcements",
  "Policy",
  "Member Stories",
  "Ecosystem",
  "Press"
];

export default function InsightsHero({ selectedCategory, onSelectCategory }: InsightsHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ncit-cloud relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 1.02, 0.73, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 text-ncit-ink"
          >
            News & Insights from NCIT.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-ncit-ink/70 font-light max-w-2xl mx-auto mb-12"
          >
            Discover the latest announcements, policy updates, member stories, and data-driven analysis from the Northern tech ecosystem.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-ncit-blue text-white shadow-md shadow-ncit-blue/20"
                    : "bg-white text-ncit-ink hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
