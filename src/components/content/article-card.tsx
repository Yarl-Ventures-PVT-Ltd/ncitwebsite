import Image from "next/image";
import Link from "next/link";

import { Chip } from "@/components/ui/chip";
import { formatDate, isoDate, type InsightArticle } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * The article card used by the home page, the insights index, the notice
 * board, the press page and the related-content rows. One component so a
 * publication date and a category read identically everywhere they appear.
 *
 * The whole card is not a link. The heading carries the link and a stretched
 * overlay makes the rest of the card clickable, which keeps the accessible
 * name of the link to the article title rather than the entire card text.
 */
export function ArticleCard({
    article,
    priority = false,
    showImage = true,
    className,
}: {
    article: InsightArticle;
    priority?: boolean;
    showImage?: boolean;
    className?: string;
}) {
    return (
        <article
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-lg border border-ncit-line bg-ncit-paper transition-colors hover:border-ncit-line-strong focus-within:border-ncit-blue",
                className,
            )}
        >
            {showImage ? (
                <div className="relative aspect-[16/9] overflow-hidden bg-ncit-surface-2">
                    <Image
                        src={article.imageUrl}
                        alt={article.imageAlt ?? article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 380px"
                        priority={priority}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                </div>
            ) : null}

            <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <Chip>{article.category}</Chip>
                    <time className="ncit-date text-ncit-ink-3" dateTime={isoDate(article.date)}>
                        {formatDate(article.date)}
                    </time>
                </div>

                <h3 className="text-base leading-snug font-semibold text-ncit-ink">
                    <Link
                        href={`/insights/${article.slug}`}
                        className="after:absolute after:inset-0 after:content-[''] group-hover:text-ncit-blue"
                    >
                        {article.title}
                    </Link>
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ncit-ink-2">{article.excerpt}</p>
            </div>
        </article>
    );
}

/**
 * The lead story. Same data, a wider composition, used once at the top of a
 * list so the first item does not read as just another card in the grid.
 */
export function FeatureArticleCard({ article }: { article: InsightArticle }) {
    return (
        <article className="group relative grid overflow-hidden rounded-lg border border-ncit-line bg-ncit-paper transition-colors hover:border-ncit-line-strong focus-within:border-ncit-blue md:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden bg-ncit-surface-2 md:aspect-auto md:min-h-[320px]">
                <Image
                    src={article.imageUrl}
                    alt={article.imageAlt ?? article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 620px"
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-10">
                <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <Chip tone="accent">{article.category}</Chip>
                    <time className="ncit-date text-ncit-ink-3" dateTime={isoDate(article.date)}>
                        {formatDate(article.date)}
                    </time>
                </div>

                <h3 className="text-xl leading-tight font-semibold tracking-tight text-ncit-ink md:text-2xl">
                    <Link
                        href={`/insights/${article.slug}`}
                        className="after:absolute after:inset-0 after:content-[''] group-hover:text-ncit-blue"
                    >
                        {article.title}
                    </Link>
                </h3>

                <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-ncit-ink-2">{article.excerpt}</p>
            </div>
        </article>
    );
}

/**
 * A dense row with no image, for the notice board and any place where the
 * point is to scan many items quickly rather than look at pictures.
 */
export function ArticleRow({ article }: { article: InsightArticle }) {
    return (
        <article className="group relative flex flex-col gap-2 border-b border-ncit-line py-5 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-6">
            <time
                className="ncit-date shrink-0 text-ncit-ink-3 sm:w-32 sm:pt-1"
                dateTime={isoDate(article.date)}
            >
                {formatDate(article.date)}
            </time>

            <div className="min-w-0 flex-1">
                <h3 className="text-[0.95rem] leading-snug font-medium text-ncit-ink">
                    <Link
                        href={`/insights/${article.slug}`}
                        className="after:absolute after:inset-0 after:content-[''] group-hover:text-ncit-blue"
                    >
                        {article.title}
                    </Link>
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-ncit-ink-3">{article.excerpt}</p>
            </div>

            <Chip className="shrink-0 self-start sm:self-baseline">{article.category}</Chip>
        </article>
    );
}
