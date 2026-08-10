"use client";

import { motion } from "framer-motion";

export default function MarketAccessHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ncit-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-ncit-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-ncit-blue/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white shadow-sm backdrop-blur-md"
          >
            Business & Market Access
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 1.02, 0.73, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70"
          >
            Connect. Collaborate. Grow.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            NCIT creates trusted pathways for member companies and professionals to discover partners, customers, expertise, procurement opportunities, and market connections.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
