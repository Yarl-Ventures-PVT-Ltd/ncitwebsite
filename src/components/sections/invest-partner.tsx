"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe2, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InvestPartner() {
  const points = [
    {
      title: "Trusted Local Entry Point",
      desc: "Navigate the Northern ecosystem with confidence through a verified, governed Chamber.",
      icon: <ShieldCheck className="w-6 h-6 text-ncit-blue" />
    },
    {
      title: "Untapped Tech Talent",
      desc: "Access a growing pool of engineering, services, and creative professionals.",
      icon: <TrendingUp className="w-6 h-6 text-ncit-purple" />
    },
    {
      title: "Global Connectivity",
      desc: "Leverage diaspora networks and international partnerships for scalable growth.",
      icon: <Globe2 className="w-6 h-6 text-ncit-teal" />
    }
  ];

  return (
    <section className="relative py-16 md:py-24 my-10 md:my-16 bg-[#081B2C] text-white overflow-hidden rounded-3xl md:rounded-[3rem] mx-4 md:mx-6 shadow-2xl">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ncit-blue/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ncit-teal/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading tracking-tight leading-tight">
              Invest in the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ncit-blue via-ncit-teal to-ncit-cloud">Future of the North.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 font-light leading-relaxed max-w-lg">
              Northern Sri Lanka is emerging as a dynamic technology destination. Partner with NCIT to discover scalable business opportunities and secure reliable local facilitation.
            </p>
            
            <Link href="/invest">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#081B2C] hover:bg-white/90 h-14 px-8 text-base font-bold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 group">
                Discuss Investment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-2xl md:rounded-3xl backdrop-blur-md flex flex-row gap-4 md:gap-6 items-start hover:bg-white/10 transition-colors"
              >
                <div className="p-3 bg-white/10 rounded-2xl shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2 text-white">{point.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
