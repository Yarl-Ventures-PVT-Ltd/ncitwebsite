"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

const featured = [
  {
    name: "Yarl IT Hub",
    type: "Ecosystem Builder",
    district: "Jaffna",
    description: "A not-for-profit community fostering innovation, startups, and technology education in the Northern Province.",
    tags: ["Startups", "Community", "Education"],
  },
  {
    name: "Tech Solutions Pvt Ltd",
    type: "Corporate Member",
    district: "Vavuniya",
    description: "Leading software development and IT infrastructure provider serving national and international clients.",
    tags: ["Software", "Enterprise", "Infrastructure"],
  },
  {
    name: "Northern AI Labs",
    type: "Startup",
    district: "Kilinochchi",
    description: "An emerging AI startup focused on agricultural technology and local language processing models.",
    tags: ["AI", "AgriTech", "Research"],
  }
];

export default function FeaturedEntities() {
  return (
    <section className="py-24 bg-ncit-ink text-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-ncit-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-ncit-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 text-ncit-blue mb-4">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold tracking-widest uppercase">Spotlight</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Members</h2>
            <p className="text-lg text-white/70 font-light">
              Discover some of the innovative organizations driving the Northern technology ecosystem forward.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((entity, index) => (
            <motion.div
              key={entity.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-bold text-white bg-ncit-blue/10 px-3 py-1 rounded-full mb-3 inline-block">
                    {entity.district}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-ncit-blue transition-colors">
                    {entity.name}
                  </h3>
                  <p className="text-sm text-white/50">{entity.type}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-ncit-blue transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <p className="text-white/70 font-light leading-relaxed mb-8 min-h-[80px]">
                {entity.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {entity.tags.map(tag => (
                  <span key={tag} className="text-xs text-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
