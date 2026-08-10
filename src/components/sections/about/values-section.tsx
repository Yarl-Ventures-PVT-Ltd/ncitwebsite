"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, Zap, Lightbulb, Globe, Map } from "lucide-react";

const values = [
  {
    title: "Unity",
    description: "One credible identity for the Northern technology ecosystem.",
    icon: <Users className="w-6 h-6" />,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Trust",
    description: "Transparent governance, verified membership and professional standards.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    title: "Opportunity",
    description: "Business, careers, investment, partnerships and market access.",
    icon: <Zap className="w-6 h-6" />,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "Innovation",
    description: "Startups, digital transformation, emerging technology and problem solving.",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    title: "Global Connectivity",
    description: "North-to-world relationships, diaspora, national and international links.",
    icon: <Globe className="w-6 h-6" />,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    title: "Regional Impact",
    description: "Meaningful growth across all five Northern districts.",
    icon: <Map className="w-6 h-6" />,
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink tracking-tight mb-4">Our Values</h2>
          <div className="w-12 h-1 bg-ncit-blue rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-ncit-ink/70 font-light">
            The principles that guide our work, define our culture, and drive our commitment to the Northern technology ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className={`w-14 h-14 rounded-2xl ${value.bg} ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-ncit-ink mb-3">{value.title}</h3>
              <p className="text-ncit-ink/70 font-light leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
