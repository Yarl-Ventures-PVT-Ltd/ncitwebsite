"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Users, Briefcase, Landmark, Megaphone, HelpCircle, MessageSquare } from "lucide-react";

type ContactRoute = "General" | "Membership" | "Investment" | "Government" | "Media" | "Support";

const routes = [
  { id: "General", label: "General Inquiry", icon: <MessageSquare className="w-5 h-5" /> },
  { id: "Membership", label: "Membership", icon: <Users className="w-5 h-5" /> },
  { id: "Investment", label: "Investment & Partnerships", icon: <Briefcase className="w-5 h-5" /> },
  { id: "Government", label: "Government / Institutional", icon: <Landmark className="w-5 h-5" /> },
  { id: "Media", label: "Media & Press", icon: <Megaphone className="w-5 h-5" /> },
  { id: "Support", label: "Member Support", icon: <HelpCircle className="w-5 h-5" /> },
] as const;

export default function ContactForm() {
  const [selectedRoute, setSelectedRoute] = useState<ContactRoute>("General");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your inquiry. Our team will respond shortly.");
    }, 1500);
  };

  return (
    <section className="py-20 bg-white relative -mt-8 z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Sidebar Routes */}
            <div className="lg:w-1/3 bg-ncit-cloud p-6 md:p-8 border-r border-gray-100">
              <h3 className="text-lg font-bold text-ncit-ink mb-6">Select Inquiry Type</h3>
              <div className="flex flex-col gap-2">
                {routes.map((route) => (
                  <button
                    key={route.id}
                    onClick={() => setSelectedRoute(route.id as ContactRoute)}
                    className={`flex items-center gap-3 w-full p-4 rounded-xl text-left transition-all duration-300 ${
                      selectedRoute === route.id
                        ? "bg-ncit-blue text-white shadow-md shadow-ncit-blue/20"
                        : "bg-white text-ncit-ink/70 hover:bg-white hover:text-ncit-ink border border-gray-100"
                    }`}
                  >
                    {route.icon}
                    <span className="font-medium text-sm">{route.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Form Area */}
            <div className="lg:w-2/3 p-6 md:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRoute}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-ncit-ink mb-2">
                    {routes.find(r => r.id === selectedRoute)?.label}
                  </h2>
                  <p className="text-ncit-ink/60 text-sm mb-8">
                    {selectedRoute === "Support" && "Please provide your member ID or registered email for faster resolution."}
                    {selectedRoute === "Membership" && "Interested in joining? Tell us a bit about your organization."}
                    {selectedRoute === "Investment" && "Our partnerships team typically responds to investment inquiries within 24 hours."}
                    {selectedRoute === "General" && "Have a question? We're here to help."}
                    {selectedRoute === "Government" && "For official communications and policy matters."}
                    {selectedRoute === "Media" && "For press inquiries, interview requests, and media assets."}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-ncit-ink">First Name</label>
                        <input type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-ncit-ink focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-ncit-ink">Last Name</label>
                        <input type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-ncit-ink focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-ncit-ink">Work Email</label>
                        <input type="email" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-ncit-ink focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-ncit-ink">Phone Number (Optional)</label>
                        <input type="tel" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-ncit-ink focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue transition-all" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ncit-ink">Organization / Company</label>
                      <input type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-ncit-ink focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue transition-all" />
                    </div>

                    {selectedRoute === "Support" && (
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-ncit-ink">Member ID (Optional)</label>
                        <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-ncit-ink focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue transition-all" />
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ncit-ink">Subject</label>
                      <input type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-ncit-ink focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue transition-all" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ncit-ink">Message</label>
                      <textarea required rows={5} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-ncit-ink focus:outline-none focus:ring-2 focus:ring-ncit-blue/50 focus:border-ncit-blue transition-all resize-none"></textarea>
                    </div>

                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="consent" required className="mt-1 w-4 h-4 text-ncit-blue rounded border-gray-300 focus:ring-ncit-blue" />
                      <label htmlFor="consent" className="text-xs text-ncit-ink/60 leading-relaxed">
                        By submitting this form, I consent to the Northern Chamber of Information Technology processing my data in accordance with the Privacy Policy to handle my inquiry. Protected by reCAPTCHA.
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-ncit-blue text-white hover:bg-blue-600 h-12 px-8 text-sm font-medium rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Inquiry"}
                      {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                    </button>
                  </form>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
