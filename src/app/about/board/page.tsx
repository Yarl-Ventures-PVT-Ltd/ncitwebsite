import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Globe } from 'lucide-react';
import PreviousBoards from '@/components/sections/about/previous-boards';

export const metadata: Metadata = {
  title: 'Board of Directors | NCIT',
  description: 'Meet the dedicated leadership team driving the Northern Chamber of Information Technology.',
};

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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ncit-blue/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
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

          {/* Professional Partners */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-ncit-ink/5">
            <h3 className="text-2xl font-bold text-ncit-ink mb-8 font-heading text-center">Professional Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
              <div>
                <p className="text-ncit-ink/50 text-sm font-medium uppercase tracking-wider mb-2">Auditors</p>
                <p className="text-xl font-semibold text-ncit-ink">Peninsula Consultants</p>
              </div>
              <div>
                <p className="text-ncit-ink/50 text-sm font-medium uppercase tracking-wider mb-2">Bankers</p>
                <p className="text-xl font-semibold text-ncit-ink">NDB Jaffna</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <PreviousBoards />
    </div>
  );
}
