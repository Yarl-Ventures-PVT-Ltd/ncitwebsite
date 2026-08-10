"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ncit-ink text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 1.02, 0.73, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70"
          >
            Connect with NCIT.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8"
          >
            Whether you want to join, partner, invest, collaborate, speak with the Chamber or request support, choose the route below and we will direct your enquiry to the right team.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
