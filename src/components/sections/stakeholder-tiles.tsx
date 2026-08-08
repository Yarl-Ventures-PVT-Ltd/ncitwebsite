"use client";

import { motion } from "framer-motion";
import { Building2, Rocket, Users, Landmark, Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StakeholderTiles() {
  const stakeholders = [
    {
      id: "companies",
      title: "Companies",
      icon: <Building2 className="h-7 w-7 text-white" />,
      desc: "Credibility, network, policy voice, and talent visibility.",
      href: "/join/companies",
      color: "from-ncit-blue to-ncit-blue/80",
    },
    {
      id: "startups",
      title: "Startups",
      icon: <Rocket className="h-7 w-7 text-white" />,
      desc: "Mentors, visibility, and ecosystem access.",
      href: "/startups",
      color: "from-ncit-purple to-ncit-purple/80",
    },
    {
      id: "talent",
      title: "Talent & Students",
      icon: <Users className="h-7 w-7 text-white" />,
      desc: "Industry exposure, skills, internships, and jobs.",
      href: "/talent",
      color: "from-ncit-pink to-ncit-pink/80",
    },
    {
      id: "investors",
      title: "Investors",
      icon: <Landmark className="h-7 w-7 text-white" />,
      desc: "Trusted local entry point and partner discovery.",
      href: "/invest",
      color: "from-ncit-teal to-ncit-teal/80",
    },
    {
      id: "government",
      title: "Gov & Partners",
      icon: <Handshake className="h-7 w-7 text-white" />,
      desc: "Industry voice and ecosystem data implementation.",
      href: "/partners",
      color: "from-ncit-gold to-ncit-gold/80",
    },
  ];

  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-ncit-ink mb-6 font-heading tracking-tight">
            One Ecosystem. <span className="text-transparent bg-clip-text bg-gradient-to-r from-ncit-blue to-ncit-purple">Many Pathways.</span>
          </h2>
          <p className="text-lg md:text-xl text-ncit-ink/70 max-w-2xl mx-auto font-light">
            Choose your path to discover how NCIT accelerates your growth in the Northern technology economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {stakeholders.map((item, index) => (
            <Link key={item.id} href={item.href} className="block group h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full glass-card rounded-3xl p-6 flex flex-col relative overflow-hidden"
              >
                {/* Subtle glowing orb inside card */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className={`mb-6 bg-gradient-to-br ${item.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl text-ncit-ink font-bold font-heading mb-3 relative z-10">
                  {item.title}
                </h3>
                
                <p className="text-sm text-ncit-ink/70 mb-8 flex-grow relative z-10 font-light">
                  {item.desc}
                </p>
                
                <div className="flex items-center text-ncit-blue font-semibold text-sm relative z-10">
                  Explore <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
