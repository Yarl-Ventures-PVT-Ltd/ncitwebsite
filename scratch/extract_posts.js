const fs = require('fs');
const path = require('path');

const dir = 'ncit-lk-crawl/pages';
const files = fs.readdirSync(dir);

const excludeFiles = [
    "index.html", "about-us.html", "contact-us.html", "board.html", "bylaws.html", 
    "projects.html", "services.html", "members.html", "membership.html", "home.html", 
    "calendar.html", "covid19.html", "member-benefits.html", "business-incubation-center.html", 
    "resources.html", "useful-links.html", "ictmemberdirectory.html", "presentation.html", 
    "flood2018.html", "notice-board.html"
];

const validPosts = [];

for (const file of files) {
    if (
        file.endsWith('.html') &&
        !file.startsWith('category') &&
        !file.startsWith('author') &&
        !file.startsWith('wp-') &&
        !file.includes('__') &&
        !excludeFiles.includes(file)
    ) {
        const filePath = path.join(dir, file);
        const html = fs.readFileSync(filePath, 'utf-8');
        
        let title = '';
        const titleMatch = html.match(/<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>(.*?)<\/h1>/is);
        if (titleMatch) {
            title = titleMatch[1].replace(/<[^>]+>/g, '').trim();
        } else {
            const tMatch = html.match(/<title>(.*?)<\/title>/is);
            if (tMatch) title = tMatch[1].split('-')[0].trim();
        }
        
        if (!title) title = file.replace('.html', '');
        
        // Remove ' - NCIT' or similar
        title = title.replace(/\s*(&#8211;|-|\|)\s*Northern Chamber of Information Technology.*/i, '');
        
        let date = '2016-01-01';
        const dateMatch = html.match(/<time[^>]*class="[^"]*entry-date[^"]*"[^>]*datetime="([^"]+)"/is);
        if (dateMatch) {
            date = dateMatch[1].split('T')[0];
        } else {
            // Try to extract from URL if possible (not reliable, fallback used)
        }
        
        let contentHtml = '';
        const contentMatch = html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>(.*?)<\/div>\s*<!-- \.entry-content -->/is);
        if (contentMatch) {
            contentHtml = contentMatch[1].trim();
        } else {
            const contentMatchFallback = html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>(.*?)<\/div>\s*<\/article>/is);
            if (contentMatchFallback) contentHtml = contentMatchFallback[1].trim();
        }
        
        let imgUrl = '';
        const imgMatch = html.match(/<img[^>]*class="[^"]*wp-post-image[^"]*"[^>]*src="([^"]+)"/is);
        if (imgMatch) {
            imgUrl = imgMatch[1];
        } else if (contentHtml) {
            const innerImgMatch = contentHtml.match(/<img[^>]*src="([^"]+)"/is);
            if (innerImgMatch) {
                imgUrl = innerImgMatch[1];
            }
        }
        
        if (!imgUrl) {
            imgUrl = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'; // Tech ecosystem fallback
        }
        
        // Extract plain text excerpt from content
        let excerpt = contentHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 150) + '...';
        
        if (contentHtml.length > 100 && title) {
            validPosts.push({
                slug: file.replace('.html', ''),
                title,
                date,
                excerpt,
                content: contentHtml,
                imageUrl: imgUrl,
                category: 'News',
                author: 'NCIT Team',
                organization: 'NCIT',
                language: 'English'
            });
        }
    }
}

// Write to insights mock data format
let outTs = `export type ArticleCategory = "News" | "Announcements" | "Policy" | "Member Stories" | "Ecosystem" | "Press";

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  date: string;
  updatedAt?: string;
  author: string;
  organization: string;
  imageUrl: string;
  language: "English" | "Tamil" | "Sinhala" | "Bilingual";
  featured?: boolean;
}

export const mockInsights: InsightArticle[] = [\n`;

validPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

if (validPosts.length > 0) {
    validPosts[0].featured = true;
}

validPosts.forEach((p, idx) => {
    outTs += `  {
    id: "${idx + 1}",
    slug: ${JSON.stringify(p.slug)},
    title: ${JSON.stringify(p.title)},
    excerpt: ${JSON.stringify(p.excerpt)},
    content: ${JSON.stringify(p.content)},
    category: "News",
    date: "${p.date}",
    author: "NCIT Team",
    organization: "NCIT",
    imageUrl: "${p.imageUrl}",
    language: "English"${p.featured ? ',\n    featured: true' : ''}
  }${idx < validPosts.length - 1 ? ',' : ''}\n`;
});

outTs += `];

export function getFeaturedArticle(): InsightArticle {
  return mockInsights.find(article => article.featured) || mockInsights[0];
}

export function getAllArticles(): InsightArticle[] {
  return mockInsights.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): InsightArticle | undefined {
  return mockInsights.find(article => article.slug === slug);
}
`;

fs.writeFileSync('src/lib/mock-data/insights.ts', outTs);
console.log(`Successfully migrated ${validPosts.length} posts to src/lib/mock-data/insights.ts`);
