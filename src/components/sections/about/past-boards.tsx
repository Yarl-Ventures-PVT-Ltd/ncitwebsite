"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

const pastBoards = [
  {
    term: "2021 - 2023",
    president: "Former President Name",
    secretary: "Former Secretary Name",
    directors: 8,
  },
  {
    term: "2019 - 2021",
    president: "Former President Name",
    secretary: "Former Secretary Name",
    directors: 10,
  },
  {
    term: "2017 - 2019",
    president: "Founding President Name",
    secretary: "Founding Secretary Name",
    directors: 7,
  }
];

export default function PastBoards() {
  return (
    <section className="py-24 bg-ncit-cloud relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink mb-4">Past Leadership</h2>
            <p className="text-ncit-ink/70 max-w-2xl mx-auto">
              Recognizing the dedication of our past Boards of Directors who laid the foundation for the Chamber's growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastBoards.map((board, index) => (
              <motion.div
                key={board.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-ncit-cloud text-ncit-blue rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-ncit-ink mb-6">{board.term}</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-ncit-ink/50 uppercase tracking-wider font-semibold mb-1">President</p>
                    <p className="font-medium text-ncit-ink">{board.president}</p>
                  </div>
                  <div>
                    <p className="text-xs text-ncit-ink/50 uppercase tracking-wider font-semibold mb-1">Secretary</p>
                    <p className="font-medium text-ncit-ink">{board.secretary}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 mt-4">
                    <p className="text-sm text-ncit-ink/70">Supported by {board.directors} Directors</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
