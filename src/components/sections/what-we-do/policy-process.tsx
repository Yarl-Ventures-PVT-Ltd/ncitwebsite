"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, FileSearch, CheckSquare, Megaphone, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Member Input",
    description: "Issues are raised by members through the portal or committees."
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Working Groups",
    description: "Expert groups review the issue and draft potential solutions."
  },
  {
    icon: <FileSearch className="w-5 h-5" />,
    title: "Evidence Gathering",
    description: "Data and case studies are collected to build a robust argument."
  },
  {
    icon: <CheckSquare className="w-5 h-5" />,
    title: "Board Approval",
    description: "The formal position is reviewed and approved by the NCIT Board."
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Engagement",
    description: "NCIT engages stakeholders to implement the policy recommendations."
  }
];

export default function PolicyProcess() {
  return (
    <section className="py-24 bg-ncit-cloud relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink mb-6">How We Develop Positions</h2>
            <p className="text-ncit-ink/70 leading-relaxed mb-8">
              NCIT’s advocacy is driven strictly by member needs and backed by industry evidence. We do not lobby based on individual interests, but focus on systemic changes that benefit the entire Northern technology ecosystem.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 text-ncit-blue relative z-10">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-ncit-ink">{step.title}</h4>
                    <p className="text-sm text-ncit-ink/60">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10">
              <Link href="/portal" className="inline-flex items-center justify-center bg-ncit-blue text-white hover:bg-blue-600 px-6 py-3 text-sm font-medium rounded-xl shadow-md transition-all">
                Member Login to Contribute
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-ncit-ink mb-6">Current Consultations</h3>
            
            <div className="space-y-4">
              <div className="p-5 border border-blue-100 bg-blue-50/50 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1.5 h-full bg-ncit-blue" />
                <span className="inline-block px-2 py-1 bg-white text-ncit-blue text-xs font-bold rounded shadow-sm mb-3">OPEN FOR INPUT</span>
                <h4 className="font-bold text-ncit-ink mb-2">Jaffna IT Park Infrastructure Proposal</h4>
                <p className="text-sm text-ncit-ink/70 mb-3">Seeking feedback from local software exporters regarding facility requirements and connectivity needs.</p>
                <Link href="/portal" className="text-sm font-semibold text-ncit-blue hover:underline">Submit Feedback →</Link>
              </div>

              <div className="p-5 border border-gray-200 rounded-2xl">
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded mb-3">CLOSED</span>
                <h4 className="font-bold text-ncit-ink mb-2">National AI Strategy Response</h4>
                <p className="text-sm text-ncit-ink/70 mb-3">Consultation closed. Document is currently under Board review.</p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-bold text-ncit-ink mb-4">Published Submissions</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-sm font-medium text-ncit-blue hover:underline flex items-center">
                    <FileSearch className="w-4 h-4 mr-2 opacity-70" />
                    2024 Pre-Budget Submission (Digital Economy)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm font-medium text-ncit-blue hover:underline flex items-center">
                    <FileSearch className="w-4 h-4 mr-2 opacity-70" />
                    Response to Data Protection Authority Draft Rules
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
