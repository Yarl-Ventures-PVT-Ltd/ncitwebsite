"use client";

import { useState } from "react";
import InsightsHero from "@/components/sections/insights/insights-hero";
import FeaturedArticle from "@/components/sections/insights/featured-article";
import ArticleGrid from "@/components/sections/insights/article-grid";
import NewsletterSignup from "@/components/sections/insights/newsletter-signup";
import { ArticleCategory, getAllArticles, getFeaturedArticle } from "@/lib/mock-data/insights";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | "All">("All");

  const featuredArticle = getFeaturedArticle();
  const allArticles = getAllArticles();
  
  // Filter out the featured article from the grid so it doesn't duplicate
  const nonFeaturedArticles = allArticles.filter(article => article.id !== featuredArticle.id);
  
  // Apply category filter
  const filteredArticles = selectedCategory === "All" 
    ? nonFeaturedArticles 
    : nonFeaturedArticles.filter(article => article.category === selectedCategory);

  return (
    <>
      <InsightsHero 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      
      {/* Only show featured article if 'All' is selected, otherwise just show filtered grid */}
      {selectedCategory === "All" && (
        <FeaturedArticle article={featuredArticle} />
      )}
      
      <ArticleGrid articles={filteredArticles} />
      
      <NewsletterSignup />
    </>
  );
}
