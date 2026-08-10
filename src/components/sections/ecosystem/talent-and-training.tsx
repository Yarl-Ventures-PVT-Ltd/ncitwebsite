"use client";

import { motion } from "framer-motion";
import { GraduationCap, Library, BookOpen } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    title: "University Networks",
    desc: "Connect with the leading academic institutions producing top-tier engineering and IT talent.",
    icon: <Library className="w-6 h-6" />,
    link: "/ecosystem/talent#universities",
  },
  {
    title: "Vocational & Skills Training",
    desc: "Discover specialized training centers addressing immediate industry skill gaps.",
    icon: <BookOpen className="w-6 h-6" />,
    link: "/ecosystem/talent#vocational",
  },
  {
    title: "Professional Development",
    desc: "Explore continuous learning programs, certifications, and upskilling pathways.",
    icon: <GraduationCap className="w-6 h-6" />,
    link: "/ecosystem/talent#professional",
  }
];

export default function TalentAndTraining() {
  return (
    <section className="py-24 bg-ncit-ink text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Talent & Training</h2>
            <div className="w-12 h-1 bg-ncit-blue rounded-full mb-6"></div>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
              A strong technology ecosystem relies on a continuous pipeline of skilled professionals. The Northern Province is home to renowned universities and training institutions building the next generation of digital leaders.
            </p>
            <Link 
              href="/ecosystem/talent" 
              className="inline-flex items-center text-ncit-blue font-semibold hover:text-white transition-colors"
            >
              Explore the Talent Pool
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((res, index) => (
              <motion.div
                key={res.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-ncit-blue/20 text-ncit-blue flex items-center justify-center mb-6">
                  {res.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{res.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed mb-4">
                  {res.desc}
                </p>
                <Link 
                  href={res.link} 
                  className="text-sm font-medium text-ncit-blue hover:text-white transition-colors"
                >
                  View Details &rarr;
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
