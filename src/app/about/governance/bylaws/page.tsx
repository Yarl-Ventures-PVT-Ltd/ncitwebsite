import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollText, Users, Building, Briefcase, Target } from 'lucide-react';
import Link from 'next/link';
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bylaws and Constitution",
  socialTitle: "Bylaws and Constitution",
  description: "The chamber's constitution: membership classes, the board, elections, general meetings and the rules NCIT is run by.",
  path: "/about/governance/bylaws",
});

export default function BylawsPage() {
  return (
    <div className="bg-ncit-cloud min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-[#040D17] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Link href="/about/governance" className="inline-block py-1 text-sm font-semibold text-white/80 transition-colors hover:text-white">
              &larr; Back to Governance
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading flex items-center gap-4">
              <ScrollText className="w-12 h-12 text-white/70" />
              NCIT Bylaws
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              The official rules and regulations governing the operations, structure, and membership of the Northern Chamber of Information Technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* 1. Introduction */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-ncit-ink/5">
              <h2 className="text-2xl font-bold text-ncit-ink mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ncit-blue/10 text-ncit-blue text-sm font-bold">1</span>
                Introduction
              </h2>
              <p className="text-ncit-ink/70 leading-relaxed mb-4">
                Northern Chamber of Information Technology (NCIT) is the gateway to the information technology market and industry in the Northern Part of Sri Lanka.
              </p>
              <p className="text-ncit-ink/70 leading-relaxed">
                Hereafter the Northern Chamber of Information Technology is referred to as the <strong>&ldquo;Chamber&rdquo;</strong>.
              </p>
            </div>

            {/* 3. Membership */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-ncit-ink/5">
              <h2 className="text-2xl font-bold text-ncit-ink mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ncit-blue/10 text-ncit-blue text-sm font-bold">3</span>
                Membership
              </h2>
              <p className="text-ncit-ink/70 leading-relaxed mb-6">
                Membership is categorized into 6 types and the Applicant&rsquo;s main business activity/core business should be in ICT.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-ncit-ink mb-2">1. Full Membership</h3>
                    <p className="text-sm text-ncit-ink/60">Registered/Approved IT organizations with Head Office in Northern Province.</p>
                  </CardContent>
                </Card>
                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-ncit-ink mb-2">2. Offshore Membership</h3>
                    <p className="text-sm text-ncit-ink/60">Offshore companies who have a branch office in the Northern Province.</p>
                  </CardContent>
                </Card>
                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-ncit-ink mb-2">3. Association Membership</h3>
                    <p className="text-sm text-ncit-ink/60">Non-Profit Organizations from the Northern Province.</p>
                  </CardContent>
                </Card>
                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-ncit-ink mb-2">4. Professional Individual</h3>
                    <p className="text-sm text-ncit-ink/60">Individual IT experts, Academics, and Consultants.</p>
                  </CardContent>
                </Card>
                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-ncit-ink mb-2">5. Freelancer Membership</h3>
                    <p className="text-sm text-ncit-ink/60">Freelancers and unregistered/virtual companies.</p>
                  </CardContent>
                </Card>
                <Card className="border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-ncit-ink mb-2">6. Student Membership</h3>
                    <p className="text-sm text-ncit-ink/60">Students over 18 years old currently studying IT.</p>
                  </CardContent>
                </Card>
              </div>

              <ul className="list-disc pl-6 space-y-3 text-ncit-ink/70">
                <li>Membership period starts in April of every year and must be renewed yearly.</li>
                <li>Membership fee is determined by the Chamber&rsquo;s Board from time to time.</li>
              </ul>
            </div>

            {/* 4. Board */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-ncit-ink/5">
              <h2 className="text-2xl font-bold text-ncit-ink mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ncit-blue/10 text-ncit-blue text-sm font-bold">4</span>
                Board
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-ncit-ink/70 mb-8">
                <li>Board members must have full membership.</li>
                <li>No proxy allowed for board meetings/representation.</li>
                <li>The Board contains 9 Members.</li>
                <li>The Board will select a Chairman, Vice Chairman, and Financial Director from the Board, and appoint sub-committees according to needs.</li>
                <li>The Board may appoint a CEO, Accountant, and Staff for execution.</li>
                <li>The Chamber may have a Secretariat.</li>
                <li>The Board meeting Quorum is 5.</li>
                <li>A Board member should not be in an Executive committee of the same objective regional organization where that organization is not partnered with NCIT.</li>
              </ul>

              <h3 className="font-bold text-ncit-ink mb-4">Proposed Composition for Board&rsquo;s 9 members:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-ncit-blue mb-1">3</div>
                  <div className="text-xs font-semibold text-ncit-ink/60 uppercase">Tech & Dev</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-ncit-blue mb-1">2</div>
                  <div className="text-xs font-semibold text-ncit-ink/60 uppercase">Hardware & Net</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-ncit-blue mb-1">2</div>
                  <div className="text-xs font-semibold text-ncit-ink/60 uppercase">Edu & Training</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-ncit-blue mb-1">2</div>
                  <div className="text-xs font-semibold text-ncit-ink/60 uppercase">Service & Forum</div>
                </div>
              </div>
            </div>

            {/* Other Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 5. Removal */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-ncit-ink/5">
                <h2 className="text-xl font-bold text-ncit-ink mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-ncit-blue/10 text-ncit-blue text-xs font-bold">5</span>
                  Removal / Replacing
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm text-ncit-ink/70">
                  <li>If a Board member resigns from the board, it will be considered a vacancy.</li>
                  <li>Vacancies can be filled only in a followed Chamber General Meeting by getting majority votes.</li>
                  <li>Removal or replacing of a Board member can be done only in the Chamber AGM.</li>
                </ul>
              </div>

              {/* 6. Finance */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-ncit-ink/5">
                <h2 className="text-xl font-bold text-ncit-ink mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-ncit-blue/10 text-ncit-blue text-xs font-bold">6</span>
                  Finance
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm text-ncit-ink/70">
                  <li>A separate Bank Account should be maintained for the Chamber; its financial activities should be controlled by the Board.</li>
                  <li>The Chairman and Financial Director should sign for withdrawals from Banks and on Cheques.</li>
                </ul>
              </div>
            </div>

            {/* 7. Infrastructure & 8. Sectors */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-ncit-ink/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-ncit-ink mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ncit-blue/10 text-ncit-blue text-sm font-bold">7</span>
                    Infrastructure
                  </h2>
                  <p className="text-ncit-ink/70 text-sm mb-4">The Chamber consists of the following sections:</p>
                  <ul className="space-y-3 text-sm text-ncit-ink/70">
                    <li className="flex items-start gap-2"><Building className="w-4 h-4 text-ncit-blue shrink-0 mt-0.5" /> Board of Directors (9 full members)</li>
                    <li className="flex items-start gap-2"><Users className="w-4 h-4 text-ncit-blue shrink-0 mt-0.5" /> Advisory Board (Uni: 2, Tech: 1, Legal: 1, Finance: 1)</li>
                    <li className="flex items-start gap-2"><Users className="w-4 h-4 text-ncit-blue shrink-0 mt-0.5" /> General Body (All Members)</li>
                    <li className="flex items-start gap-2"><Briefcase className="w-4 h-4 text-ncit-blue shrink-0 mt-0.5" /> Investor Board with Foreign Members</li>
                    <li className="flex items-start gap-2"><Users className="w-4 h-4 text-ncit-blue shrink-0 mt-0.5" /> Freelancer Chapter</li>
                    <li className="flex items-start gap-2"><Users className="w-4 h-4 text-ncit-blue shrink-0 mt-0.5" /> Student Chapter</li>
                    <li className="flex items-start gap-2"><Users className="w-4 h-4 text-ncit-blue shrink-0 mt-0.5" /> Sub Committees (2 Board + 3 General Body)</li>
                    <li className="flex items-start gap-2"><Briefcase className="w-4 h-4 text-ncit-blue shrink-0 mt-0.5" /> ICT Job Bank</li>
                    <li className="flex items-start gap-2"><Building className="w-4 h-4 text-ncit-blue shrink-0 mt-0.5" /> Secretariat (CEO, Accountant, Staff)</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-ncit-ink mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ncit-blue/10 text-ncit-blue text-sm font-bold">8</span>
                    Core Sectors
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-4 py-2 bg-gray-50 text-ncit-ink font-medium rounded-lg text-sm border border-gray-100">Software</div>
                    <div className="px-4 py-2 bg-gray-50 text-ncit-ink font-medium rounded-lg text-sm border border-gray-100">Service</div>
                    <div className="px-4 py-2 bg-gray-50 text-ncit-ink font-medium rounded-lg text-sm border border-gray-100">Hardware</div>
                    <div className="px-4 py-2 bg-gray-50 text-ncit-ink font-medium rounded-lg text-sm border border-gray-100">Training</div>
                    <div className="px-4 py-2 bg-gray-50 text-ncit-ink font-medium rounded-lg text-sm border border-gray-100">Communication</div>
                  </div>

                  <h2 className="text-2xl font-bold text-ncit-ink mb-4 mt-12 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ncit-blue/10 text-ncit-blue text-sm font-bold">11</span>
                    Amendments
                  </h2>
                  <p className="text-ncit-ink/70 text-sm">
                    Amendments to Bylaws can be made with a 2/3 vote in the Annual General Meeting (AGM).
                  </p>
                </div>
              </div>
            </div>

            {/* 9. Objectives */}
            <div className="bg-ncit-blue text-white rounded-3xl p-8 md:p-12 shadow-xl shadow-ncit-blue/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-white/80" />
                Objectives
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/90">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mt-1.5"></span> Create opportunities for all members.</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mt-1.5"></span> Working for mutual benefit.</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mt-1.5"></span> Standardizing Service Quality and Policies in the North.</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mt-1.5"></span> Improving the quality of member organizations for global markets.</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mt-1.5"></span> Encourage foreign, national, and North-East investments.</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mt-1.5"></span> Creating career opportunities in the North.</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mt-1.5"></span> Providing technical assistance & consultations.</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mt-1.5"></span> Creating links with local, national, and global organizations.</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mt-1.5"></span> Helping grow start-ups in the Northern Province.</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mt-1.5"></span> Contributing to regional development.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
