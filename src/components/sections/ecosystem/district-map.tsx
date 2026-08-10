"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Users } from "lucide-react";
import Link from "next/link";

const districts = [
  {
    name: "Jaffna",
    companies: 42,
    professionals: 156,
    color: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-500/20",
    delay: 0.1
  },
  {
    name: "Kilinochchi",
    companies: 15,
    professionals: 48,
    color: "from-emerald-500 to-emerald-600",
    shadow: "shadow-emerald-500/20",
    delay: 0.2
  },
  {
    name: "Vavuniya",
    companies: 24,
    professionals: 85,
    color: "from-purple-500 to-purple-600",
    shadow: "shadow-purple-500/20",
    delay: 0.3
  },
  {
    name: "Mannar",
    companies: 8,
    professionals: 32,
    color: "from-amber-500 to-amber-600",
    shadow: "shadow-amber-500/20",
    delay: 0.4
  },
  {
    name: "Mullaitivu",
    companies: 6,
    professionals: 21,
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
            <Link href={`/ecosystem/${district.name.toLowerCase()}`} key={district.name} className="block w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-19.2px)]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: district.delay, duration: 0.5 }}
                className={`h-full bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-2xl ${district.shadow} transition-all duration-300 hover:-translate-y-2 group cursor-pointer relative overflow-hidden`}
              >
                {/* Decorative gradient blob */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${district.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${district.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <MapPin className="w-6 h-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-ncit-ink mb-6 group-hover:text-ncit-blue transition-colors">
                  {district.name}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-ncit-ink/60 font-medium">
                      <Building2 className="w-4 h-4 mr-2 opacity-70" />
                      Companies
                    </span>
                    <span className="font-bold text-ncit-ink bg-gray-50 px-3 py-1 rounded-full">
                      {district.companies}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-ncit-ink/60 font-medium">
                      <Users className="w-4 h-4 mr-2 opacity-70" />
                      Professionals
                    </span>
                    <span className="font-bold text-ncit-ink bg-gray-50 px-3 py-1 rounded-full">
                      {district.professionals}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
