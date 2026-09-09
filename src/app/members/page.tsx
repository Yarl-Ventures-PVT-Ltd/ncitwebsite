import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Building2, Users, User, Rocket, Globe } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: "/members" },
  title: "Member Directory",
  description: 'Directory of all registered members of the Northern Chamber of Information Technology.',
};

const memberCategories = [
  {
    title: "Category I (Full Members)",
    icon: <Building2 className="w-5 h-5" />,
    members: [
      { name: "Speed IT net", link: "http://en.speeditnet.com/" },
      { name: "Innovay", link: "http://www.innovay.com/" },
      { name: "MCS IT Campus", info: "ICT Education", link: "http://www.mcsitcampus.com/" },
      { name: "College of ICT", info: "ICT Education", link: "http://www.cictjaffna.com/" },
      { name: "Business Network System", link: null },
      { name: "Iconic Coder", link: "http://iconiccoder.com/" },
      { name: "Kale Systems", link: "http://www.kalesystems.com/" },
      { name: "ePixcell Solutions", link: "http://epixcell.com/" },
      { name: "Sun Microcreators(Pte) Ltd", link: "https://algoinn.com/" },
      { name: "ezBooking", link: "http://www.ezbooking.io/" },
      { name: "AppsLanka", link: "http://appslanka.lk/" },
      { name: "Loncey Tech", link: "https://lonceytech.com/" },
      { name: "3axislabs", link: "https://3axislabs.com/" },
      { name: "Apptimus Tech", link: "https://apptimustech.com/" },
      { name: "UNITEC Campus", link: "https://unitec.edu.lk/" },
    ]
  },
  {
    title: "Category II",
    icon: <Building2 className="w-5 h-5" />,
    members: [
      { name: "DMI Computer Education", info: "ICT Education", link: "http://itdmi.com/" },
      { name: "Apex of Computer Technology", link: null },
      { name: "Winsoft Technology", link: "https://www.facebook.com/winsoftlk/" },
      { name: "UMK Web Design", link: "http://umkwebdesign.com/" },
      { name: "Yazhi Innovations (private) Limited", link: "http://www.yazhii.net/" },
      { name: "Future Clicks Pvt Ltd", link: "http://www.futureclicks.lk/" },
      { name: "Evergreen Buzz", link: null },
      { name: "AKAMATHI Group", link: "http://www.akamathi.com/" },
      { name: "Infonits", link: "https://infonits.io/" },
    ]
  },
  {
    title: "Category III (Associations)",
    icon: <Users className="w-5 h-5" />,
    description: "All members of Associate members will be NCIT Ordinary Members",
    members: [
      { name: "MANFICT", info: "Mannar Federation of Information Communication Technology", link: "https://www.facebook.com/manfict/" },
      { name: "VICTA", info: "Vavuniya Information & Communication Association", link: "http://www.victa.org/" },
      { name: "Aaruthal", link: "http://www.aaruthal.lk/" },
    ]
  },
  {
    title: "Category IV (Individuals)",
    icon: <User className="w-5 h-5" />,
    members: [
      { name: "S. Garigaraganapathy", info: "Head, IT, ATI Jaffna", link: null },
      { name: "T. Lenin Arivalakan", info: "Dep of Education, NP", link: null },
    ]
  },
  {
    title: "Category V (Offshore)",
    icon: <Globe className="w-5 h-5" />,
    members: [
      { name: "Micro PC Systems", link: "http://www.micropcsystems.com/" },
      { name: "Ceymplon", link: "http://www.ceymplon.lk/" },
      { name: "IDM Nations Campus", link: "http://www.idmedu.lk/" },
    ]
  },
  {
    title: "Category VI (Startup)",
    icon: <Rocket className="w-5 h-5" />,
    members: [
      { name: "Mithu IT Solutions", link: null },
    ]
  }
];

export default function MembersDirectoryPage() {
  return (
    <div className="bg-ncit-cloud min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-[#040D17] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ncit-purple/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Member Directory
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Explore our growing network of over 40+ IT organizations, startups, associations, and professionals driving the digital economy in the Northern Province.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {memberCategories.map((category, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-ncit-blue">
                    {category.icon}
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
                            className="inline-flex items-center gap-2 text-sm text-ncit-blue mt-4 font-medium opacity-80 hover:opacity-100"
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

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center shadow-inner mt-12">
              <p className="text-ncit-ink/70 font-medium">
                We are currently reviewing new applications. The final member list will be updated regularly. 
                For feedback or inquiries, contact us at <a href="mailto:hello@ncit.lk" className="text-ncit-blue hover:underline">hello@ncit.lk</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
