import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ConversionBand() {
  return (
    <section className="relative z-10 py-16 md:py-24 overflow-hidden mb-12">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#081B2C] to-[#0A2640] p-10 md:p-16 lg:p-20 shadow-2xl">
          
          {/* Decorative glowing elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ncit-blue/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ncit-teal/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none mix-blend-screen" />
          
          {/* Noise texture overlay for premium feel */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-heading tracking-tight">
                Build with the North. <br className="hidden md:block" />
                Grow with NCIT.
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-0 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Join the official Chamber representing the Northern technology ecosystem. Verify your business, access markets, and help shape industry policy.
              </p>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center lg:items-end">
              <Button size="lg" className="w-full md:w-auto bg-white hover:bg-white/90 text-[#081B2C] h-16 px-10 text-lg font-bold rounded-full shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 group">
                Apply for Membership
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-white/50 mt-4 font-light">
                Application takes approx. 5 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
