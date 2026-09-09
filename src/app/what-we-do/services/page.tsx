import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Building2, LineChart, Users, BookOpen, Globe2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  alternates: { canonical: "/what-we-do/services" },
  title: "Our Services",
  description: 'Explore the range of services offered by the Northern Chamber of Information Technology to its members and the community.',
};

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  /** Set only where the service is not currently running. */
  status?: string;
}

const services: Service[] = [
  {
    title: "Business Incubation",
    description: "The chamber ran an incubation centre in Jaffna with IE-NESL, giving young entrepreneurs workspace, mentorship and resources. It has been closed since September 2020.",
    icon: <Building2 className="w-8 h-8 text-ncit-blue" />,
    link: "/what-we-do/business-incubation-center",
    status: "Closed since September 2020",
  },
  {
    title: "Market Access & Networking",
    description: "Connecting local IT businesses with national and global markets through B2B expos and delegations.",
    icon: <Globe2 className="w-8 h-8 text-ncit-blue" />,
    link: "/what-we-do/market-access"
  },
  {
    title: "Policy Advocacy",
    description: "Representing the interests of the Northern IT sector to government bodies and policymakers.",
    icon: <ShieldCheck className="w-8 h-8 text-ncit-blue" />,
    link: "/what-we-do/advocacy"
  },
  {
    title: "Capacity Building",
    description: "Organizing workshops, seminars, and training programs to upskill IT professionals and entrepreneurs.",
    icon: <BookOpen className="w-8 h-8 text-ncit-blue" />,
    link: "/what-we-do/projects"
  },
  {
    title: "Industry Events",
    description: "Hosting tech summits, hackathons, and Startup Weekends to foster a culture of innovation.",
    icon: <Users className="w-8 h-8 text-ncit-blue" />,
    link: "/insights"
  },
  {
    title: "Investment Facilitation",
    description: "Assisting investors in navigating the Northern IT landscape and matching them with promising startups.",
    icon: <LineChart className="w-8 h-8 text-ncit-blue" />,
    link: "/invest"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-ncit-cloud min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-[#040D17] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ncit-blue/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
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
              <Card key={index} className="border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-ncit-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ncit-blue group-hover:text-white transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors duration-300 text-ncit-blue">
                      {service.icon}
                    </div>
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
                <CardContent>
                  <Link href={service.link}>
                    <Button variant="outline" className="w-full mt-4 group-hover:bg-ncit-ink group-hover:text-white transition-colors">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Banner */}
          <div className="mt-20 bg-white border border-gray-100 rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-ncit-ink/5 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ncit-blue/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-ncit-ink mb-4 font-heading">Need a custom service?</h2>
              <p className="text-ncit-ink/70 mb-8 max-w-xl mx-auto">
                Whether you are an investor looking for opportunities or a startup needing specific support, our team is here to help.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-ncit-ink hover:bg-ncit-blue text-white rounded-xl px-8 shadow-md">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
