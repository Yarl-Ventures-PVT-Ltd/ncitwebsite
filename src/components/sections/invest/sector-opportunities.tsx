"use client";

import { motion } from "framer-motion";
import { Code2, Headphones, BrainCircuit, ShieldCheck, Cloud, BookOpen, HeartPulse, Smartphone, Monitor, GraduationCap } from "lucide-react";

const sectors = [
  { name: "Software & Product Engineering", icon: <Code2 className="w-5 h-5" /> },
  { name: "IT & BPM Services", icon: <Headphones className="w-5 h-5" /> },
  { name: "AI & Data Science", icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "Cybersecurity", icon: <ShieldCheck className="w-5 h-5" /> },
  { name: "Cloud & Networking", icon: <Cloud className="w-5 h-5" /> },
  { name: "Education Technology", icon: <BookOpen className="w-5 h-5" /> },
  { name: "Health Technology", icon: <HeartPulse className="w-5 h-5" /> },
  { name: "Digital Services", icon: <Smartphone className="w-5 h-5" /> },
  { name: "Hardware & IoT", icon: <Monitor className="w-5 h-5" /> },
  { name: "Specialized Training", icon: <GraduationCap className="w-5 h-5" /> }
];

export default function SectorOpportunities() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-ncit-ink tracking-tight mb-4"
          >
            Sector Opportunities
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-1 bg-ncit-blue rounded-full mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-ncit-ink/70 font-light"
          >
            The region presents diverse investment and partnership prospects across multiple specialized verticals within the technology sector.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="p-6 rounded-2xl bg-ncit-cloud hover:bg-ncit-ink hover:text-white transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default"
            >
              <div className="text-ncit-blue group-hover:text-white group-hover:scale-110 transition-all mb-4">
                {sector.icon}
              </div>
              <h3 className="font-medium text-sm md:text-base text-ncit-ink group-hover:text-white transition-colors">
                {sector.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
