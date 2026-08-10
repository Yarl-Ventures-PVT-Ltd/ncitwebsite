"use client";

import { motion } from "framer-motion";
import { Globe, GraduationCap, Building2, Server, Rocket, TrendingUp, ShieldCheck, MapPin } from "lucide-react";

const themes = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Market Access",
    description: "Reducing barriers for local IT firms to access national and international markets, including public procurement reform."
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Talent & Skills",
    description: "Aligning academic curricula with industry needs and advocating for continuous professional development funding."
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Digital Infrastructure",
    description: "Campaigning for robust cloud infrastructure, reliable connectivity, and affordable access to advanced technologies like AI."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Investment Facilitation",
    description: "Creating favorable conditions and tax incentives to attract direct tech investments to the Northern Province."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Startup Enablement",
    description: "Advocating for seed funding access, simplified business registration, and supportive regulatory frameworks for founders."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Export Growth",
    description: "Supporting IT and BPM export initiatives, including streamlined banking and forex regulations for service exporters."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Industry Standards",
    description: "Promoting cyber security standards, data privacy, and ethical AI development within the local ecosystem."
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Regional Inclusion",
    description: "Ensuring that national digital policies equitably support and include the Northern digital economy."
  }
];

export default function PolicyThemes() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ncit-ink mb-4">Core Policy Themes</h2>
          <p className="text-ncit-ink/70">
            Our advocacy efforts are focused on eight critical areas that shape the operational environment for our members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-ncit-blue/30 transition-all group"
            >
              <div className="w-12 h-12 bg-ncit-cloud text-ncit-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {theme.icon}
              </div>
              <h3 className="text-xl font-bold text-ncit-ink mb-3 group-hover:text-ncit-blue transition-colors">{theme.title}</h3>
              <p className="text-sm text-ncit-ink/70 leading-relaxed">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
