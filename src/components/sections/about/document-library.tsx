"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Archive, ChevronDown, CheckCircle2 } from "lucide-react";

type DocCategory = "Current" | "Archived";

const documents = [
  {
    id: "bylaws-2024",
    title: "NCIT Constitution and Bylaws",
    version: "v4.1",
    date: "Jan 15, 2024",
    status: "Current",
    category: "Current",
    type: "PDF",
    size: "1.2 MB",
  },
  {
    id: "membership-policy-2024",
    title: "Membership Policy & Fee Schedule",
    version: "v2.0",
    date: "Feb 01, 2024",
    status: "Current",
    category: "Current",
    type: "PDF",
    size: "0.8 MB",
  },
  {
    id: "code-of-conduct",
    title: "Member Code of Conduct",
    version: "v1.2",
    date: "Mar 10, 2023",
    status: "Current",
    category: "Current",
    type: "PDF",
    size: "0.5 MB",
  },
  {
    id: "privacy-policy",
    title: "Privacy and Data Protection Notice",
    version: "v1.0",
    date: "Aug 05, 2023",
    status: "Current",
    category: "Current",
    type: "PDF",
    size: "0.4 MB",
  },
  {
    id: "agm-2023",
    title: "Annual General Meeting Minutes 2023",
    version: "Final",
    date: "Dec 12, 2023",
    status: "Current",
    category: "Current",
    type: "PDF",
    size: "2.1 MB",
  },
  {
    id: "bylaws-2020",
    title: "NCIT Constitution and Bylaws (Superseded)",
    version: "v3.0",
    date: "Jun 10, 2020",
    status: "Archived",
    category: "Archived",
    type: "PDF",
    size: "1.0 MB",
  },
  {
    id: "membership-policy-2018",
    title: "Membership Policy (Superseded)",
    version: "v1.0",
    date: "Jan 20, 2018",
    status: "Archived",
    category: "Archived",
    type: "PDF",
    size: "0.7 MB",
  }
];

export default function DocumentLibrary() {
  const [activeTab, setActiveTab] = useState<DocCategory>("Current");

  const filteredDocs = documents.filter(doc => doc.category === activeTab);

  return (
    <section className="py-24 bg-ncit-cloud min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Tabs */}
          <div className="flex items-center gap-4 mb-10 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("Current")}
              className={`pb-4 text-lg font-bold transition-all relative ${
                activeTab === "Current" ? "text-ncit-blue" : "text-ncit-ink/50 hover:text-ncit-ink/80"
              }`}
            >
              Current Documents
              {activeTab === "Current" && (
                <motion.div layoutId="docTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-ncit-blue" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("Archived")}
              className={`pb-4 text-lg font-bold transition-all relative ${
                activeTab === "Archived" ? "text-ncit-blue" : "text-ncit-ink/50 hover:text-ncit-ink/80"
              }`}
            >
              Archived (Superseded)
              {activeTab === "Archived" && (
                <motion.div layoutId="docTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-ncit-blue" />
              )}
            </button>
          </div>

          {/* List */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-gray-50 border-b border-gray-200 text-xs font-bold text-ncit-ink/50 uppercase tracking-wider">
              <div className="col-span-6">Document Name</div>
              <div className="col-span-2">Version</div>
              <div className="col-span-2">Effective Date</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            <div className="divide-y divide-gray-100">
              <AnimatePresence mode="popLayout">
                {filteredDocs.map((doc, index) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-gray-50 transition-colors group"
                  >
                    <div className="col-span-1 md:col-span-6 flex items-start gap-4">
                      <div className={`mt-1 shrink-0 ${doc.status === "Current" ? "text-ncit-blue" : "text-gray-400"}`}>
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className={`font-bold ${doc.status === "Current" ? "text-ncit-ink" : "text-ncit-ink/60 line-through decoration-gray-300"}`}>
                          {doc.title}
                        </h4>
                        <div className="flex items-center gap-3 mt-1 md:hidden">
                          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{doc.version}</span>
                          <span className="text-xs text-gray-500">{doc.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden md:block col-span-2">
                      <span className="text-sm font-medium text-ncit-ink/70 bg-gray-100 px-2.5 py-1 rounded-md">
                        {doc.version}
                      </span>
                    </div>
                    
                    <div className="hidden md:block col-span-2">
                      <span className="text-sm text-ncit-ink/70">{doc.date}</span>
                    </div>

                    <div className="col-span-1 md:col-span-2 flex justify-end">
                      <button className="flex items-center gap-2 text-sm font-semibold text-ncit-blue hover:text-blue-700 transition-colors bg-blue-50 px-4 py-2 rounded-xl group-hover:bg-blue-100 w-full md:w-auto justify-center">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredDocs.length === 0 && (
              <div className="p-12 text-center text-gray-400">
                <Archive className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No documents found in this category.</p>
              </div>
            )}
          </div>

          {activeTab === "Archived" && (
            <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-4">
              <Archive className="w-6 h-6 text-amber-600 shrink-0" />
              <div>
                <h4 className="font-bold text-amber-900 mb-1">Archived Documents Notice</h4>
                <p className="text-sm text-amber-800/80">
                  These documents have been superseded by newer versions and are no longer in effect. They are provided here strictly for historical reference and audit purposes.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
