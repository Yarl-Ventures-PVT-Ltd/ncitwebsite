"use client";

import { motion } from "framer-motion";
import { Handshake, Store, Link as LinkIcon, Ship, Bell, Plane } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "B2B Introductions",
    description: "Trusted referrals and direct introductions between members, local enterprises, and national buyers."
  },
  {
    icon: <Store className="w-6 h-6" />,
    title: "Member Showcases",
    description: "Opportunities to present products and services at Chamber events, demo days, and through our digital directory."
  },
  {
    icon: <LinkIcon className="w-6 h-6" />,
    title: "National & Global Links",
    description: "Access to other regional chambers, industry associations (e.g., FITIS, SLASSCOM), and international trade bodies."
  },
  {
    icon: <Ship className="w-6 h-6" />,
    title: "Export Connections",
    description: "Facilitating connections with the diaspora network and international markets for software and BPM exports."
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: "Delegations & Missions",
    description: "Organized participation in national and international tech exhibitions, trade missions, and investor roadshows."
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Opportunity Alerts",
    description: "Curated alerts for public and private procurement tenders, grants, and strategic projects."
  }
];

export default function MarketPillars() {
  return (
    <section className="py-24 bg-ncit-cloud relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink mb-4">Market Access Channels</h2>
          <p className="text-ncit-ink/70">
            We provide structured avenues for members to expand their footprint locally and globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-ncit-cloud text-ncit-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-ncit-blue group-hover:text-white transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-ncit-ink mb-3 group-hover:text-ncit-blue transition-colors">{pillar.title}</h3>
              <p className="text-sm text-ncit-ink/70 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Opportunity Alerts Mock Data */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-ncit-ink mb-1">Latest Opportunities</h3>
              <p className="text-sm text-ncit-ink/60">Procurement and partnership alerts for NCIT members.</p>
            </div>
            <Link href="/portal" className="text-sm font-semibold text-ncit-blue hover:underline whitespace-nowrap">
              View All in Portal →
            </Link>
          </div>

          <div className="space-y-4">
            <div className="p-5 border border-gray-100 rounded-2xl hover:border-ncit-blue/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded mb-2">TENDER</span>
                  <h4 className="font-bold text-ncit-ink">Provincial Council E-Service Portal Development</h4>
                  <p className="text-sm text-ncit-ink/60 mt-1">Closing Date: Oct 15, 2026 • Requires active NCIT membership.</p>
                </div>
                <Link href="/portal" className="shrink-0 bg-gray-50 text-ncit-ink hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  View Details
                </Link>
              </div>
            </div>

            <div className="p-5 border border-gray-100 rounded-2xl hover:border-ncit-blue/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded mb-2">PARTNERSHIP</span>
                  <h4 className="font-bold text-ncit-ink">BPO Sub-Contracting Partner Wanted</h4>
                  <p className="text-sm text-ncit-ink/60 mt-1">Australian firm seeking 10-seat data processing team in Jaffna.</p>
                </div>
                <Link href="/portal" className="shrink-0 bg-gray-50 text-ncit-ink hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
