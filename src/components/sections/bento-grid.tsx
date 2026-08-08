"use client";

import { motion, Variants } from "framer-motion";
import { 
  Megaphone, 
  Link2, 
  Zap, 
  Banknote, 
  GraduationCap, 
  MapPin 
} from "lucide-react";

export default function BentoGrid() {
  const offerings = [
    {
      title: "Represent",
      desc: "Advocacy & Policy for the Northern tech industry.",
      icon: <Megaphone className="h-6 w-6 text-ncit-blue" />,
      colSpan: "md:col-span-2 lg:col-span-1",
    },
    {
      title: "Connect",
      desc: "Business & Market Access through global relationships.",
      icon: <Link2 className="h-6 w-6 text-ncit-purple" />,
      colSpan: "md:col-span-2 lg:col-span-1",
    },
    {
      title: "Accelerate",
      desc: "Startups & Innovation incubation programs.",
      icon: <Zap className="h-6 w-6 text-ncit-pink" />,
      colSpan: "md:col-span-2 lg:col-span-1",
    },
    {
      title: "Enable Investment",
      desc: "Trusted local facilitation for regional investments.",
      icon: <Banknote className="h-6 w-6 text-ncit-teal" />,
      colSpan: "md:col-span-2 lg:col-span-1",
    },
    {
      title: "Grow Talent",
      desc: "Skills development and professional capacity building.",
      icon: <GraduationCap className="h-6 w-6 text-ncit-gold" />,
      colSpan: "md:col-span-2 lg:col-span-1",
    },
    {
      title: "Promote the North",
      desc: "Highlighting Jaffna, Kilinochchi, Mannar, Mullaitivu & Vavuniya.",
      icon: <MapPin className="h-6 w-6 text-ncit-blue" />,
      colSpan: "md:col-span-2 lg:col-span-1",
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-ncit-ink mb-4 font-heading tracking-tight"
          >
            What NCIT Does
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-ncit-ink/70 max-w-2xl font-light"
          >
            We represent, strengthen, and connect the technology ecosystem to accelerate digital growth in Northern Sri Lanka.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-6 auto-rows-auto"
        >
          {offerings.map((offering, index) => (
            <motion.div 
              key={index} 
              variants={item} 
              className={`h-full ${offering.colSpan}`}
            >
              <div className="h-full rounded-[2rem] p-8 flex flex-col justify-start transition-all duration-500 hover:scale-[1.02] glass-card">
                
                <div className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm bg-white/70 border border-white/50">
                  {offering.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-3 text-ncit-ink">
                    {offering.title}
                  </h3>
                  <p className="font-light leading-relaxed text-lg text-ncit-ink/70">
                    {offering.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
