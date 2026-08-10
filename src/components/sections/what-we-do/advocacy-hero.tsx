"use client";

import { motion } from "framer-motion";

export default function AdvocacyHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ncit-cloud relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-ncit-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ncit-blue/5 rounded-full blur-2xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white border border-gray-200 text-sm font-semibold text-ncit-ink shadow-sm"
          >
            Policy & Advocacy
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 1.02, 0.73, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-ncit-ink mb-6"
          >
            A Stronger Voice for Northern Technology.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-ncit-ink/70 font-light leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            NCIT consolidates industry priorities from the Northern technology community and engages public, private and development stakeholders on the conditions required for sustainable digital growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
