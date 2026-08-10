"use client";

import { motion } from "framer-motion";
import { Send, CalendarCheck } from "lucide-react";

export default function InvestInquiryForm() {
  return (
    <section id="inquiry" className="py-24 bg-ncit-ink text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Start a Conversation</h2>
            <div className="w-12 h-1 bg-ncit-blue rounded-full mb-8"></div>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
              Whether you are ready to invest, seeking a reliable technology partner, or exploring the ecosystem, the Northern Chamber of Information Technology is your first point of contact. 
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-ncit-blue/20 text-ncit-blue flex items-center justify-center shrink-0">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Request an Ecosystem Briefing</h3>
                <p className="text-sm text-white/60">Schedule a 30-minute introductory call with our partnerships team to discuss your specific requirements and explore alignment.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Work Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue" placeholder="jane@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Organization / Fund</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue" placeholder="Company Name" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Primary Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue appearance-none">
                  <option value="" className="text-gray-900">Select an option</option>
                  <option value="investment" className="text-gray-900">Direct Investment / Funding</option>
                  <option value="outsource" className="text-gray-900">Outsourcing / Vendor Discovery</option>
                  <option value="presence" className="text-gray-900">Establishing a Presence</option>
                  <option value="partnership" className="text-gray-900">Strategic Partnership</option>
                  <option value="other" className="text-gray-900">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">How can we help?</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue resize-none" placeholder="Briefly describe your objectives..."></textarea>
              </div>

              <button type="submit" className="w-full inline-flex items-center justify-center bg-ncit-blue text-white hover:bg-blue-600 h-14 px-8 text-base font-medium rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Submit Inquiry
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
