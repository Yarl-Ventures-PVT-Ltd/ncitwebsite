"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MembershipHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ncit-ink text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-ncit-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-ncit-blue/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white shadow-sm backdrop-blur-md"
          >
            NCIT Membership
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 1.02, 0.73, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70"
          >
            Join the Network Building Northern Sri Lanka’s Technology Future.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            NCIT membership connects you to a trusted industry network, greater visibility, business and investment opportunities, policy engagement, knowledge, and community across the Northern Province.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#plans" className="w-full sm:w-auto inline-flex items-center justify-center bg-ncit-blue text-white hover:bg-blue-600 px-8 py-4 text-base font-medium rounded-xl shadow-md transition-all">
              Find My Membership
            </a>
            <Link href="/membership/apply" className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-base font-medium rounded-xl transition-all">
              Apply for Membership
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
