"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Globe2 } from "lucide-react";
import { InsightArticle } from "@/lib/mock-data/insights";

interface ArticleGridProps {
  articles: InsightArticle[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-ncit-ink/50 text-lg">No articles found for this category.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-ncit-blue/20 transition-all duration-300"
            >
              {/* Image Container */}
              <Link href={`/insights/${article.slug}`} className="relative h-56 md:h-64 overflow-hidden block">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${article.imageUrl})` }}
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-ncit-ink backdrop-blur-sm shadow-sm">
                    {article.category}
                  </span>
                </div>
              </Link>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-[11px] font-medium text-ncit-ink/50 uppercase tracking-wider mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5" />
                    {article.language}
                  </span>
                </div>

                <Link href={`/insights/${article.slug}`}>
                  <h3 className="text-xl md:text-2xl font-bold text-ncit-ink mb-3 leading-snug group-hover:text-ncit-blue transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-ncit-ink/70 font-light leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-ncit-cloud flex items-center justify-center text-ncit-ink font-bold text-xs">
                      {article.author.charAt(0)}
                    </div>
                    <div className="text-xs font-bold text-ncit-ink">{article.author}</div>
                  </div>
                  
                  <Link 
                    href={`/insights/${article.slug}`}
                    className="text-ncit-blue font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
