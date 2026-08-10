"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2026",
    title: "Chamber Relaunch & NExTWORK Expansion",
    description: "Launch of the modernized NCIT platform, strengthening advocacy and expanding the Northern digital ecosystem across all five districts.",
  },
  {
    year: "2021",
    title: "Digital Roadmap & Industry Engagements",
    description: "Collaborated with government and international stakeholders to outline a sustainable digital roadmap for the Northern Province post-pandemic.",
  },
  {
    year: "2020",
    title: "NExTWORK Initiative",
    description: "Introduced the NExTWORK program to foster tighter collaboration among tech professionals, startups, and established enterprises in the region.",
  },
  {
    year: "2019",
    title: "Community & Technology Programs",
    description: "Expanded outreach with community-driven tech programs, workshops, and skill-building sessions aimed at youth and early-stage professionals.",
  },
  {
    year: "2018",
    title: "Incubation Centre Established",
    description: "Set up the first dedicated IT incubation centre to support local startups with infrastructure, mentorship, and initial market access.",
  },
  {
    year: "2017",
    title: "Ecosystem Programs Kickoff",
    description: "Launched targeted ecosystem programs bridging the gap between academia and the IT industry, including the first official NCIT newsletter.",
  },
  {
    year: "2016",
    title: "Establishment of NCIT",
    description: "The Northern Chamber of Information Technology was formally established to represent and advocate for the growing tech sector in Northern Sri Lanka.",
  },
];

export default function HistoryTimeline() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div 
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${isEven ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Content Box */}
                    <div className={`md:w-1/2 ml-16 md:ml-0 ${isEven ? "md:pl-12" : "md:pr-12 text-left md:text-right"}`}>
                      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow">
                        <span className="inline-block px-3 py-1 bg-ncit-cloud text-ncit-blue text-sm font-bold rounded-lg mb-3">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-bold text-ncit-ink mb-2">{milestone.title}</h3>
                        <p className="text-ncit-ink/70 leading-relaxed text-sm">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full bg-ncit-blue transform -translate-x-1/2 mt-8 md:mt-0 shadow-[0_0_0_4px_rgba(255,255,255,1),0_0_0_6px_rgba(0,102,255,0.2)] z-10" />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
