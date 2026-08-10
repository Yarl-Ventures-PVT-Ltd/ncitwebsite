"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2016",
    title: "Establishment & Early Activities",
    description: "NCIT was officially established on 22 February 2016 (Registration GL2441) to begin foundational startup activities and unite the technology ecosystem."
  },
  {
    year: "2017 - 2018",
    title: "Ecosystem Programs",
    description: "Launched key ecosystem-building programs and partnerships to strengthen the regional IT community."
  },
  {
    year: "2018",
    title: "Incubation Centre",
    description: "Setup of the initial incubation centre to support early-stage founders and tech initiatives."
  },
  {
    year: "2019",
    title: "Community & Technology Programs",
    description: "Expanded outreach with community-focused technology programs across multiple districts."
  },
  {
    year: "2020",
    title: "NExTWORK",
    description: "Initiated the NExTWORK program and adapted to global changes to maintain ecosystem momentum."
  },
  {
    year: "2021",
    title: "Digital Roadmap & Industry Engagements",
    description: "Focused on formalizing a digital roadmap and expanding high-level industry engagements."
  },
  {
    year: "2026",
    title: "Chamber Relaunch",
    description: "Major structural relaunch with a modernized digital platform, expanded strategic objectives, and reinforced regional unity."
  }
];

export default function HistoryTimeline() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink tracking-tight mb-4">Our Journey</h2>
          <div className="w-12 h-1 bg-ncit-blue rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-ncit-ink/70 font-light">
            A decade of building the Northern technology ecosystem, milestone by milestone.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-ncit-blue/20 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-ncit-blue shadow-[0_0_0_4px_white,0_0_0_8px_rgba(37,99,235,0.2)] -translate-x-1/2 z-10"></div>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-ncit-blue/10 text-ncit-blue font-bold text-sm tracking-widest mb-4">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-ncit-ink mb-3">{milestone.title}</h3>
                      <p className="text-ncit-ink/70 font-light leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
