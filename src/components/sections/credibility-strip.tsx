"use client";

import { motion } from "framer-motion";

export default function CredibilityStrip() {
  const stats = [
    { label: "Districts United", value: "5" },
    { label: "Established", value: "2016" },
    { label: "Active Members", value: "150+" },
    { label: "Ecosystem Events", value: "40+" },
  ];

  return (
    <section className="relative z-20 -mt-16 mb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/20">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center px-4 group">
                <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-ncit-ink to-ncit-ink/70 mb-2 font-heading tracking-tight group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base font-medium text-ncit-ink/60 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
