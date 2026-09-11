import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Building2, Users, User, Rocket, Globe } from 'lucide-react';
import { MEMBER_CATEGORIES, MEMBER_COUNT, type MemberCategory } from '@/lib/members';
import Link from 'next/link';
import { SITE, absoluteUrl, jsonLd, pageMetadata } from '@/lib/seo';
import { ActionLink } from '@/components/ui/action';

export const metadata: Metadata = pageMetadata({
  title: "Member Directory",
  socialTitle: "Member Directory",
  description: "The 34 organisations listed in the NCIT directory, grouped by the six membership categories set out in the chamber bylaws.",
  path: "/members",
});

// Icons live here rather than in the data module so the data stays plain and
// importable from anywhere, including the home page strip.
const CATEGORY_ICONS: Record<MemberCategory["key"], React.ReactNode> = {
  full: <Building2 className="w-5 h-5" />,
  second: <Building2 className="w-5 h-5" />,
  associations: <Users className="w-5 h-5" />,
  individuals: <User className="w-5 h-5" />,
  offshore: <Globe className="w-5 h-5" />,
  startup: <Rocket className="w-5 h-5" />,
};

/**
 * The directory as a list of real organisations rather than 33 lines of text.
 * Each member with a website becomes an Organization node, which is what lets a
 * search engine connect the chamber to its members as entities instead of
 * guessing from the page copy. Only facts already shown on the page are
 * described: the name, the link, and the descriptor where the chamber has one.
 */
const directorySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": absoluteUrl("/members#directory"),
  name: "NCIT Member Directory",
  description:
    `The ${MEMBER_COUNT} companies, institutions, associations and professionals that belong to the Northern Chamber of Information Technology.`,
  numberOfItems: MEMBER_COUNT,
  itemListOrder: "https://schema.org/ItemListUnordered",
  itemListElement: MEMBER_CATEGORIES.flatMap((category) => category.members).map((member, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Organization",
      name: member.name,
      ...(member.link ? { url: member.link } : {}),
      ...(member.info ? { description: member.info } : {}),
      memberOf: { "@id": `${SITE.url}/#organization` },
    },
  })),
};

export default function MembersDirectoryPage() {
  return (
    <div className="bg-ncit-cloud min-h-screen pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(directorySchema)} />
      {/* Hero Section */}
      <section className="bg-[#040D17] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Member Directory
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Explore our network of {MEMBER_COUNT} IT organizations, startups, associations, and professionals driving the digital economy in the Northern Province.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {MEMBER_CATEGORIES.map((category, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-ncit-blue">
                    {CATEGORY_ICONS[category.key]}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-ncit-ink font-heading">{category.title}</h2>
                    {category.description && (
                      <p className="text-sm text-ncit-ink/60 mt-1">{category.description}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.members.map((member, idx) => (
                    <Card key={idx} className="border border-gray-100 shadow-sm hover:shadow-md hover:border-ncit-blue/30 transition-all duration-300 group">
                      <CardContent className="p-5 h-full flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-ncit-ink group-hover:text-ncit-blue transition-colors">
                            {member.name}
                          </h3>
                          {member.info && (
                            <Badge variant="secondary" className="mt-2 text-xs font-normal bg-gray-100 text-ncit-ink/70">
                              {member.info}
                            </Badge>
                          )}
                        </div>
                        {member.link && (
                          <a 
                            href={member.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[24px] items-center gap-2 py-1 mt-4 text-sm font-medium text-ncit-blue opacity-80 hover:opacity-100"
                          >
                            Visit Website
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* The address here was hello@ncit.lk, which appears nowhere else
                on the site and is not the address the contact page, the footer
                and the organisation schema all publish. An enquiry sent to an
                address the chamber does not advertise is an enquiry nobody
                reads, so this uses the one documented inbox.

                The panel also gives the directory the outbound links it had
                none of: a visitor who reaches the end of the member list and
                wants to join had no route from here. */}
            <div className="mt-12 rounded-lg border border-ncit-line bg-ncit-surface p-6">
              <h2 className="text-base font-semibold text-ncit-ink">About this directory</h2>
              <p className="mt-2 text-sm leading-relaxed text-ncit-ink-2">
                The directory lists organisations admitted under the membership categories set out in the{" "}
                <Link href="/about/governance/bylaws" className="text-ncit-blue underline underline-offset-4 hover:no-underline">
                  chamber bylaws
                </Link>
                . It is updated as applications are approved. To correct an entry or ask about listing, write to{" "}
                <a href={`mailto:${SITE.email}`} className="text-ncit-blue underline underline-offset-4 hover:no-underline">
                  {SITE.email}
                </a>
                .
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <ActionLink href="/membership/apply" variant="primary" withArrow>
                  Become a member
                </ActionLink>
                <ActionLink href="/membership" variant="secondary">
                  Membership categories
                </ActionLink>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
