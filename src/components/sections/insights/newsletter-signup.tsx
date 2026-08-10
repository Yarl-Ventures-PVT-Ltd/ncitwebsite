"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function NewsletterSignup() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-ncit-ink rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ncit-blue/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-ncit-purple/10 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            
            <div className="md:w-1/2 text-white">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <Mail className="w-6 h-6 text-ncit-blue" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Stay Ahead of the Curve
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                Subscribe to the NCIT newsletter for curated monthly updates on Northern ecosystem developments, policy shifts, and exclusive event invitations.
              </p>
            </div>

            <div className="md:w-1/2 w-full">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    placeholder="Enter your work email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue transition-all"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center bg-ncit-blue text-white hover:bg-blue-600 h-14 px-8 text-base font-medium rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Subscribe Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <p className="text-xs text-white/40 text-center mt-4">
                  By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
                </p>
              </form>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
