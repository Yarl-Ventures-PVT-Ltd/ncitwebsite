"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";

const districts = [
  {
    name: "Jaffna",
    description: "The historical and cultural hub with a dense concentration of startups and educational institutions.",
    color: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-500/20",
    delay: 0.1
  },
  {
    name: "Kilinochchi",
    description: "An emerging center for agri-tech and sustainable engineering innovation.",
    color: "from-emerald-500 to-emerald-600",
    shadow: "shadow-emerald-500/20",
    delay: 0.2
  },
  {
    name: "Vavuniya",
    description: "A strategic logistical and technology gateway connecting the North to the rest of the country.",
    color: "from-purple-500 to-purple-600",
    shadow: "shadow-purple-500/20",
    delay: 0.3
  },
  {
    name: "Mannar",
    description: "Growing potential in renewable energy tech and coastal digital connectivity.",
    color: "from-amber-500 to-amber-600",
    shadow: "shadow-amber-500/20",
    delay: 0.4
  },
  {
    name: "Mullaitivu",
    description: "Developing digital infrastructure to support regional economic empowerment.",
    color: "from-rose-500 to-rose-600",
    shadow: "shadow-rose-500/20",
    delay: 0.5
  }
];

export default function DistrictMap() {
  return (
    <section className="py-24 bg-ncit-cloud relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-ncit-ink tracking-tight mb-4"
          >
            A Region Connected
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-1 bg-ncit-blue rounded-full mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-ncit-ink/70 font-light"
          >
            The Northern tech ecosystem spans five distinct districts, each contributing unique talent, startups, and enterprises to the national grid.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {districts.map((district) => (
            <Link href="/ecosystem" key={district.name} className="block w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-19.2px)]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: district.delay, duration: 0.5 }}
                className={`h-full bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-2xl ${district.shadow} transition-all duration-300 hover:-translate-y-2 group cursor-pointer relative overflow-hidden`}
              >
                {/* Decorative gradient blob */}
                
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${district.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <MapPin className="w-6 h-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-ncit-ink mb-6 group-hover:text-ncit-blue transition-colors">
                  {district.name}
                </h3>
                
                <p className="text-sm text-ncit-ink/70 font-light leading-relaxed">
                  {district.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
