"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronRight, Network } from "lucide-react";

const districts = [
  { 
    id: "jaffna", 
    name: "Jaffna", 
    tagline: "The Northern Tech Capital",
    stats: { startups: "50+", talent: "5000+", focus: "AI & Software" },
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-400/40"
  },
  { 
    id: "kilinochchi", 
    name: "Kilinochchi", 
    tagline: "AgriTech & Green Energy Hub",
    stats: { startups: "15+", talent: "1200+", focus: "AgriTech & IoT" },
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-400/40"
  },
  { 
    id: "mannar", 
    name: "Mannar", 
    tagline: "Renewable & Marine Tech",
    stats: { startups: "10+", talent: "800+", focus: "Clean Energy" },
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-400/40"
  },
  { 
    id: "vavuniya", 
    name: "Vavuniya", 
    tagline: "Logistics & Cross-border Trade Hub",
    stats: { startups: "20+", talent: "1500+", focus: "Logistics Tech" },
    color: "from-purple-500/20 to-fuchsia-500/20",
    borderColor: "border-purple-400/40"
  },
  { 
    id: "mullaitivu", 
    name: "Mullaitivu", 
    tagline: "Eco-Tourism & Rural Innovation",
    stats: { startups: "8+", talent: "500+", focus: "Eco-Tech" },
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-400/40"
  },
];

export default function EcosystemPreview() {
  const [activeDistrict, setActiveDistrict] = useState(districts[0]);

  return (
    <section className="relative z-10 py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-ncit-ink mb-6 font-heading tracking-tight"
          >
            One Unified <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ncit-teal to-ncit-blue">Northern Ecosystem.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-ncit-ink/70 font-light leading-relaxed"
          >
            NCIT connects the diverse strengths of all 5 districts into a single, cohesive, and globally competitive technology economy.
          </motion.p>
        </div>

        {/* Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left: Interactive District Selector */}
          <div className="w-full lg:w-5/12 flex flex-col gap-3">
            {districts.map((district, i) => (
              <motion.button
                key={district.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                onClick={() => setActiveDistrict(district)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${
                  activeDistrict.id === district.id 
                    ? `bg-white shadow-[0_8px_30px_rgb(0,51,204,0.12)] border-ncit-blue/30 scale-[1.02]` 
                    : `bg-white/40 hover:bg-white/80 border-white/50 hover:border-ncit-blue/20`
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${
                    activeDistrict.id === district.id ? "bg-ncit-blue/10 text-ncit-blue" : "bg-white text-ncit-ink/50 group-hover:text-ncit-blue"
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${activeDistrict.id === district.id ? "text-ncit-blue" : "text-ncit-ink"}`}>
                      {district.name}
                    </h3>
                    <p className="text-sm text-ncit-ink/60 font-medium">
                      {district.tagline}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${activeDistrict.id === district.id ? "text-ncit-blue translate-x-1" : "text-ncit-ink/30"}`} />
              </motion.button>
            ))}
          </div>

          {/* Right: Dynamic Display Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <div className="h-full bg-white/70 backdrop-blur-xl border border-white shadow-xl rounded-[2.5rem] overflow-hidden relative flex flex-col">
              
              {/* Dynamic Background Glow */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDistrict.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-br ${activeDistrict.color} opacity-40`}
                />
              </AnimatePresence>

              {/* Decorative Tech Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
              
              <div className="relative z-10 p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <Network className="w-6 h-6 text-ncit-blue" />
                  <h4 className="font-heading font-bold text-xl text-ncit-ink uppercase tracking-wide">
                    Regional Profile
                  </h4>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDistrict.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-center"
                  >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-ncit-ink mb-4">
                      {activeDistrict.name}
                    </h2>
                    <p className="text-xl text-ncit-ink/70 mb-10 font-medium">
                      {activeDistrict.tagline}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-10">
                      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white shadow-sm">
                        <div className="text-xs font-bold text-ncit-ink/50 uppercase tracking-wider mb-1">Startups</div>
                        <div className="text-2xl font-bold text-ncit-blue">{activeDistrict.stats.startups}</div>
                      </div>
                      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white shadow-sm">
                        <div className="text-xs font-bold text-ncit-ink/50 uppercase tracking-wider mb-1">Talent</div>
                        <div className="text-2xl font-bold text-ncit-blue">{activeDistrict.stats.talent}</div>
                      </div>
                      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white shadow-sm">
                        <div className="text-xs font-bold text-ncit-ink/50 uppercase tracking-wider mb-1">Focus</div>
                        <div className="text-lg font-bold text-ncit-ink leading-tight">{activeDistrict.stats.focus}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
