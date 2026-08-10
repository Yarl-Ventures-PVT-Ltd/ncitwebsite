"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I have to pay when submitting the application?",
    answer: "No. You do not pay during the application stage. NCIT will first review your eligibility and documents. If approved, you will receive an invoice with payment instructions to activate your membership."
  },
  {
    question: "What documents do I need to apply?",
    answer: "For Corporate/Association memberships, you will need a copy of your Business Registration (BR) or equivalent organizational registration. For Professional, Freelancer, or Student memberships, you will need a valid ID, student ID, or a link to your professional profile (like LinkedIn) depending on the category."
  },
  {
    question: "How long does the approval process take?",
    answer: "Applications are typically reviewed by the Secretariat and approved by the Executive Committee within 7-14 business days. You will be notified via email of your status."
  },
  {
    question: "Can I upgrade my membership later?",
    answer: "Yes, you can request to upgrade your membership (for example, from Ordinary to Full Member once your business crosses the 2-year operational requirement). Upgrades are subject to approval and payment of the fee difference."
  },
  {
    question: "How does the annual renewal work?",
    answer: "Membership is valid for one year from the date of activation. You will receive a renewal notice 30 days before your membership expires. Renewals can be paid directly through the member portal."
  }
];

export default function MembershipFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-ncit-cloud relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-ncit-ink mb-4">Frequently Asked Questions</h2>
          <p className="text-ncit-ink/70">
            Have questions about joining NCIT? Check our common queries below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all ${
                openIndex === index ? "border-ncit-blue shadow-sm" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-ncit-ink pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-ncit-ink/50 transition-transform ${
                    openIndex === index ? "rotate-180 text-ncit-blue" : ""
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-sm text-ncit-ink/70 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
