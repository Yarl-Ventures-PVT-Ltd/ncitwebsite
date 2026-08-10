"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const districtData = [
  { name: "Jaffna", desc: "The historical and cultural hub with a dense concentration of startups and educational institutions.", link: "/ecosystem/jaffna" },
  { name: "Kilinochchi", desc: "An emerging center for agri-tech and sustainable engineering innovation.", link: "/ecosystem/kilinochchi" },
  { name: "Mannar", desc: "Growing potential in renewable energy tech and coastal digital connectivity.", link: "/ecosystem/mannar" },
  { name: "Mullaitivu", desc: "Developing digital infrastructure to support regional economic empowerment.", link: "/ecosystem/mullaitivu" },
  { name: "Vavuniya", desc: "A strategic logistical and technology gateway connecting the North to the rest of the country.", link: "/ecosystem/vavuniya" },
];

export default function DistrictCards() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-ncit-ink tracking-tight mb-4"
          >
            Explore the Districts
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
            Dive deeper into the unique technology landscapes of each Northern district.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {districtData.map((district, index) => (
            <motion.div
              key={district.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={district.link} className="block h-full bg-ncit-cloud rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-ncit-blue/20 transition-all duration-300 group">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-ncit-ink group-hover:text-ncit-blue transition-colors">
                    {district.name}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ncit-ink/50 group-hover:text-white group-hover:bg-ncit-blue group-hover:-translate-y-1 transition-all">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
                <p className="text-ncit-ink/60 font-light leading-relaxed">
                  {district.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
