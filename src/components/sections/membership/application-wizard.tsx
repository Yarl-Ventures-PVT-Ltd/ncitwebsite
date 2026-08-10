"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, UploadCloud } from "lucide-react";

const steps = [
  "Membership Type",
  "Identity",
  "Representative",
  "Profile",
  "Documents",
  "Declarations",
  "Review"
];

export default function ApplicationWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(curr => curr + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-ncit-cloud relative">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-ncit-ink mb-4">Application Submitted!</h2>
          <p className="text-ncit-ink/70 mb-8">
            Thank you for applying to join the Northern Chamber of Information Technology. 
            Your application reference number is <strong>#APP-2026-9042</strong>.
          </p>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-left">
            <h4 className="font-bold text-ncit-ink mb-2">What happens next?</h4>
            <p className="text-sm text-ncit-ink/70 mb-4">
              Our Secretariat will review your submitted documents and eligibility criteria. This usually takes 7-14 business days. 
              We will notify you via email if further information is required or when your application is approved.
            </p>
            <p className="text-sm text-ncit-ink/70">
              Upon approval, you will receive a payment link to activate your membership.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-ncit-cloud relative min-h-[600px]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Stepper Header */}
          <div className="flex items-center justify-between mb-10 overflow-x-auto pb-4 hide-scrollbar">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center relative">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-colors ${
                      index < currentStep ? "bg-green-500 text-white" : 
                      index === currentStep ? "bg-ncit-blue text-white ring-4 ring-blue-100" : 
                      "bg-white border-2 border-gray-200 text-gray-400"
                    }`}
                  >
                    {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                  <span className={`absolute top-10 text-[10px] uppercase tracking-wider font-bold whitespace-nowrap ${
                    index <= currentStep ? "text-ncit-ink" : "text-gray-400"
                  }`}>
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 sm:w-12 md:w-16 lg:w-20 h-0.5 mx-2 transition-colors ${
                    index < currentStep ? "bg-green-500" : "bg-gray-200"
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Form Content Area */}
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-200 shadow-sm min-h-[400px] mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                
                {/* Step 1: Membership Type */}
                {currentStep === 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-ncit-ink mb-6">Select Membership Type</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["Full Member (Rs.5,000/yr)", "Ordinary Member (Rs.1,500/yr)", "Freelancer / Startup (Rs.1,000/yr)", "Student (Rs.100/yr)"].map((type, i) => (
                        <label key={i} className="flex items-start p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-ncit-blue transition-colors">
                          <input type="radio" name="membershipType" className="mt-1 text-ncit-blue focus:ring-ncit-blue" defaultChecked={i===0} />
                          <div className="ml-3">
                            <span className="block text-sm font-bold text-ncit-ink">{type.split(' (')[0]}</span>
                            <span className="block text-xs text-ncit-ink/60 mt-1">{type.includes('Rs.') ? `Fee: ${type.split('(')[1].replace(')','')}` : ''}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Identity */}
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-xl font-bold text-ncit-ink mb-6">Applicant Identity</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-ncit-ink mb-1">Legal / Trading Name</label>
                        <input type="text" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ncit-blue focus:border-ncit-blue outline-none" placeholder="e.g. NorthernTech Solutions (Pvt) Ltd" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ncit-ink mb-1">Registration Type</label>
                          <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ncit-blue outline-none bg-white">
                            <option>Private Limited Company</option>
                            <option>Sole Proprietorship</option>
                            <option>Partnership</option>
                            <option>Unregistered / Individual</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ncit-ink mb-1">Year Established</label>
                          <input type="number" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ncit-blue outline-none" placeholder="YYYY" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ncit-ink mb-1">Registered Address</label>
                        <textarea className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ncit-blue outline-none" rows={3} placeholder="Full address in the Northern Province..."></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Representative */}
                {currentStep === 2 && (
                  <div>
                    <h3 className="text-xl font-bold text-ncit-ink mb-6">Primary Representative</h3>
                    <p className="text-sm text-ncit-ink/60 mb-6">This person will be the main point of contact and will hold voting rights if applicable.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-ncit-ink mb-1">Full Name</label>
                        <input type="text" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ncit-blue outline-none" placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ncit-ink mb-1">Designation</label>
                        <input type="text" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ncit-blue outline-none" placeholder="CEO / Founder" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ncit-ink mb-1">Business Email</label>
                        <input type="email" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ncit-blue outline-none" placeholder="jane@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ncit-ink mb-1">Phone Number</label>
                        <input type="tel" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ncit-blue outline-none" placeholder="+94 7X XXX XXXX" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Profile */}
                {currentStep === 3 && (
                  <div>
                    <h3 className="text-xl font-bold text-ncit-ink mb-6">Company Profile</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-ncit-ink mb-1">Primary Sectors (Select up to 3)</label>
                        <div className="flex flex-wrap gap-2">
                          {["Software Development", "BPO / ITES", "Hardware", "EdTech", "FinTech", "Cybersecurity"].map(tag => (
                            <label key={tag} className="inline-flex items-center px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full cursor-pointer hover:bg-gray-100 text-sm">
                              <input type="checkbox" className="mr-2 rounded text-ncit-blue focus:ring-ncit-blue" />
                              {tag}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ncit-ink mb-1">Short Description (For Directory)</label>
                        <textarea className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ncit-blue outline-none" rows={3} placeholder="Describe your products/services in 150 words..."></textarea>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="publicProfile" className="rounded text-ncit-blue focus:ring-ncit-blue" defaultChecked />
                        <label htmlFor="publicProfile" className="text-sm text-ncit-ink">I consent to having my profile listed in the public NCIT Member Directory (upon approval).</label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Documents */}
                {currentStep === 4 && (
                  <div>
                    <h3 className="text-xl font-bold text-ncit-ink mb-6">Supporting Documents</h3>
                    <p className="text-sm text-ncit-ink/60 mb-6">Please upload the required documents to verify your eligibility. Files are securely stored and only accessible to authorized NCIT staff.</p>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer mb-6">
                      <UploadCloud className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm font-medium text-ncit-ink">Click to upload or drag and drop</p>
                      <p className="text-xs text-ncit-ink/50 mt-1">Business Registration (BR) Copy (PDF/JPG, max 5MB)</p>
                    </div>

                    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4">
                      <h4 className="text-sm font-bold text-ncit-blue mb-1">Why do we need this?</h4>
                      <p className="text-xs text-ncit-ink/70">To ensure the integrity of the chamber, Corporate members must provide legal proof of operation in the Northern Province.</p>
                    </div>
                  </div>
                )}

                {/* Step 6: Declarations */}
                {currentStep === 5 && (
                  <div>
                    <h3 className="text-xl font-bold text-ncit-ink mb-6">Declarations</h3>
                    <div className="space-y-4">
                      <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer">
                        <input type="checkbox" className="mt-1 rounded text-ncit-blue focus:ring-ncit-blue" />
                        <span className="text-sm text-ncit-ink/80">I declare that all information provided in this application is accurate and truthful to the best of my knowledge.</span>
                      </label>
                      <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer">
                        <input type="checkbox" className="mt-1 rounded text-ncit-blue focus:ring-ncit-blue" />
                        <span className="text-sm text-ncit-ink/80">I acknowledge and agree to abide by the NCIT Constitution, Bylaws, and Member Code of Conduct.</span>
                      </label>
                      <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer">
                        <input type="checkbox" className="mt-1 rounded text-ncit-blue focus:ring-ncit-blue" />
                        <span className="text-sm text-ncit-ink/80">I accept the NCIT Privacy Policy regarding the processing of my organizational and personal data for membership administration.</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Step 7: Review */}
                {currentStep === 6 && (
                  <div>
                    <h3 className="text-xl font-bold text-ncit-ink mb-6">Review & Submit</h3>
                    <p className="text-sm text-ncit-ink/60 mb-6">Please review your application summary before submitting.</p>
                    
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6 space-y-4">
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-sm text-ncit-ink/60">Membership Type</span>
                        <span className="text-sm font-bold text-ncit-ink">Full Member</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-sm text-ncit-ink/60">Legal Name</span>
                        <span className="text-sm font-bold text-ncit-ink">NorthernTech Solutions (Pvt) Ltd</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-sm text-ncit-ink/60">Representative</span>
                        <span className="text-sm font-bold text-ncit-ink">Jane Doe</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-ncit-ink/60">Documents Attached</span>
                        <span className="text-sm font-bold text-ncit-ink">BR_Certificate_2024.pdf</span>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between">
            {currentStep > 0 ? (
              <button 
                onClick={handlePrev}
                className="px-6 py-2.5 rounded-xl border border-gray-300 text-ncit-ink font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            ) : (
              <div></div> // Empty div for flex spacing
            )}
            
            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 rounded-xl text-ncit-ink/60 hover:text-ncit-ink font-semibold transition-colors">
                Save Draft
              </button>
              <button 
                onClick={handleNext}
                className="inline-flex items-center px-6 py-2.5 rounded-xl bg-ncit-blue text-white font-semibold shadow-md hover:bg-blue-600 transition-colors"
              >
                {currentStep === steps.length - 1 ? "Submit Application" : "Continue"}
                {currentStep < steps.length - 1 && <ChevronRight className="w-4 h-4 ml-1" />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
