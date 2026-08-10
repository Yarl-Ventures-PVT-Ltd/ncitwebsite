"use client";

import { motion } from "framer-motion";
import { Building } from "lucide-react";

// Placeholder data for trusted partners
const partners = [
  "Development Agency",
  "Global Tech Corp",
  "Venture Capital Fund",
  "University Partner",
  "Diaspora Network",
  "Industry Association"
];

export default function TrustedPartners() {
  return (
    <section className="py-24 bg-ncit-cloud relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-ncit-ink/70 tracking-tight"
          >
            Trusted by Ecosystem Partners
          </motion.h2>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group">
          {/* Fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-ncit-cloud to-transparent z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-ncit-cloud to-transparent z-10" />

          {/* Scrolling content */}
          <motion.div 
            className="flex items-center whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="mx-8 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">
                  <Building className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold text-gray-600">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
