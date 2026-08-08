"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsImpact() {
  const projects = [
    {
      id: "nextwork",
      title: "NExTWORK 2023",
      category: "Ecosystem Summit",
      stat: "1,200+",
      statLabel: "Participants",
      desc: "The premier Northern technology conference connecting regional talent with national industry leaders.",
      color: "from-ncit-blue to-ncit-purple"
    },
    {
      id: "startup-incubator",
      title: "Startup Accelerator Phase I",
      category: "Innovation",
      stat: "15",
      statLabel: "Funded Startups",
      desc: "Seed funding and mentorship program for early-stage Northern tech founders in partnership with local banks.",
      color: "from-ncit-teal to-ncit-blue"
    },
    {
      id: "skills-dev",
      title: "Industry Readiness Program",
      category: "Talent Development",
      stat: "450+",
      statLabel: "Graduates Placed",
      desc: "Bridging the gap between academic curriculum and enterprise software engineering requirements.",
      color: "from-ncit-pink to-ncit-purple"
    }
  ];

  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-ncit-ink mb-6 font-heading tracking-tight">
            Projects & Impact
          </h2>
          <p className="text-lg md:text-xl text-ncit-ink/70 max-w-2xl mx-auto font-light">
            We measure our success by the tangible growth and opportunities created within the Northern ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Background Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${project.color} rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="glass-card relative h-full rounded-[2.5rem] p-8 flex flex-col overflow-hidden bg-white/60">
                <div className="mb-6 flex justify-between items-start">
                  <span className="text-sm font-semibold tracking-wider uppercase text-ncit-ink/50">
                    {project.category}
                  </span>
                  <Link href={`/projects/${project.id}`} className="p-2 bg-white/50 rounded-full hover:bg-ncit-blue hover:text-white transition-colors text-ncit-ink">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
                
                <h3 className="text-2xl font-bold font-heading text-ncit-ink mb-4">
                  {project.title}
                </h3>
                
                <p className="text-ncit-ink/70 font-light mb-8 flex-grow">
                  {project.desc}
                </p>
                
                <div className={`mt-auto pt-6 border-t border-ncit-ink/10`}>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-br from-ncit-ink to-ncit-ink/60">
                      {project.stat}
                    </span>
                    <span className="text-sm font-medium text-ncit-ink/60">
                      {project.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
