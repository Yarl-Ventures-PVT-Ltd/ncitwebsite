"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Globe2 } from "lucide-react";
import { InsightArticle } from "@/lib/mock-data/insights";

interface FeaturedArticleProps {
  article: InsightArticle;
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 bg-ncit-cloud border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px] overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${article.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ncit-ink/80 via-transparent to-transparent lg:hidden" />
              
              <div className="absolute top-6 left-6 z-10">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-ncit-blue text-white shadow-lg shadow-ncit-blue/20">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative z-10">
              <div className="flex items-center gap-4 text-xs font-medium text-ncit-ink/50 uppercase tracking-wider mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5" />
                  {article.language}
                </span>
              </div>
              
              <Link href={`/insights/${article.slug}`}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ncit-ink mb-6 leading-tight group-hover:text-ncit-blue transition-colors duration-300">
                  {article.title}
                </h2>
              </Link>
              
              <p className="text-lg text-ncit-ink/70 font-light leading-relaxed mb-8">
                {article.excerpt}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ncit-cloud flex items-center justify-center text-ncit-ink font-bold text-sm">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ncit-ink">{article.author}</div>
                    <div className="text-xs text-ncit-ink/60">{article.organization}</div>
                  </div>
                </div>
                
                <Link 
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ncit-cloud text-ncit-ink group-hover:bg-ncit-blue group-hover:text-white transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
