"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhatWeDoCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-ncit-ink rounded-[2.5rem] overflow-hidden p-8 md:p-16 text-center"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ncit-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ncit-purple/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Ready to Drive Impact?
            </h2>
            
            <p className="text-lg md:text-xl text-white/70 font-light mb-12 leading-relaxed max-w-2xl">
              Whether you are looking to collaborate on a project, become a strategic partner, or join our growing member network, there is a place for you at NCIT.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full">
              <Link href="/insights/projects" className="inline-flex items-center justify-center bg-ncit-blue text-white hover:bg-blue-600 w-full sm:w-auto h-14 px-8 text-base font-medium rounded-full shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.5)] hover:-translate-y-1 transition-all duration-300 group">
                  Explore Current Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href="/invest" className="inline-flex items-center justify-center w-full sm:w-auto h-14 px-8 text-base font-medium rounded-full text-white bg-white/5 border border-white/20 hover:bg-white hover:text-ncit-ink hover:-translate-y-1 transition-all duration-300">
                  Partner with NCIT
              </Link>
              
              <Link href="/join" className="inline-flex items-center justify-center w-full sm:w-auto h-14 px-8 text-base font-medium rounded-full text-white bg-white/5 border border-white/20 hover:bg-white hover:text-ncit-ink hover:-translate-y-1 transition-all duration-300">
                  Join NCIT
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
