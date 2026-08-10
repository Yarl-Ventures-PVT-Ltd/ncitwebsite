"use client";

import { motion } from "framer-motion";
import { Network } from "lucide-react";

export default function EcosystemHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ncit-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ncit-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ncit-blue/10 border border-ncit-blue/20 text-sm font-medium text-ncit-blue shadow-sm">
              <Network className="h-4 w-4" />
              <span className="tracking-wide">The Northern Network</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 1.02, 0.73, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-ncit-ink"
          >
            Explore Northern Sri Lanka’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-ncit-blue to-ncit-purple">Technology Ecosystem.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-ncit-ink/70 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Discover verified technology businesses, institutions, startups, professionals and opportunities across Jaffna, Kilinochchi, Mannar, Mullaitivu and Vavuniya.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
