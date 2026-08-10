"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-32 lg:pt-48 lg:pb-40">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-100/60 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/60 text-sm font-medium text-ncit-blue shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span className="tracking-wide">Built in the North. Connected to the World.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 1.02, 0.73, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-ncit-ink mb-8 leading-[1.1]">
            One Chamber for Northern Sri Lanka’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-ncit-blue via-ncit-purple to-ncit-pink">Technology Ecosystem.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mb-12"
        >
          <p className="text-lg md:text-xl text-ncit-ink/70 leading-relaxed font-light">
            Established on 22 February 2016, NCIT was created to bring the Northern Province’s technology associations, businesses, institutions and professionals under one credible platform and advance the region’s ICT industry. NCIT serves Jaffna, Kilinochchi, Mannar, Mullaitivu and Vavuniya.
          </p>
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-ncit-ink/50 uppercase tracking-widest"
        >
          <span>Registration: GL2441</span>
        </motion.div>

      </div>
    </section>
  );
}
