"use client";

import { motion } from "framer-motion";
import { Calendar, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const initiatives = [
  {
    type: "Event",
    icon: <Calendar className="w-4 h-4" />,
    title: "Northern Tech Summit 2026",
    district: "Jaffna",
    date: "October 15, 2026",
    color: "bg-ncit-blue text-white",
  },
  {
    type: "Project",
    icon: <LayoutDashboard className="w-4 h-4" />,
    title: "AgriTech Incubation Drive",
    district: "Kilinochchi",
    date: "Active (Q3 2026)",
    color: "bg-purple-600 text-white",
  },
  {
    type: "Event",
    icon: <Calendar className="w-4 h-4" />,
    title: "Vavuniya IT Job Fair",
    district: "Vavuniya",
    date: "November 05, 2026",
    color: "bg-emerald-600 text-white",
  }
];

export default function ProjectsAndEvents() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-bold text-ncit-ink tracking-tight mb-4">Regional Initiatives</h2>
            <div className="w-12 h-1 bg-ncit-blue rounded-full mb-6"></div>
            <p className="text-lg text-ncit-ink/70 font-light">
              Explore ongoing projects and upcoming events driving the digital economy across the Northern districts.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/insights/projects" 
              className="px-6 py-3 rounded-full border border-gray-200 text-ncit-ink font-medium hover:bg-ncit-cloud transition-colors"
            >
              View All Initiatives
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initiatives.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-ncit-cloud rounded-3xl p-8 border border-gray-100 hover:shadow-lg hover:border-ncit-blue/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${item.color}`}>
                  {item.icon}
                  {item.type}
                </span>
                <span className="text-xs font-bold text-ncit-ink/60 uppercase tracking-wider">
                  &bull; {item.district}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-ncit-ink mb-4">{item.title}</h3>
              
              <p className="text-sm font-medium text-ncit-blue bg-ncit-blue/10 inline-block px-3 py-1 rounded-full">
                {item.date}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
