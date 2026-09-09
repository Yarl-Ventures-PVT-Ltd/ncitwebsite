"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { LINKED_MEMBERS } from "@/lib/members";

export default function FeaturedMembers() {
  // Sourced from the real directory. The hand-written list this replaced had
  // drifted: it advertised a company that is not a member, under a heading that
  // calls every name on it a member, and it carried sector labels the chamber
  // has no record of. Only members with a public website appear, because that
  // link is the one claim the strip makes that a reader can check.
  const members = LINKED_MEMBERS;

  return (
    <section className="relative z-10 py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
        <h2 className="text-xl font-bold font-heading text-ncit-ink tracking-tight">
          Trusted by Northern Sri Lanka&apos;s Leading Tech Organizations
        </h2>
      </div>
      
      {/* Auto-scrolling marquee wrapper */}
      <div className="flex overflow-hidden relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F4F7FF] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F4F7FF] to-transparent z-10" />
        
        <motion.div 
          className="flex gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: members.length * 5, ease: "linear" }}
        >
          {[...members, ...members].map((member, i) => (
            <div 
              key={i} 
              className="glass border border-white/60 rounded-2xl p-6 min-w-[280px] flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-ncit-blue/10 flex items-center justify-center text-ncit-blue flex-shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-ncit-ink text-sm">{member.name}</p>
                {member.info && (
                  <p className="text-xs text-ncit-ink/60 font-medium">{member.info}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 text-center">
        <Link href="/members" className="text-sm font-semibold text-ncit-blue hover:text-ncit-purple transition-colors">
          View full member directory &rarr;
        </Link>
      </div>
    </section>
  );
}
