import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Chip } from '@/components/ui/chip';
import { Rocket, Users, Building2, Briefcase, Presentation, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects and Initiatives",
  socialTitle: "Projects and Initiatives",
  description: "Startup Weekends, the Business Incubation Center, the monthly tech talk, the ICT Job Bank and the chamber's investor forums.",
  path: "/what-we-do/projects",
});

const projects = [
  {
    title: "Startup Events (Startup Weekend)",
    description: "Organizing multiple Startup Weekend events across the region to foster entrepreneurship and innovation.",
    status: "Completed",
    icon: <Rocket className="w-6 h-6 text-ncit-blue" />,
    details: ["SW Jaffna 1 & 2 (Done)", "SW Vanni (Finished)", "SW Mannar (Done)"]
  },
  {
    title: "Local Community Events",
    description: "Hosting and supporting various community-driven tech events to build grassroots awareness and skills.",
    status: "Ongoing",
    icon: <Users className="w-6 h-6 text-ncit-blue" />,
    details: ["Several successful events completed across the province."]
  },
  {
    title: "Co-Working Space for Members",
    description: "Establishing a dedicated co-working space and incubation center for NCIT members with funding support.",
    status: "Completed",
    icon: <Building2 className="w-6 h-6 text-ncit-blue" />,
    details: ["Funded by IE NESL", "Currently operational as the Business Incubation Center"]
  },
  {
    title: "Monthly Tech Talk & Forum",
    description: "A recurring platform for knowledge sharing and technical discussions among professionals and students.",
    status: "Ongoing",
    icon: <Presentation className="w-6 h-6 text-ncit-blue" />,
    details: ["Jointly organized with the Jaffna Learning Forum."]
  },
  {
    title: "ICT Job Bank",
    description: "Creating a centralized repository and matching system for IT talent and employers in the Northern Province.",
    status: "In Progress",
    icon: <Briefcase className="w-6 h-6 text-ncit-blue" />,
    details: ["Platform development and initial data collection ongoing."]
  },
  {
    title: "Investor & Business Forums",
    description: "Future initiatives aimed at connecting local startups and SMEs with national and global investors.",
    status: "Planned",
    icon: <ArrowRight className="w-6 h-6 text-ncit-blue" />,
    details: ["Monthly Business Forum", "Annual Investor Forum"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-ncit-cloud min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-[#040D17] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Projects & Initiatives
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Discover how NCIT is actively developing the tech ecosystem through events, infrastructure, and capacity-building programs.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-ncit-blue/10 rounded-2xl flex items-center justify-center">
                      {project.icon}
                    </div>
                    {/* Status uses the site's one chip, not a per-status
                        colour. The previous version set a green, a blue and a
                        grey badge by hand, which broke the single accent rule
                        and left the "Completed" badge rendering white text on
                        a background class that never applied, so it read as
                        white on white. */}
                    <Chip tone={project.status === 'Completed' ? 'neutral' : 'accent'}>
                      {project.status}
                    </Chip>
                  </div>
                  <CardTitle className="text-xl font-bold text-ncit-ink leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-ncit-ink/70 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-6 border-t border-gray-50">
                  <ul className="space-y-2">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-ncit-ink/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-ncit-blue/50 mt-1.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-ncit-blue text-white rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-ncit-blue/20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 font-heading">Want to partner with us?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              We are always looking for organizations, sponsors, and individuals who want to collaborate on projects that uplift the Northern IT ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-ncit-blue hover:bg-gray-50 px-8 py-3.5 rounded-xl font-semibold transition-all shadow-md">
                Contact Us
              </Link>
              <Link href="/membership/apply" className="inline-flex items-center justify-center bg-ncit-blue border border-white/20 text-white hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition-all">
                Become a Member
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
