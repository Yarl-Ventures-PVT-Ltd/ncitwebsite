"use client";

import { FacebookIcon, LinkedInIcon, WhatsAppIcon } from "@/components/ui/social-icons";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";

import { SITE } from "@/lib/seo";

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
                    <p className="text-sm text-ncit-ink/70">Chairman&rsquo;s Office: <a href="mailto:chairman@ncit.lk" className="text-ncit-blue hover:underline">chairman@ncit.lk</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-gray-100 shadow-sm text-ncit-blue">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ncit-ink mb-1">Headquarters</h3>
                    <p className="text-sm text-ncit-ink/70 leading-relaxed">
                      No.95, KKS Road,<br />
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
                    <p className="text-sm text-ncit-ink/70 mb-2">Main Office: <a href={`tel:${SITE.telephone}`} className="text-ncit-blue hover:underline">{SITE.telephoneDisplay}</a></p>
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
                  <Link href="tel:+94770869328" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ncit-ink/60 hover:text-white hover:bg-ncit-blue shadow-sm transition-all" aria-label="Call Us">
                    <Phone className="w-4 h-4" />
                  </Link>
                  <Link href="https://www.linkedin.com/company/ncitsl/" target="_blank" rel="noopener noreferrer" aria-label="NCIT on LinkedIn, opens in a new tab" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ncit-ink/60 hover:text-white hover:bg-[#0A66C2] shadow-sm transition-all">
                    <LinkedInIcon className="w-4 h-4" />
                  </Link>
                  <Link href="https://www.facebook.com/NCITLK/" target="_blank" rel="noopener noreferrer" aria-label="NCIT on Facebook, opens in a new tab" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ncit-ink/60 hover:text-white hover:bg-[#1877F2] shadow-sm transition-all">
                    <FacebookIcon className="w-4 h-4" />
                  </Link>
                  <Link href="https://wa.me/94770869328" target="_blank" rel="noopener noreferrer" aria-label="Message NCIT on WhatsApp, opens in a new tab" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ncit-ink/60 hover:text-white hover:bg-[#25D366] shadow-sm transition-all">
                    <WhatsAppIcon className="w-4 h-4" />
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
            {/* The map searches for the same address string the block above
                prints and the PostalAddress in lib/seo.ts carries, so the three
                cannot drift apart. A pinned coordinate is deliberately not used
                here: none is confirmed for this building. */}
            <iframe
              title="Map showing the NCIT office at No.95, KKS Road, Jaffna"
              src="https://www.google.com/maps?q=No.95,+KKS+Road,+Jaffna,+Sri+Lanka&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: 8 }} 
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
