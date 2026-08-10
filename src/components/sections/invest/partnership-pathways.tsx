"use client";

import { motion } from "framer-motion";
import { ArrowRight, Coins, Building2, Workflow, HeartHandshake, Microchip } from "lucide-react";
import Link from "next/link";

const pathways = [
  {
    title: "Direct Investment",
    description: "Invest in high-growth Northern startups or scale-ups seeking capital to expand their market reach.",
    icon: <Coins className="w-6 h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Outsource & Partner",
    description: "Collaborate with verified local IT service providers for high-quality, cost-effective software engineering and BPO services.",
    icon: <Workflow className="w-6 h-6" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Establish Presence",
    description: "Set up a regional office or development center in the North to tap into the dedicated local talent pool.",
    icon: <Building2 className="w-6 h-6" />,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Support Programs",
    description: "Fund or sponsor incubator programs, hackathons, and technology capacity-building initiatives.",
    icon: <HeartHandshake className="w-6 h-6" />,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Research & Skills",
    description: "Partner with local universities and technical institutes for joint R&D projects and curriculum development.",
    icon: <Microchip className="w-6 h-6" />,
    color: "text-rose-600",
    bg: "bg-rose-50",
  }
];

export default function PartnershipPathways() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-ncit-ink tracking-tight mb-4"
          >
            Engagement Pathways
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-1 bg-ncit-blue rounded-full mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-ncit-ink/70 font-light"
          >
            Multiple avenues exist for international and domestic partners to engage with the Northern tech ecosystem.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href="#inquiry" className="flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 rounded-3xl bg-ncit-cloud border border-gray-100 hover:shadow-lg hover:border-ncit-blue/20 transition-all duration-300 group">
                
                <div className={`w-14 h-14 rounded-2xl ${pathway.bg} ${pathway.color} flex items-center justify-center shrink-0 mb-4 md:mb-0 md:mr-6 group-hover:scale-110 transition-transform`}>
                  {pathway.icon}
                </div>
                
                <div className="flex-1 mb-4 md:mb-0 md:pr-6">
                  <h3 className="text-xl font-bold text-ncit-ink mb-2 group-hover:text-ncit-blue transition-colors">
                    {pathway.title}
                  </h3>
                  <p className="text-ncit-ink/60 font-light leading-relaxed">
                    {pathway.description}
                  </p>
                </div>
                
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ncit-ink/30 group-hover:text-white group-hover:bg-ncit-blue transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
