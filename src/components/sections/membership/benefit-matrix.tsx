"use client";

import { Check, Minus } from "lucide-react";

const categories = [
  "Full Member",
  "Ordinary",
  "Offshore",
  "Association",
  "Professional",
  "Freelancer",
  "Student"
];

const features = [
  {
    group: "Governance & Leadership",
    items: [
      { name: "Voting rights at AGM", availability: [true, false, false, false, false, false, false] },
      { name: "Eligible for Board of Directors", availability: [true, false, false, false, false, false, false] },
      { name: "Lead Working Groups", availability: [true, true, false, true, false, false, false] }
    ]
  },
  {
    group: "Visibility",
    items: [
      { name: "Verified Member Badge", availability: [true, true, true, true, true, true, true] },
      { name: "Public Directory Profile", availability: ["Premium", "Standard", "Standard", "Standard", "Individual", "Individual", false] },
      { name: "Member Showcases", availability: [true, true, false, true, false, false, false] },
      { name: "PR Amplification", availability: [true, true, true, false, false, false, false] }
    ]
  },
  {
    group: "Business & Market",
    items: [
      { name: "B2B Matchmaking", availability: ["Priority", "Standard", "Standard", false, false, "Standard", false] },
      { name: "Procurement & Tender Alerts", availability: [true, true, false, false, false, true, false] },
      { name: "Trade Mission Participation", availability: [true, true, true, false, false, false, false] },
      { name: "Job Board Postings", availability: ["Unlimited", "3/month", "Unlimited", "1/month", false, false, false] }
    ]
  },
  {
    group: "Knowledge & Community",
    items: [
      { name: "Ecosystem Reports", availability: [true, true, true, true, true, true, true] },
      { name: "Networking Events", availability: ["Free", "Discounted", "Discounted", "Discounted", "Discounted", "Discounted", "Free"] },
      { name: "Training & Masterclasses", availability: ["Priority", "Priority", "Standard", "Standard", "Standard", "Standard", "Standard"] },
      { name: "Coworking Discounts", availability: [true, true, false, false, true, true, false] }
    ]
  }
];

export default function BenefitMatrix() {
  return (
    <section id="matrix" className="py-24 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink mb-4">Compare Membership Plans</h2>
          <p className="text-ncit-ink/70">
            A detailed breakdown of features and access rights across all membership tiers.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto pb-8">
          <table className="w-full min-w-[900px] text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b-2 border-gray-200 bg-gray-50 text-ncit-ink font-bold w-1/4 sticky left-0 z-10">
                  Feature
                </th>
                {categories.map((cat, idx) => (
                  <th key={idx} className="p-4 border-b-2 border-gray-200 bg-white text-ncit-ink font-bold text-center text-sm">
                    {cat}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((group, groupIdx) => (
                <optgroup key={groupIdx} className="contents">
                  <tr>
                    <td 
                      colSpan={8} 
                      className="p-4 bg-gray-50 font-bold text-ncit-ink text-sm uppercase tracking-wider sticky left-0"
                    >
                      {group.group}
                    </td>
                  </tr>
                  {group.items.map((item, itemIdx) => (
                    <tr key={itemIdx} className="hover:bg-gray-50/50 transition-colors border-b border-gray-100 last:border-b-0">
                      <td className="p-4 text-sm text-ncit-ink/80 font-medium sticky left-0 bg-white shadow-[1px_0_0_0_#f3f4f6]">
                        {item.name}
                      </td>
                      {item.availability.map((status, statusIdx) => (
                        <td key={statusIdx} className="p-4 text-center">
                          {typeof status === "boolean" ? (
                            status ? (
                              <Check className="w-5 h-5 text-ncit-blue mx-auto" />
                            ) : (
                              <Minus className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm font-semibold text-ncit-ink">{status}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </optgroup>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </section>
  );
}
