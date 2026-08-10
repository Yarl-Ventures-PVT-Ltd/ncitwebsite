"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Network, Scale, LineChart, BookOpen, UserPlus, Gift, Users } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Credibility & Visibility",
    items: [
      "Official NCIT Member Verified Badge",
      "Listing in the public Member Directory",
      "Opportunity to host Member Showcases",
      "Media and PR amplifications through NCIT channels"
    ]
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Business Connections",
    items: [
      "Direct B2B introductions and matchmaking",
      "Access to inter-district tech chapters",
      "Invitations to exclusive networking mixers",
      "Referrals for local enterprise tech needs"
    ]
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Advocacy & Policy",
    items: [
      "Input on national IT policy and budget submissions",
      "Participation in specialized Working Groups",
      "Voting rights at the Annual General Meeting (Full Members)",
      "Direct channel to regional government authorities"
    ]
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Market Access & Investment",
    items: [
      "Investor and partner discovery",
      "Subsidized booths at national tech exhibitions",
      "Participation in international trade missions",
      "Curated alerts for procurement and tenders"
    ]
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Knowledge & Capacity",
    items: [
      "Access to closed-door expert masterclasses",
      "Discounts on professional certification training",
      "Early access to the Northern Tech Ecosystem Report",
      "Technology adoption guidance for non-tech businesses"
    ]
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Talent & Careers",
    items: [
      "Free job postings on the NCIT Talent Portal",
      "Direct access to university internship programs",
      "Engagement with student tech chapters",
      "Employer branding opportunities"
    ]
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Member-Only Programs",
    items: [
      "Discounts on software licenses (partner offers)",
      "Subsidized rates at partner coworking spaces",
      "Access to standard legal/contract templates",
      "Cloud hosting credits (subject to availability)"
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community & Leadership",
    items: [
      "Eligibility to run for the Board of Directors (Full Members)",
      "Leadership roles in district sub-committees",
      "Opportunities to speak at NCIT events",
      "Mentorship matching program"
    ]
  }
];

export default function BenefitPillars() {
  return (
    <section className="py-24 bg-ncit-cloud relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink mb-4">The Value of Membership</h2>
          <p className="text-ncit-ink/70">
            We provide a comprehensive suite of benefits designed to support tech companies, professionals, and the wider ecosystem at every stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-ncit-blue/30 transition-all flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-ncit-cloud text-ncit-blue rounded-xl flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-ncit-ink mb-4">{pillar.title}</h3>
              <ul className="space-y-3 flex-grow">
                {pillar.items.map((item, i) => (
                  <li key={i} className="text-sm text-ncit-ink/70 flex items-start">
                    <span className="text-ncit-blue mr-2 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
