"use client";

import { motion } from "framer-motion";
import { MousePointerClick, FileText, CheckCircle, CreditCard, UserCheck, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: <MousePointerClick className="w-5 h-5" />,
    title: "1. Choose",
    description: "Select your membership category based on your eligibility."
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "2. Apply",
    description: "Submit your online application and required documents."
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "3. Verification",
    description: "NCIT staff reviews your documents for eligibility."
  },
  {
    icon: <UserCheck className="w-5 h-5" />,
    title: "4. Approval",
    description: "Application is formally approved by the Executive Committee."
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "5. Payment",
    description: "Receive invoice and complete your annual fee payment."
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "6. Activation",
    description: "Your membership is active! Renewal occurs annually."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink mb-4">How Membership Works</h2>
          <p className="text-ncit-ink/70">
            A transparent and straightforward process to join the chamber.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-gray-100 z-0" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-ncit-blue group-hover:text-ncit-blue transition-colors text-ncit-ink/40">
                  {step.icon}
                </div>
                <h4 className="font-bold text-ncit-ink mb-2">{step.title}</h4>
                <p className="text-xs text-ncit-ink/60 leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
        
      </div>
    </section>
  );
}
