"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Handshake, Globe, Briefcase, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "Credibility & Visibility",
    description: "Gain trust with the verified NCIT Member badge and showcase your expertise in the regional directory."
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Business Connections",
    description: "Expand your network through B2B introductions, referrals, and member-only networking events."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Advocacy & Policy",
    description: "Shape the regional technology landscape by contributing to industry policies and working groups."
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Market Access",
    description: "Discover investor partnerships, trade missions, and curated opportunities for local and export markets."
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Knowledge & Capacity",
    description: "Access expert sessions, technology guidance, exclusive reports, and capacity-building resources."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Talent & Community",
    description: "Connect with local talent through job postings and engage with a vibrant professional community."
  }
];

export default function WhyJoin() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink mb-4">Why Join NCIT?</h2>
          <p className="text-ncit-ink/70">
            Membership is designed to create real opportunity. We combine credibility, connections, industry voice, and practical support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-ncit-blue/30 transition-all group"
            >
              <div className="w-12 h-12 bg-ncit-cloud text-ncit-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-ncit-blue group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-ncit-ink mb-3 group-hover:text-ncit-blue transition-colors">{benefit.title}</h3>
              <p className="text-sm text-ncit-ink/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/membership/benefits" className="inline-flex items-center text-sm font-semibold text-ncit-blue hover:underline">
            View detailed benefit breakdown →
          </Link>
        </div>
        
      </div>
    </section>
  );
}
