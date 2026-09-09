import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Download, FileArchive, Mic, Newspaper, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Resources & Downloads | NCIT',
  description: 'Access important documents, forms, newsletters, and speeches from the Northern Chamber of Information Technology.',
};

const resourceCategories = [
  {
    title: "Membership Documents",
    icon: <FileText className="w-6 h-6 text-ncit-blue" />,
    items: [
      { name: "NCIT Membership Form (English)", date: "Mar 2017", link: "/wp-content/uploads/2017/03/NCIT_Membership_Form.pdf", type: "PDF" },
      { name: "NCIT Membership Form (Tamil)", date: "Mar 2017", link: "/wp-content/uploads/2017/03/NCIT_membership_tamil.pdf", type: "PDF" },
      { name: "ITSME Notice", date: "Feb 2019", link: "/wp-content/uploads/2019/02/ITSMENotice.pdf", type: "PDF" },
    ]
  },
  {
    title: "Project Proposals & Formats",
    icon: <FileArchive className="w-6 h-6 text-ncit-blue" />,
    items: [
      { name: "Project Proposal Format - ASSET ICT Zone 1", date: "May 2018", link: "/wp-content/uploads/2018/05/Format-Project-Proposal-ASSET-ICT-Zone1.docx", type: "DOCX" },
      { name: "Project Proposal Format - ASSET ICT Zone 2", date: "May 2018", link: "/wp-content/uploads/2018/05/Format-Project-Proposal-ASSET-ICT-Zone2.docx", type: "DOCX" },
    ]
  },
  {
    title: "Newsletters & Brochures",
    icon: <Newspaper className="w-6 h-6 text-ncit-blue" />,
    items: [
      { name: "NCIT Newsletter", date: "Jan 2017", link: "/wp-content/uploads/2017/01/News-letter.pdf", type: "PDF" },
      { name: "NCIT General Brochure", date: "Jun 2016", link: "/wp-content/uploads/2016/06/brocher.pdf", type: "PDF" },
    ]
  },
  {
    title: "Speeches & Presentations",
    icon: <Mic className="w-6 h-6 text-ncit-blue" />,
    items: [
      { name: "Nextwork 2020 - Angajan Speech", date: "Feb 2020", link: "/wp-content/uploads/2020/02/Nextwork2020-angajanSpeech.pdf", type: "PDF" },
      { name: "NextWork 2020 - Thavaruban Speech", date: "Feb 2020", link: "/wp-content/uploads/2020/02/NextWork2020ThavarubanSpeech.pdf", type: "PDF" },
      { name: "Thavaruban Speech", date: "Jun 2018", link: "/wp-content/uploads/2018/06/Thavaruban-Speach26062018.pdf", type: "PDF" },
    ]
  },
  {
    title: "Useful Links",
    icon: <LinkIcon className="w-6 h-6 text-ncit-blue" />,
    items: [
      { name: "Ministry of Finance - Treasury", date: "Government", link: "http://treasury.gov.lk/", type: "LINK" },
      { name: "Sri Lanka Export Development Board", date: "Government", link: "http://www.edb.gov.lk/", type: "LINK" },
      { name: "ICT Agency of Sri Lanka (ICTA)", date: "Government", link: "http://www.icta.lk/", type: "LINK" },
      { name: "Department for Registration of Companies", date: "Government", link: "http://www.drc.gov.lk/", type: "LINK" },
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div className="bg-ncit-cloud min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-[#040D17] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ncit-blue/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Resources & Downloads
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Access important documents, membership forms, historical newsletters, and keynote speeches related to the Northern Chamber of Information Technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-ncit-ink/5">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-12 h-12 bg-ncit-blue/10 rounded-2xl flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-ncit-ink font-heading">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="border-gray-100 shadow-sm hover:border-ncit-blue/30 hover:shadow-md transition-all duration-300 h-full">
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-start gap-4">
                            <div className="mt-1">
                              {item.type === 'PDF' ? (
                                <FileText className="w-8 h-8 text-red-500/80 group-hover:text-red-500 transition-colors" />
                              ) : (
                                <FileArchive className="w-8 h-8 text-blue-500/80 group-hover:text-blue-500 transition-colors" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-semibold text-ncit-ink group-hover:text-ncit-blue transition-colors line-clamp-2">
                                {item.name}
                              </h3>
                              <p className="text-xs text-ncit-ink/50 mt-1">
                                {item.type} • {item.date}
                              </p>
                            </div>
                          </div>
                          <div className="shrink-0 bg-gray-50 p-2 rounded-full text-ncit-ink/40 group-hover:text-ncit-blue group-hover:bg-ncit-blue/10 transition-all duration-300">
                            <Download className="w-4 h-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Missing Info CTA */}
            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 shadow-xl shadow-blue-900/5 text-center mt-12">
              <h2 className="text-xl font-bold text-ncit-ink mb-4 font-heading">Looking for something else?</h2>
              <p className="text-ncit-ink/70 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
                If you cannot find the document you are looking for, please contact our secretariat.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="bg-white border-blue-200 text-ncit-blue hover:bg-blue-100 hover:text-ncit-ink">
                  Contact Support
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
