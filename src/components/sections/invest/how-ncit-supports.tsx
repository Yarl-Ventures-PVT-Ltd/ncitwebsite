"use client";

import { motion } from "framer-motion";
import { Presentation, ShieldCheck, Link2, Handshake, Users, Navigation } from "lucide-react";

const supports = [
  {
    title: "Ecosystem Briefings",
    description: "Comprehensive overviews of the regional tech landscape, current trends, and data-driven insights to inform your investment strategy.",
    icon: <Presentation className="w-5 h-5" />
  },
  {
    title: "Verified Introductions",
    description: "Curated connections to vetted technology companies, ensuring you meet reliable partners who align with your strategic goals.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    title: "Talent & Institution Connections",
    description: "Direct linkages to leading universities and training bodies to help secure the specific talent pipelines your operations require.",
    icon: <Link2 className="w-5 h-5" />
  },
  {
    title: "Partner Discovery",
    description: "Tailored matchmaking services to identify co-founders, joint venture partners, or local implementation agencies.",
    icon: <Handshake className="w-5 h-5" />
  },
  {
    title: "Event & Roundtable Facilitation",
    description: "Organizing focused dialogues and private roundtables with key industry players during your regional visits.",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "Stakeholder Navigation",
    description: "Guidance on local business nuances and introductions to necessary government or regulatory stakeholders.",
    icon: <Navigation className="w-5 h-5" />
  }
];

export default function HowNcitSupports() {
  return (
    <section className="py-24 bg-ncit-ink text-white relative overflow-hidden">
      
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How NCIT Supports Investors</h2>
            <div className="w-12 h-1 bg-ncit-blue rounded-full mb-6"></div>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              We act as your trusted regional connector. While we do not hold regulatory approval authority, we facilitate the introductions and insights necessary to establish a successful presence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supports.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-ncit-blue group-hover:scale-110 transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ncit-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
