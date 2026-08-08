"use client";

import { motion } from "framer-motion";

export default function PartnerStrip() {
  const partners = [
    "Government of Sri Lanka",
    "ICTA",
    "Export Development Board",
    "USAID",
    "GIZ",
    "University of Jaffna",
    "Yarl IT Hub",
  ];

  return (
    <section className="py-12 md:py-16 border-t border-ncit-ink/5 relative z-10 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-ncit-ink/50">
            Ecosystem Partners & Affiliations
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-lg md:text-xl font-heading font-bold text-ncit-ink/60 grayscale hover:grayscale-0 hover:text-ncit-blue transition-all duration-300 cursor-default"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
