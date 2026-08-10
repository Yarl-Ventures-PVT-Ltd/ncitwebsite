"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function InvestHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-ncit-ink text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ncit-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ncit-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm shadow-sm">
              <Globe className="h-4 w-4 text-ncit-blue" />
              <span className="tracking-wide">From the North to the World</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 1.02, 0.73, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70"
          >
            Discover Technology Opportunity in Northern Sri Lanka.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-3xl mx-auto mb-10"
          >
            NCIT provides a trusted gateway to companies, talent, institutions, startups and partnerships across the Northern Province — helping serious partners understand the ecosystem and connect with the right local stakeholders.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link 
              href="#inquiry" 
              className="inline-flex items-center justify-center bg-ncit-blue text-white hover:bg-blue-600 w-full sm:w-auto h-14 px-8 text-base font-medium rounded-full shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              Discuss an Investment
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
