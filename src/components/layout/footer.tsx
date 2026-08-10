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
              <Link href="https://www.facebook.com/NCITLK/" target="_blank" className="hover:text-white hover:-translate-y-1 transition-all" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </Link>
              <Link href="https://www.linkedin.com/company/ncitsl/" target="_blank" className="hover:text-white hover:-translate-y-1 transition-all" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
              <Link href="https://wa.me/94770869328" target="_blank" className="hover:text-white hover:-translate-y-1 transition-all" aria-label="WhatsApp">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
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
