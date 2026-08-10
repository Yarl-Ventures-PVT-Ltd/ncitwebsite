"use client";

import { motion } from "framer-motion";
import { Code2, Monitor, Cpu, Network, Lightbulb, Briefcase, GraduationCap, Server } from "lucide-react";

const sectors = [
  { name: "Software Development", icon: <Code2 className="w-5 h-5" />, count: 48 },
  { name: "IT Services & BPO", icon: <Briefcase className="w-5 h-5" />, count: 32 },
  { name: "Hardware & Systems", icon: <Monitor className="w-5 h-5" />, count: 24 },
  { name: "Training & Education", icon: <GraduationCap className="w-5 h-5" />, count: 18 },
  { name: "AI & Emerging Tech", icon: <Lightbulb className="w-5 h-5" />, count: 12 },
  { name: "Telecommunications", icon: <Network className="w-5 h-5" />, count: 9 },
  { name: "Cloud & Infrastructure", icon: <Server className="w-5 h-5" />, count: 14 },
  { name: "Electronics & IoT", icon: <Cpu className="w-5 h-5" />, count: 7 },
];

export default function SectorExplorer() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-bold text-ncit-ink tracking-tight mb-4">Explore by Sector</h2>
            <div className="w-12 h-1 bg-ncit-blue rounded-full mb-6"></div>
            <p className="text-lg text-ncit-ink/70 font-light">
              Filter the directory to find specialized companies, training institutions, and experts in specific technology domains.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group cursor-pointer p-5 rounded-2xl bg-ncit-cloud hover:bg-ncit-blue hover:text-white transition-colors duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="text-ncit-blue group-hover:text-white transition-colors">
                  {sector.icon}
                </div>
                <span className="font-medium text-sm md:text-base text-ncit-ink group-hover:text-white transition-colors">
                  {sector.name}
                </span>
              </div>
              <span className="text-xs font-bold bg-white/50 text-ncit-ink group-hover:bg-white/20 group-hover:text-white px-2 py-1 rounded-full transition-colors">
                {sector.count}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
