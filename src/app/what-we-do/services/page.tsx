import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Building2, LineChart, Users, BookOpen, Globe2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  socialTitle: "Services",
  description: "What members can draw on: incubation, market access, policy advocacy, capacity building, industry events and investment support.",
  path: "/what-we-do/services",
});

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  /** Describes the destination. Six identical "Learn More" buttons told a
   *  crawler, and a screen reader user, nothing about where each one went. */
  linkLabel: string;
  /** Set only where the service is not currently running. */
  status?: string;
}

const services: Service[] = [
  {
    title: "Business Incubation",
    description: "The chamber ran an incubation centre in Jaffna with IE-NESL, giving young entrepreneurs workspace, mentorship and resources. It has been closed since September 2020.",
    icon: <Building2 className="w-8 h-8" />,
    link: "/what-we-do/business-incubation-center",
    linkLabel: "About the incubation centre",
    status: "Closed since September 2020",
  },
  {
    title: "Market Access & Networking",
    description: "Connecting local IT businesses with national and global markets through B2B expos and delegations.",
    icon: <Globe2 className="w-8 h-8" />,
    link: "/what-we-do/market-access",
    linkLabel: "Explore market access"
  },
  {
    title: "Policy Advocacy",
    description: "Representing the interests of the Northern IT sector to government bodies and policymakers.",
    icon: <ShieldCheck className="w-8 h-8" />,
    link: "/what-we-do/advocacy",
    linkLabel: "See our advocacy work"
  },
  {
    title: "Capacity Building",
    description: "Organizing workshops, seminars, and training programs to upskill IT professionals and entrepreneurs.",
    icon: <BookOpen className="w-8 h-8" />,
    link: "/what-we-do/projects",
    linkLabel: "Browse training and projects"
  },
  {
    title: "Industry Events",
    description: "Hosting tech summits, hackathons, and Startup Weekends to foster a culture of innovation.",
    icon: <Users className="w-8 h-8" />,
    link: "/insights",
    linkLabel: "See past events"
  },
  {
    title: "Investment Facilitation",
    description: "Assisting investors in navigating the Northern IT landscape and matching them with promising startups.",
    icon: <LineChart className="w-8 h-8" />,
    link: "/invest",
    linkLabel: "Investment opportunities"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-ncit-cloud min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-[#040D17] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              NCIT provides a comprehensive suite of services designed to empower tech businesses, foster innovation, and accelerate the growth of the digital economy in the North.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="flex h-full flex-col border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader>
                  {/* The resting colour and the hover colour sit on different
                      elements on purpose. When both were on one element the
                      glyph stayed blue on a blue box and disappeared, because
                      the two colour rules competed and the resting one won.
                      The box owns blue, the span owns white on hover, and
                      nothing overrides anything. */}
                  <div className="w-16 h-16 bg-ncit-blue/10 rounded-2xl flex items-center justify-center mb-6 text-ncit-blue transition-colors duration-300 group-hover:bg-ncit-blue">
                    <span className="transition-colors duration-300 group-hover:text-white">
                      {service.icon}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-ncit-ink mb-2">
                    {service.title}
                  </CardTitle>
                  {service.status && (
                    <span className="inline-block mb-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                      {service.status}
                    </span>
                  )}
                  <CardDescription className="text-ncit-ink/70 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                {/* mt-auto pins every action to the bottom of its card, so the
                    six buttons line up across the row however long the copy
                    above them runs. A Button inside a Link was also invalid
                    nesting, interactive content inside an anchor, so the link
                    now carries the button styling itself and is a single tab
                    stop. */}
                <CardContent className="mt-auto">
                  <Link
                    href={service.link}
                    /* Styled directly rather than through buttonVariants. The
                       outline variant declares its own hover:bg-muted, and a
                       second hover background on the same element does not
                       reliably beat it: the text went white while the
                       background stayed grey, which is an unreadable label.
                       With no competing rule there is nothing to lose to.

                       Both hover states are listed because they are reached
                       differently. The group rule covers a pointer anywhere on
                       the card; the direct rule covers the pointer on the
                       button itself. */
                    className={cn(
                      "mt-4 inline-flex h-11 w-full items-center justify-center rounded-lg border",
                      "border-ncit-line-strong bg-ncit-surface text-sm font-medium text-ncit-ink",
                      "transition-colors",
                      "group-hover:border-ncit-blue group-hover:bg-ncit-blue group-hover:text-white",
                      "hover:border-ncit-blue hover:bg-ncit-blue hover:text-white",
                    )}
                  >
                    {service.linkLabel}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Banner */}
          <div className="mt-20 bg-white border border-gray-100 rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-ncit-ink/5 max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-ncit-ink mb-4 font-heading">Need a custom service?</h2>
              <p className="text-ncit-ink/70 mb-8 max-w-xl mx-auto">
                Whether you are an investor looking for opportunities or a startup needing specific support, our team is here to help.
              </p>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex h-12 items-center justify-center rounded-xl px-8",
                  "bg-ncit-blue text-sm font-medium text-white shadow-md transition-colors",
                  "hover:bg-ncit-blue-hover",
                )}
              >
                Get in Touch
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
