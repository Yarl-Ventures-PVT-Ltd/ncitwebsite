"use client";

import { motion } from "framer-motion";
import { Building2, Rocket, GraduationCap, Briefcase, Landmark, BookOpen, Users2 } from "lucide-react";

const stakeholders = [
  {
    role: "Technology Companies",
    icon: <Building2 className="w-5 h-5" />,
    description: "Established IT firms, software agencies, and BPOs driving the regional digital economy."
  },
  {
    role: "Startups & Founders",
    icon: <Rocket className="w-5 h-5" />,
    description: "Innovators building scalable tech products and defining the future."
  },
  {
    role: "IT Professionals",
    icon: <Users2 className="w-5 h-5" />,
    description: "Engineers, designers, managers, and academics shaping industry standards."
  },
  {
    role: "Students & Talent",
    icon: <GraduationCap className="w-5 h-5" />,
    description: "The next generation of tech talent seeking pathways and opportunities."
  },
  {
    role: "Investors & Partners",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Global networks seeking trusted local entry points and investment prospects."
  },
  {
    role: "Government & Institutions",
    icon: <Landmark className="w-5 h-5" />,
    description: "Public sector entities working with industry to enable digital policy."
  },
  {
    role: "Training Institutions",
    icon: <BookOpen className="w-5 h-5" />,
    description: "Universities and academies aligning education with industry needs."
  }
];

export default function StakeholderEcosystem() {
  return (
    <section className="py-24 bg-ncit-ink text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ncit-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ncit-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Who We Bring Together</h2>
            <div className="w-12 h-1 bg-ncit-blue rounded-full mb-6"></div>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
              A thriving digital economy requires collaboration. NCIT is the central node connecting all participants in the Northern technology ecosystem.
            </p>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {stakeholders.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-full bg-ncit-blue/20 text-ncit-blue flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.role}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
