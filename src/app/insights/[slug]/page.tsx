import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";

import { getArticleBySlug, getAllArticles } from "@/lib/mock-data/insights";
import PageHeader from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Chip } from "@/components/ui/chip";
import { ArticleCard } from "@/components/content/article-card";
import { ShareButton } from "@/components/content/share-button";
import { MoreLink } from "@/components/ui/action";
import { formatDate, isoDate, relatedArticles } from "@/lib/content";
import { SITE, absoluteUrl, articleSchema, jsonLd } from "@/lib/seo";

// In this version of Next.js, params is a promise and has to be awaited.
interface InsightArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for the mock data
export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/**
 * Per-article title, description, canonical and social card. Without this
 * every article shared the site-wide title, so 59 pages competed with each
 * other for the same query and none of them described itself.
 */
export async function generateMetadata({ params }: InsightArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  const canonical = `/insights/${article.slug}`;
  const image = article.imageUrl?.startsWith("/") ? absoluteUrl(article.imageUrl) : article.imageUrl;

  // The full headline stays as the page's H1; search results get the shorter
  // variant where one exists, because the migrated WordPress headlines run to
  // 100 characters and truncate in the SERP.
  return {
    title: article.seoTitle || article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: absoluteUrl(canonical),
      siteName: SITE.legalName,
      locale: SITE.locale,
      publishedTime: article.date,
      modifiedTime: article.updatedAt || article.date,
      authors: [SITE.legalName],
      section: article.category,
      images: image ? [{ url: image, alt: article.imageAlt || article.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: image ? [image] : undefined,
    },
  };
}

/**
 * Marks the Tamil passages inside a post so a screen reader reads them with a
 * Tamil voice.
 *
 * Eleven posts are bilingual: whole English paragraphs sit beside whole Tamil
 * ones. Marking the entire article "ta", as this template used to, hands those
 * English paragraphs to a Tamil speech synthesiser, which has no phonemes for
 * Latin script. That is a WCAG 2.1 SC 3.1.2 failure at AA, and it makes the
 * post unusable for the readers the mark was meant to help.
 *
 * Only leaf blocks are tagged, meaning ones that contain no further block of
 * their own. Nested markup is left alone rather than guessed at; it falls back
 * to the document language, which is the safe direction. A Tamil sentence
 * containing an English proper noun stays a Tamil passage, which is what WCAG
 * expects.
 */
const TAMIL = /[\u0B80-\u0BFF]/;
const LEAF_BLOCK = /<(p|h[1-6]|li|td|blockquote|div)((?:\s[^>]*)?)>((?:(?!<(?:p|h[1-6]|li|td|blockquote|div)\b)[\s\S])*?)<\/\1>/g;

function markTamilPassages(html: string) {
  return html.replace(LEAF_BLOCK, (whole, tag, attrs, inner) => {
    if (attrs.includes("lang=")) return whole;
    if (!TAMIL.test(inner.replace(/<[^>]+>/g, ""))) return whole;
    return `<${tag}${attrs} lang="ta">${inner}</${tag}>`;
  });
}

export default async function InsightArticlePage({ params }: InsightArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Related reading is the same category first, then the newest of anything
  // else. Without the fallback an article in a thin category such as Press
  // showed one related item, or none.
  const related = relatedArticles(article, 3);

  return (
    <>
      {/* Structured data: a dated, attributed article, linked to the
          organisation node in the root layout. The breadcrumb list is emitted
          by PageHeader alongside the trail a reader can actually see, so the
          two cannot disagree. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          articleSchema({
            title: article.title,
            description: article.excerpt,
            slug: article.slug,
            datePublished: article.date,
            dateModified: article.updatedAt,
            image: article.imageUrl,
            keywords: article.keywords,
            section: article.category,
            language: article.language,
          })
        )}
      />

      <PageHeader
        title={article.title}
        crumbs={[
          { name: "News and Insights", path: "/insights" },
          { name: article.seoTitle || article.title, path: `/insights/${article.slug}` },
        ]}
      />

      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-ncit-line pb-6">
            <Chip tone="accent">{article.category}</Chip>

            <time className="ncit-date text-ncit-ink-3" dateTime={isoDate(article.date)}>
              {formatDate(article.date)}
            </time>

            {article.language !== "English" ? (
              <span className="ncit-date text-ncit-ink-3">{article.language}</span>
            ) : null}

            <div className="ml-auto">
              <ShareButton title={article.title} />
            </div>
          </div>

          <p className="ncit-lede mt-8 text-lg">{article.excerpt}</p>

          <figure className="mt-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-ncit-surface-2">
              <Image
                src={article.imageUrl}
                alt={article.imageAlt || article.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </figure>

          {/* Twelve of these articles are written in Tamil or in both Tamil and
              English. Marking the language lets a screen reader pick the right
              voice; the document lang alone would claim English for all of
              them. It is not a search signal, Google reads the visible text.
              hreflang is deliberately not used: these are not translated
              versions of one another, they are separate posts. */}
          <div
            lang={article.language === "Tamil" ? "ta" : "en"}
            className="prose prose-lg mt-10 max-w-none break-words prose-headings:text-ncit-ink prose-headings:font-semibold prose-p:text-ncit-ink-2 prose-p:leading-relaxed prose-a:text-ncit-blue prose-a:underline-offset-4 prose-li:text-ncit-ink-2 prose-strong:text-ncit-ink prose-img:rounded-lg prose-table:block prose-table:overflow-x-auto"
            dangerouslySetInnerHTML={{
              __html:
                article.language === "English" ? article.content : markTamilPassages(article.content),
            }}
          />

          <footer className="mt-12 border-t border-ncit-line pt-6">
            <p className="text-sm text-ncit-ink-3">
              Published by {article.organization}
              {article.updatedAt && isoDate(article.updatedAt) !== isoDate(article.date)
                ? `. Updated ${formatDate(article.updatedAt)}.`
                : "."}
            </p>
            <div className="mt-4">
              <MoreLink href="/insights">Back to all updates</MoreLink>
            </div>
          </footer>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="surface" labelledBy="related-updates">
          <SectionHeading
            id="related-updates"
            title="Related updates"
            action={<MoreLink href="/insights">All updates</MoreLink>}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
