"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactDetails() {
  return (
    <section className="py-24 bg-ncit-cloud relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          
          {/* Details Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-ncit-ink mb-8 tracking-tight">Public Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-gray-100 shadow-sm text-ncit-blue">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ncit-ink mb-1">Email Us</h3>
                    <p className="text-sm text-ncit-ink/70 mb-1">General Inquiries: <a href="mailto:support@ncit.lk" className="text-ncit-blue hover:underline">support@ncit.lk</a></p>
                    <p className="text-sm text-ncit-ink/70">Chairman's Office: <a href="mailto:chairman@ncit.lk" className="text-ncit-blue hover:underline">chairman@ncit.lk</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-gray-100 shadow-sm text-ncit-blue">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ncit-ink mb-1">Headquarters</h3>
                    <p className="text-sm text-ncit-ink/70 leading-relaxed">
                      136/1 Palaly Road,<br />
                      Parameswara Junction,<br />
                      Jaffna, Northern Province,<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-gray-100 shadow-sm text-ncit-blue">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ncit-ink mb-1">Call Us</h3>
                    <p className="text-sm text-ncit-ink/70 mb-2">Main Office: <a href="tel:+94772222559" className="text-ncit-blue hover:underline">+94 77 222 2559</a></p>
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5" />
                      Mon - Fri, 9:00 AM - 5:00 PM (LKT)
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-ncit-ink mb-4">Connect on Social</h3>
                <div className="flex items-center gap-4">
                  <Link href="https://linkedin.com/company/ncit" target="_blank" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ncit-ink/60 hover:text-white hover:bg-[#0A66C2] shadow-sm transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </Link>
                  <Link href="https://facebook.com/ncit" target="_blank" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ncit-ink/60 hover:text-white hover:bg-[#1877F2] shadow-sm transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </Link>
                  <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ncit-ink/60 hover:text-white hover:bg-[#25D366] shadow-sm transition-all">
                    <MessageCircle className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 h-[400px] lg:h-auto min-h-[400px] relative overflow-hidden"
          >
            {/* Embedded Google Map (Placeholder for actual iframe) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15730.0195591931!2d79.99961501487625!3d9.69742513470659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe541094052dd5%3A0x6b09315bc3cbdd25!2sParameswara%20Junction%2C%20Jaffna!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1.25rem' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 p-4"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
