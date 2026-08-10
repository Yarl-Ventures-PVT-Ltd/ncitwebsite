"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function SuccessStory() {
  return (
    <section className="py-24 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-6xl mx-auto bg-ncit-ink rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-ncit-blue/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/3] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden"
            >
              <div className="text-white/20 text-center">
                <Star className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="font-medium">Success Story Image</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center px-3 py-1 bg-ncit-blue/20 text-ncit-blue border border-ncit-blue/30 rounded-full text-xs font-bold tracking-wider mb-6">
                MEMBER SUCCESS
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                From Local Startup to International Exporter.
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-8">
                Through NCIT's B2B matchmaking programs and trade mission to Singapore in 2024, NorthernTech Solutions (a fictitious example) secured a multi-year software development contract, expanding their team from 5 to 25 local engineers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/join" className="inline-flex items-center justify-center bg-ncit-blue text-white hover:bg-blue-600 px-6 py-3.5 text-sm font-medium rounded-xl shadow-md transition-all text-center">
                  Join NCIT to Grow
                </Link>
                <Link href="/members" className="inline-flex items-center justify-center bg-white/10 text-white hover:bg-white/20 px-6 py-3.5 text-sm font-medium rounded-xl transition-all text-center">
                  Browse Member Directory
                </Link>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
