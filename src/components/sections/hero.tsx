"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-36 md:pb-40 lg:pt-48 lg:pb-48">
      {/* Bright & Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      
      {/* Vibrant glowing orbs instead of muddy multiply blends */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/70 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-purple-100/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[700px] h-[700px] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/60 text-sm font-medium text-ncit-blue shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span className="tracking-wide">Building the Digital North</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 1.02, 0.73, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-ncit-ink mb-8 leading-[1.1]">
            Northern Sri Lanka’s Gateway to <span className="text-transparent bg-clip-text bg-gradient-to-r from-ncit-blue via-ncit-purple to-ncit-pink">Technology, Talent & Global Opportunity.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mb-12"
        >
          <p className="text-lg md:text-xl text-ncit-ink/70 leading-relaxed font-light">
            NCIT connects companies, professionals, educators, startups, freelancers, students, investors, government and development partners across Jaffna, Kilinochchi, Mannar, Mullaitivu and Vavuniya - building a stronger, globally connected digital economy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full"
        >
          <Button size="lg" className="bg-ncit-ink text-white hover:bg-ncit-blue w-full sm:w-auto h-14 px-8 text-base font-medium rounded-full shadow-[0_8px_30px_rgb(37,99,235,0.2)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300 group">
            Explore the Northern Tech Ecosystem
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-medium rounded-full text-ncit-ink bg-white/60 border border-ncit-blue/20 hover:bg-white hover:border-ncit-blue/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            Join NCIT
          </Button>
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-ncit-ink/50 uppercase tracking-widest"
        >
          <span>Established 2016</span>
          <span className="w-1.5 h-1.5 rounded-full bg-ncit-blue/50" />
          <span>Northern Province, Sri Lanka</span>
          <span className="w-1.5 h-1.5 rounded-full bg-ncit-blue/50" />
          <span>From the North to the World</span>
        </motion.div>

      </div>
    </section>
  );
}
