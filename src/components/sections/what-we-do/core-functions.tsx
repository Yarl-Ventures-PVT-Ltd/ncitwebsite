"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Briefcase, Handshake, GraduationCap, Lightbulb, Users, FileCheck } from "lucide-react";

const functions = [
  {
    title: "Advocacy & Policy",
    description: "Industry representation, evidence-based policy, consultations, and addressing collective issues.",
    icon: <ShieldAlert className="w-6 h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    title: "Business & Market Access",
    description: "Referrals, showcases, B2B introductions, and expanding national and global connections.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    title: "Investment & Partnerships",
    description: "Trusted local facilitation for investors, venture capitalists, and development partners.",
    icon: <Handshake className="w-6 h-6" />,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    title: "Skills & Capacity",
    description: "Member and talent development, expert sessions, setting standards, and professional growth.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    title: "Startups & Innovation",
    description: "Supporting the founder ecosystem, incubation/acceleration partnerships, and ensuring startup exposure.",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    title: "Events & Community",
    description: "Hosting forums, summits, roundtables, tech talks, and driving active district engagement.",
    icon: <Users className="w-6 h-6" />,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    title: "Member Standards & Support",
    description: "Ensuring credibility, mediating issues, and upholding rigorous professional conduct.",
    icon: <FileCheck className="w-6 h-6" />,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  }
];

export default function CoreFunctions() {
  return (
    <section className="py-24 bg-ncit-cloud relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink tracking-tight mb-4">Core Functions</h2>
          <div className="w-12 h-1 bg-ncit-blue rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-ncit-ink/70 font-light">
            Our strategic pillars designed to support members, attract investment, and build a resilient Northern tech ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {functions.map((fn, index) => (
            <motion.div
              key={fn.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-8 rounded-3xl bg-white border ${fn.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col`}
            >
              <div className={`w-14 h-14 rounded-2xl ${fn.bg} ${fn.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {fn.icon}
              </div>
              <h3 className="text-xl font-bold text-ncit-ink mb-3">{fn.title}</h3>
              <p className="text-ncit-ink/70 font-light leading-relaxed flex-1">
                {fn.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
