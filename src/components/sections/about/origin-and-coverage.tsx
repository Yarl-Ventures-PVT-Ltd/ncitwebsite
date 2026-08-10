"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const districts = [
  "Jaffna",
  "Kilinochchi",
  "Mannar",
  "Mullaitivu",
  "Vavuniya",
];

export default function OriginAndCoverage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Origin & Role Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink tracking-tight">
              Unifying the Northern Ecosystem
            </h2>
            <div className="w-12 h-1 bg-ncit-blue rounded-full"></div>
            <p className="text-lg text-ncit-ink/70 leading-relaxed font-light">
              The Northern Chamber of Information Technology was formed to create a unified voice and a centralized hub for the technology sector across the Northern Province. 
            </p>
            <p className="text-lg text-ncit-ink/70 leading-relaxed font-light">
              By bringing together technology associations, established businesses, emerging startups, training institutions, and IT professionals, NCIT bridges gaps and fosters collaboration. We act as the primary catalyst for digital transformation, standard-setting, and economic growth in the region.
            </p>
          </motion.div>

          {/* 5-District Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Abstract decorative nodes */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-ncit-blue/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-ncit-purple/5 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl font-bold text-ncit-ink mb-2">Five Districts.</h3>
              <h3 className="text-2xl font-bold text-ncit-blue mb-8">One Network.</h3>
              
              <div className="space-y-4 relative z-10">
                {districts.map((district, index) => (
                  <motion.div
                    key={district}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-ncit-blue/10 flex items-center justify-center text-ncit-blue group-hover:bg-ncit-blue group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium text-ncit-ink">{district}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
