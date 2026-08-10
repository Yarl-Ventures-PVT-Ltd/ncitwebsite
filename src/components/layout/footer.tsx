import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import NcitLogo from '@/components/ui/ncit-logo';

export default function Footer() {
  return (
    <footer className="bg-[#040D17] text-ncit-cloud pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ncit-blue/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ncit-purple/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & About */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <NcitLogo variant="white" className="h-10 md:h-12 w-auto hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8 font-light">
              Northern Sri Lanka’s Gateway to Technology, Talent & Global Opportunity. Connecting the ecosystem across Jaffna, Kilinochchi, Mannar, Mullaitivu, and Vavuniya.
            </p>
            <div className="flex items-center gap-4 text-white/50">
              <Link href="#" className="hover:text-white hover:-translate-y-1 transition-all" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </Link>
              <Link href="#" className="hover:text-white hover:-translate-y-1 transition-all" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </Link>
              <Link href="#" className="hover:text-white hover:-translate-y-1 transition-all" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </Link>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-white font-medium mb-6 font-heading">About NCIT</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/about/history" className="hover:text-white transition-colors">Our History</Link></li>
              <li><Link href="/about/governance" className="hover:text-white transition-colors">Governance & Documents</Link></li>
              <li><Link href="/what-we-do/advocacy" className="hover:text-white transition-colors">Advocacy & Policy</Link></li>
              <li><Link href="/what-we-do/market-access" className="hover:text-white transition-colors">Business & Market Access</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Ecosystem & Membership Links */}
          <div>
            <h4 className="text-white font-medium mb-6 font-heading">Membership</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/membership" className="hover:text-white transition-colors">Membership Overview</Link></li>
              <li><Link href="/membership/benefits" className="hover:text-white transition-colors">Member Benefits</Link></li>
              <li><Link href="/membership/apply" className="hover:text-white transition-colors">Apply Now</Link></li>
              <li><Link href="/members" className="hover:text-white transition-colors">Member Directory</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6 font-heading">Ecosystem</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights & News</Link></li>
              <li><Link href="/invest" className="hover:text-white transition-colors">Invest in the North</Link></li>
              <li><Link href="/ecosystem" className="hover:text-white transition-colors">The Tech Ecosystem</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="w-full lg:max-w-md">
            <h4 className="text-white font-medium mb-3 text-sm font-heading">Subscribe to Ecosystem Updates</h4>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-ncit-blue h-12 rounded-full px-6"
              />
              <Button className="bg-white text-ncit-ink hover:bg-white/90 h-12 w-12 rounded-full p-0 flex-shrink-0 shadow-lg">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2 mt-4 lg:mt-0">
            <div className="text-sm text-white/40 font-light">
              &copy; {new Date().getFullYear()} Northern Chamber of Information Technology. All rights reserved.
            </div>
            <div className="text-xs text-white/30 font-light">
              Developed by <a href="https://yarlventures.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white underline decoration-white/20 underline-offset-4 transition-colors">Yarl Ventures</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
