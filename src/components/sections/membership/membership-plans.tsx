"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

type PlanCategory = "Corporate" | "Individual" | "Student";

const plans = [
  {
    id: "full",
    category: "Corporate",
    title: "Full Member",
    fee: "5,000",
    eligibility: "IT companies registered and operating in the Northern Province for at least 2 years.",
    features: [
      "Voting rights at AGM",
      "Eligible for Board of Directors",
      "Premium Directory Listing",
      "Priority B2B Matchmaking",
      "Full access to policy working groups"
    ],
    highlight: true
  },
  {
    id: "ordinary",
    category: "Corporate",
    title: "Ordinary Member",
    fee: "1,500",
    eligibility: "IT startups or companies operating in the Northern Province for less than 2 years.",
    features: [
      "Attendance at AGM (No voting)",
      "Standard Directory Listing",
      "Access to Startup Incubation",
      "General networking events",
      "Basic policy updates"
    ],
    highlight: false
  },
  {
    id: "offshore",
    category: "Corporate",
    title: "Offshore Member",
    fee: "5,000",
    eligibility: "IT companies registered outside the Northern Province with interest in the region.",
    features: [
      "Talent sourcing access",
      "Investment matchmaking",
      "Diaspora network integration",
      "Event sponsorships",
      "Market reports"
    ],
    highlight: false
  },
  {
    id: "association",
    category: "Corporate",
    title: "Association",
    fee: "3,000",
    eligibility: "Educational institutions, tech hubs, or allied associations in the Northern Province.",
    features: [
      "Institutional partnerships",
      "Joint event hosting",
      "Curriculum alignment groups",
      "Bulk student memberships",
      "Resource sharing"
    ],
    highlight: false
  },
  {
    id: "professional",
    category: "Individual",
    title: "Professional",
    fee: "1,000",
    eligibility: "Individual IT professionals, academics, or researchers.",
    features: [
      "Professional networking",
      "Access to expert talks",
      "Mentorship opportunities",
      "Career resources",
      "Individual directory profile"
    ],
    highlight: false
  },
  {
    id: "freelancer",
    category: "Individual",
    title: "Freelancer / Startup",
    fee: "1,000",
    eligibility: "Independent contractors or unregistered solo founders in IT.",
    features: [
      "Freelancer directory listing",
      "Client referrals",
      "Coworking discounts",
      "Skill workshops",
      "Contract templates"
    ],
    highlight: true
  },
  {
    id: "student",
    category: "Student",
    title: "Student",
    fee: "100",
    eligibility: "Currently enrolled university or vocational students in IT-related fields.",
    features: [
      "Internship board access",
      "Hackathon participation",
      "Student chapters",
      "Industry mentoring",
      "Discounted event tickets"
    ],
    highlight: false
  }
];

export default function MembershipPlans() {
  const [activeCategory, setActiveCategory] = useState<PlanCategory>("Corporate");
  
  const filteredPlans = plans.filter(plan => plan.category === activeCategory);

  return (
    <section id="plans" className="py-24 bg-ncit-cloud relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink mb-4">Find Your Membership</h2>
          <p className="text-ncit-ink/70 mb-8">
            Select the category that best fits your status. Fees are displayed in LKR per annum.
          </p>
          
          <div className="inline-flex bg-gray-100 p-1 rounded-xl">
            {(["Corporate", "Individual", "Student"] as PlanCategory[]).map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activeCategory === category 
                    ? "bg-white text-ncit-blue shadow-sm" 
                    : "text-ncit-ink/60 hover:text-ncit-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center"
            >
              {filteredPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`bg-white rounded-3xl p-8 border ${
                    plan.highlight ? "border-ncit-blue shadow-[0_8px_30px_rgb(0,102,255,0.12)] relative" : "border-gray-200 shadow-sm"
                  } flex flex-col h-full`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ncit-blue text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                      Recommended
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-ncit-ink mb-2">{plan.title}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-ncit-ink">Rs.{plan.fee}</span>
                      <span className="text-sm text-ncit-ink/50 font-medium">/ year</span>
                    </div>
                  </div>
                  
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <p className="text-sm text-ncit-ink/70 leading-relaxed min-h-[60px]">
                      {plan.eligibility}
                    </p>
                  </div>
                  
                  <div className="flex-grow mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-ncit-blue shrink-0 mt-0.5" />
                          <span className="text-sm text-ncit-ink/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={`/membership/apply?type=${plan.id}`}
                    className={`w-full text-center py-3.5 rounded-xl text-sm font-bold transition-all ${
                      plan.highlight 
                        ? "bg-ncit-blue text-white hover:bg-blue-600 shadow-md" 
                        : "bg-gray-50 text-ncit-ink hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}
