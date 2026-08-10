"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-24 bg-ncit-ink text-white relative overflow-hidden">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Eye className="w-8 h-8 text-ncit-blue" />
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Our Vision</h2>
            <div className="w-12 h-1 bg-ncit-blue rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
              To position Northern Sri Lanka as a globally connected, trusted and competitive technology region — creating opportunity, investment and digital prosperity from the North to the world.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Target className="w-8 h-8 text-ncit-purple" />
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Our Mission</h2>
            <div className="w-12 h-1 bg-ncit-purple rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
              NCIT unifies and represents the Northern technology ecosystem, strengthens industry standards and talent, connects members to markets and investment, advocates for enabling policy, and builds partnerships that accelerate sustainable technology-led growth.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
