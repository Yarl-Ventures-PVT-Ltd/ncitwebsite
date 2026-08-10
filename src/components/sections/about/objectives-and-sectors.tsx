"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const objectives = [
  "Unify the Northern Tech Ecosystem",
  "Advocate for Industry Policy",
  "Facilitate Global Market Access",
  "Accelerate Startup Innovation",
  "Elevate Professional Standards",
  "Drive Regional Economic Growth",
];

const coreSectors = [
  "Software Development",
  "IT Services & BPO",
  "Hardware & Infrastructure",
  "Tech Education & Training",
  "Telecommunications",
];

const emergingSectors = [
  "AI & Data Science",
  "Cloud Computing",
  "Cybersecurity",
  "AgriTech",
  "FinTech",
];

export default function ObjectivesAndSectors() {
  return (
    <section className="py-24 bg-ncit-cloud">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Objectives */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-ncit-ink tracking-tight mb-4">Core Objectives</h2>
              <div className="w-12 h-1 bg-ncit-blue rounded-full mb-6"></div>
              <p className="text-lg text-ncit-ink/70 font-light mb-8">
                Our strategic outcomes are designed to build a competitive and sustainable digital economy in the Northern Province.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {objectives.map((objective, index) => (
                <motion.div
                  key={objective}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="w-6 h-6 text-ncit-blue shrink-0" />
                  <span className="font-medium text-ncit-ink">{objective}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full"
            >
              <h2 className="text-2xl font-bold text-ncit-ink tracking-tight mb-4">Represented Sectors</h2>
              <div className="w-12 h-1 bg-ncit-purple rounded-full mb-8"></div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-ncit-ink/50 uppercase tracking-widest mb-4">Core Sectors</h3>
                  <div className="flex flex-wrap gap-2">
                    {coreSectors.map((sector) => (
                      <Badge key={sector} variant="default" className="bg-ncit-ink hover:bg-ncit-blue text-sm px-4 py-1.5 font-medium">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-ncit-ink/50 uppercase tracking-widest mb-4">Emerging Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {emergingSectors.map((sector) => (
                      <Badge key={sector} variant="outline" className="text-ncit-blue border-ncit-blue/30 bg-ncit-blue/5 text-sm px-4 py-1.5 font-medium hover:bg-ncit-blue hover:text-white transition-colors">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
