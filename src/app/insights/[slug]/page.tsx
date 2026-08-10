import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/lib/mock-data/insights";
import Link from "next/link";
import { ArrowLeft, Calendar, Globe2, Clock, Share2 } from "lucide-react";

interface InsightArticlePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for the mock data
export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function InsightArticlePage({ params }: InsightArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="pb-24 bg-white">
      {/* Article Header */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ncit-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${article.imageUrl})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-ncit-ink via-ncit-ink/80 to-ncit-ink/40" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/insights"
              className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-ncit-blue text-white shadow-sm">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-white/70 uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-white/70 uppercase tracking-wider">
                <Globe2 className="w-3.5 h-3.5" />
                {article.language}
              </span>
              {article.updatedAt && (
                <span className="flex items-center gap-1.5 text-xs font-medium text-amber-400 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  Updated: {new Date(article.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              {article.title}
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8 max-w-3xl">
              {article.excerpt}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-8 border-t border-white/10 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-lg border border-white/20">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <div className="text-base font-bold text-white">{article.author}</div>
                  <div className="text-sm text-white/60">{article.organization}</div>
                </div>
              </div>
              
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium border border-white/10">
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="container mx-auto px-4 md:px-6 pt-16">
        <div className="max-w-3xl mx-auto">
          {/* Main Image */}
          <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 -mt-24 relative z-20 shadow-2xl">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${article.imageUrl})` }}
            />
          </div>

          {/* Prose Content */}
          <div 
            className="prose prose-lg prose-blue max-w-none prose-headings:text-ncit-ink prose-p:text-gray-600 prose-a:text-ncit-blue prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </article>
  );
}
