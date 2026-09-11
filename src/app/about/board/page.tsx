import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Globe } from 'lucide-react';
import PreviousBoards from '@/components/sections/about/previous-boards';
import { pageMetadata } from "@/lib/seo";
import { ActionLink } from '@/components/ui/action';

export const metadata: Metadata = pageMetadata({
  title: "Board of Directors",
  socialTitle: "Board of Directors",
  description: "The nine directors and office bearers elected to lead the Northern Chamber of Information Technology for the 2026 to 2027 term.",
  path: "/about/board",
});

const boardMembers = [
  {
    name: "Mr. Sugeevan Vettivelautham",
    role: "Co-Chairman",
    company: "EDUS, MediMan & Yarl Ventures",
    isExecutive: true,
  },
  {
    name: "Mr. Shathvithan Thangaraja",
    role: "Co-Chairman",
    company: "Sun Microcreators",
    isExecutive: true,
  },
  {
    name: "Mr. Shanmugarajah Nadarajah",
    role: "Director – Administration",
    company: "Loncey Tech",
    isExecutive: true,
  },
  {
    name: "Mr. Prasanth Subendran",
    role: "Financial Director",
    company: "3AxisLabs",
    isExecutive: true,
  },
  {
    name: "Mr. Robinson B Prashanthan",
    role: "Director",
    company: "Innovay",
  },
  {
    name: "Mr. Sharmmhik Yogarajah",
    role: "Director",
    company: "Business Network System (BNS)",
  },
  {
    name: "Mr. Thangarajah Thavaruban",
    role: "Director",
    company: "Speed IT Net",
  },
  {
    name: "Mr. Kanesh Venugoban",
    role: "Director",
    company: "College of ICT",
  },
  {
    name: "Miss. Nivetha",
    role: "Director",
    company: "UNITEC – University of Technology",
  }
];

export default function BoardPage() {
  const executives = boardMembers.filter(m => m.isExecutive);
  const directors = boardMembers.filter(m => !m.isExecutive);

  return (
    <div className="bg-ncit-cloud min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-[#040D17] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Board of Directors
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Meet the leadership team (2026/2027) guiding the vision and strategy of the Northern Chamber of Information Technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ncit-ink mb-8 font-heading">Executive Committee</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {executives.map((member, index) => (
                <Card key={index} className="border-0 shadow-lg shadow-ncit-ink/5 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <Badge variant="secondary" className="w-fit mb-3 bg-ncit-blue/10 text-ncit-blue hover:bg-ncit-blue/20">
                      {member.role}
                    </Badge>
                    <CardTitle className="text-xl font-bold text-ncit-ink">
                      {member.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-ncit-ink/60 text-sm mb-4">{member.company}</p>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-ncit-blue hover:bg-ncit-blue/10 transition-colors cursor-pointer">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-ncit-blue hover:bg-ncit-blue/10 transition-colors cursor-pointer">
                        <Mail className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-ncit-ink mb-8 font-heading">Board of Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {directors.map((member, index) => (
                <Card key={index} className="border border-gray-100 shadow-md shadow-ncit-ink/5 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-ncit-ink">
                      {member.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-ncit-ink/60 text-sm mb-4">{member.company}</p>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-ncit-blue hover:bg-ncit-blue/10 transition-colors cursor-pointer">
                        <Globe className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* A "Professional Partners" panel stood here naming Peninsula
              Consultants as the chamber's auditors and NDB Jaffna as its
              bankers. Peninsula Consultants appears nowhere in anything NCIT
              has published, and the only NDB-adjacent string in the archive is
              "HNB Jaffna Auditorium", a venue and a different bank.

              NCIT's own AGM record of 23 February 2019 names the auditors as
              JA Partners and the company secretary as Abaya Law firm (Pvt)
              Ltd. Those are correctly recorded against the 2018/2019 term in
              previous-boards.tsx. Who audits the 2026/2027 board is not
              published anywhere on this site, so naming anyone here would be a
              guess. Restore the panel when NCIT confirms the current firms.

              The links below replace it, because the page previously ended
              with no route onward at all. */}
          <div className="rounded-lg border border-ncit-line bg-ncit-surface p-6 md:p-8">
            <h3 className="text-base font-semibold text-ncit-ink">How the board is constituted</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ncit-ink-2">
              Directors are elected by the membership at the annual general meeting, and the board appoints its
              office bearers. The rules governing elections, terms and meetings are set out in the chamber bylaws.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <ActionLink href="/about/governance/bylaws" variant="primary" withArrow>
                Read the bylaws
              </ActionLink>
              <ActionLink href="/press" variant="secondary">
                AGM announcements
              </ActionLink>
            </div>
          </div>

        </div>
      </section>

      <PreviousBoards />
    </div>
  );
}
