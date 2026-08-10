"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

const publications = [
  { year: "2019", title: "NCIT Annual Tech Report", type: "PDF" },
  { year: "2018", title: "Startup Incubation Guidelines", type: "PDF" },
  { year: "2017", title: "Inaugural Chamber Newsletter", type: "PDF" },
];

export default function HistoricGallery() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Historic Publications */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-ncit-ink mb-4">Historic Publications</h2>
                <p className="text-ncit-ink/70">
                  A collection of past newsletters, guidelines, and reports published by the Chamber.
                </p>
              </div>

              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-5 rounded-2xl border border-gray-200 hover:border-ncit-blue hover:shadow-sm transition-all group cursor-pointer"
                  >
                    <div>
                      <span className="text-xs font-bold text-ncit-blue mb-1 block">{pub.year}</span>
                      <h4 className="font-semibold text-ncit-ink group-hover:text-ncit-blue transition-colors">{pub.title}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-ncit-ink/50 group-hover:text-ncit-blue transition-colors">
                      <span className="text-xs font-medium uppercase tracking-wider">{pub.type}</span>
                      <Download className="w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Historic Gallery Placeholder */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-ncit-ink mb-4">Archive Gallery</h2>
                <p className="text-ncit-ink/70">
                  Moments from our founding years, early hackathons, and first general meetings.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 overflow-hidden relative group">
                    <ImageIcon className="w-8 h-8 text-gray-300" />
                    <div className="absolute inset-0 bg-ncit-blue/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white font-medium text-sm">View Image</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Archive Disclaimer */}
          <div className="mt-24 p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center">
            <h4 className="font-bold text-ncit-ink mb-2">Archive Disclaimer</h4>
            <p className="text-sm text-ncit-ink/60 max-w-2xl mx-auto">
              The information in this historical archive reflects the Chamber's activities and publications at the time of their creation. Documents, policies, and roles listed here may no longer be current. For current information, please navigate to our active sections.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
