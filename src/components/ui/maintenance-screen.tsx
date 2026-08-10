"use client";

import { motion } from "framer-motion";
import { Wrench, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import NcitLogo from "./ncit-logo";

interface MaintenanceScreenProps {
  title?: string;
  description?: string;
}

export default function MaintenanceScreen({ 
  title = "System Under Maintenance", 
  description = "We are currently upgrading our member portal and application systems to provide you with a better experience. Please check back soon." 
}: MaintenanceScreenProps) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-ncit-cloud relative overflow-hidden px-4 py-20">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-ncit-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-ncit-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-16 border border-gray-100 shadow-xl shadow-ncit-ink/5"
        >
          <div className="flex justify-center mb-8">
            <NcitLogo className="h-10 w-auto" />
          </div>
          
          <div className="w-20 h-20 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-12">
            <Wrench className="w-10 h-10" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-ncit-ink mb-4">
            {title}
          </h1>
          
          <p className="text-ncit-ink/70 leading-relaxed mb-10 max-w-lg mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-ncit-ink text-white hover:bg-ncit-ink/90 px-6 py-3.5 text-sm font-semibold rounded-xl transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return Home
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-gray-200 text-ncit-ink hover:bg-gray-50 px-6 py-3.5 text-sm font-semibold rounded-xl transition-all"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
