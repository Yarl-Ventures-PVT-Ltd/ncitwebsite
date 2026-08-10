"use client";

import { motion } from "framer-motion";
import { GraduationCap, Map, Network, Globe, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Educated Talent Base",
    description: "Home to leading universities and technical institutes producing highly skilled, bilingual graduates ready for the global digital economy.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Entrepreneurial Community",
    description: "A resilient and dynamic startup culture fostered by grassroots organizations, incubators, and a strong community ethos.",
    icon: <Network className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Diaspora Connections",
    description: "Deep ties to a global diaspora network that provides mentorship, market access, and vital early-stage investment.",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Emerging Digital Economy",
    description: "Rapidly improving infrastructure, cost-effective operations, and strategic state support making the region highly competitive.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Five-District Ecosystem",
    description: "A diverse regional network spanning Jaffna, Kilinochchi, Mannar, Mullaitivu, and Vavuniya—each offering unique strategic advantages.",
    icon: <Map className="w-6 h-6" />,
    color: "bg-pink-50 text-pink-600",
  }
];

export default function WhyTheNorth() {
  return (
    <section className="py-24 bg-ncit-cloud relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink tracking-tight mb-4">
              Why Invest in the North?
            </h2>
            <div className="w-12 h-1 bg-ncit-blue rounded-full mb-6"></div>
            <p className="text-lg text-ncit-ink/70 font-light leading-relaxed mb-8">
              The Northern Province is undergoing a technological renaissance. Driven by a highly educated talent pool and robust diaspora support, the region offers untapped potential for investors, outsourcing partners, and technology enterprises seeking a competitive edge in South Asia.
            </p>
          </motion.div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ${index === 4 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${reason.color} flex items-center justify-center mb-6`}>
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-ncit-ink mb-3">{reason.title}</h3>
                  <p className="text-ncit-ink/70 font-light leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
