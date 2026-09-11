import { Section, SectionHeading } from "@/components/ui/section";
import { MoreLink } from "@/components/ui/action";
import { ArticleCard, FeatureArticleCard } from "@/components/content/article-card";
import { latestArticles } from "@/lib/content";

/**
 * Latest news and notices.
 *
 * The lead story gets a wide composition and the next three sit in a row
 * beneath it, so the section does not read as four identical cards. Everything
 * is server rendered from the article archive, so the dates, categories and
 * links are the same ones the insights index shows.
 */
export default function LatestInsights() {
    const [lead, ...rest] = latestArticles(4);

    if (!lead) return null;

    return (
        <Section tone="surface" labelledBy="home-news">
            <SectionHeading
                id="home-news"
                title="Latest news and notices"
                lede="Announcements, policy updates and member news from the chamber."
                action={<MoreLink href="/insights">All updates</MoreLink>}
            />

            <div className="ncit-reveal">
                <FeatureArticleCard article={lead} />
            </div>

            {rest.length > 0 ? (
                <div className="ncit-reveal mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((article) => (
                        <ArticleCard key={article.slug} article={article} />
                    ))}
                </div>
            ) : null}
        </Section>
    );
}
