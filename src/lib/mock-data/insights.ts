export type ArticleCategory = "News" | "Announcements" | "Policy" | "Member Stories" | "Ecosystem" | "Press";

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

export const mockInsights: InsightArticle[] = [
  {
    id: "1",
    slug: "ncit-launches-new-digital-skills-initiative",
    title: "NCIT Launches New Digital Skills Initiative in the North",
    excerpt: "A comprehensive program aimed at bridging the digital divide and preparing the next generation for the global tech economy.",
    content: `
      <p>The Northern Chamber of Information Technology (NCIT) is proud to announce the launch of a groundbreaking digital skills initiative aimed at empowering youth across the Northern Province.</p>
      
      <h2>Bridging the Digital Divide</h2>
      <p>In partnership with leading global technology firms and local educational institutions, this program will deliver intensive training in software engineering, data science, and cloud computing. The curriculum has been designed to meet international standards, ensuring graduates are immediately employable in the global market.</p>
      
      <p>Our focus is not just on technical skills, but also on fostering a culture of innovation and problem-solving. By equipping our youth with these essential tools, we are laying the foundation for a robust and self-sustaining digital economy in the region.</p>
      
      <h2>Program Highlights</h2>
      <ul>
        <li>6-month intensive bootcamps</li>
        <li>Mentorship from industry leaders</li>
        <li>Guaranteed internship placements for top performers</li>
      </ul>
      
      <p>Applications for the first cohort will open next month. We invite all interested candidates to stay tuned for further updates on our website.</p>
    `,
    category: "Announcements",
    date: "2026-08-15",
    author: "Communications Team",
    organization: "NCIT",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    language: "English",
    featured: true,
  },
  {
    id: "2",
    slug: "q3-northern-tech-ecosystem-report",
    title: "Q3 2026: Northern Tech Ecosystem Growth Report",
    excerpt: "An in-depth analysis of investment trends, startup growth, and infrastructure development in the Northern Province during Q3.",
    content: "<p>Full report content here...</p>",
    category: "Ecosystem",
    date: "2026-08-10",
    author: "Research Division",
    organization: "NCIT DataLab",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    language: "English"
  },
  {
    id: "3",
    slug: "yarl-it-hub-success-story",
    title: "Member Spotlight: Yarl IT Hub's Impact on Grassroots Innovation",
    excerpt: "How a community-driven organization is transforming the entrepreneurial landscape in Jaffna.",
    content: "<p>Full article content here...</p>",
    category: "Member Stories",
    date: "2026-08-05",
    updatedAt: "2026-08-06",
    author: "Editorial Team",
    organization: "NCIT",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    language: "English"
  },
  {
    id: "4",
    slug: "government-digital-policy-update",
    title: "New Government Policy on IT Exports: What You Need to Know",
    excerpt: "A breakdown of the recently announced tax incentives and regulatory frameworks affecting IT service exporters.",
    content: "<p>Full policy breakdown here...</p>",
    category: "Policy",
    date: "2026-07-28",
    author: "Policy Advocacy Group",
    organization: "NCIT",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    language: "Bilingual"
  },
  {
    id: "5",
    slug: "startup-weekend-jaffna-2026",
    title: "Startup Weekend Jaffna 2026 Wraps Up with Record Participation",
    excerpt: "Over 200 innovators gathered for 54 hours of intense ideation, prototyping, and pitching.",
    content: "<p>Event recap here...</p>",
    category: "News",
    date: "2026-07-15",
    author: "Events Team",
    organization: "NCIT",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    language: "English"
  },
  {
    id: "6",
    slug: "press-release-ncit-partners-with-global-tech",
    title: "PRESS RELEASE: NCIT Signs MoU with Global Tech Consortium",
    excerpt: "Strategic partnership aimed at establishing a new center of excellence for artificial intelligence in Northern Sri Lanka.",
    content: "<p>Press release content here...</p>",
    category: "Press",
    date: "2026-07-02",
    author: "Media Relations",
    organization: "NCIT",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop",
    language: "English"
  }
];

export function getFeaturedArticle(): InsightArticle {
  return mockInsights.find(article => article.featured) || mockInsights[0];
}

export function getAllArticles(): InsightArticle[] {
  return mockInsights.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): InsightArticle | undefined {
  return mockInsights.find(article => article.slug === slug);
}
