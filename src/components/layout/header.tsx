"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import NcitLogo from '@/components/ui/ncit-logo';

const navItems = [
  { label: 'Home', href: '/' },
  { 
    label: 'About', 
    href: '/about',
    subItems: [
      { label: 'Our History', href: '/about/history' },
      { label: 'Board of Directors', href: '/about/board' },
      { label: 'Governance & Documents', href: '/about/governance' },
      { label: 'Bylaws', href: '/about/governance/bylaws' }
    ]
  },
  { 
    label: 'What We Do', 
    href: '/what-we-do',
    subItems: [
      { label: 'Services', href: '/what-we-do/services' },
      { label: 'Projects & Initiatives', href: '/what-we-do/projects' },
      { label: 'Business Incubation', href: '/what-we-do/business-incubation-center' },
      { label: 'Market Access', href: '/what-we-do/market-access' },
      { label: 'Advocacy & Policy', href: '/what-we-do/advocacy' }
    ]
  },
  { 
    label: 'Membership', 
    href: '/membership',
    subItems: [
      { label: 'Membership Overview', href: '/membership' },
      { label: 'Member Benefits', href: '/membership/benefits' },
      { label: 'Apply Now', href: '/membership/apply' },
      { label: 'Member Directory', href: '/members' }
    ]
  },
  { 
    label: 'Ecosystem', 
    href: '/ecosystem',
    subItems: [
      { label: 'The Tech Ecosystem', href: '/ecosystem' },
      { label: 'Resources & Downloads', href: '/ecosystem/resources' },
      { label: 'Photo Gallery', href: '/gallery' }
    ]
  },
  { label: 'Invest', href: '/invest' },
  { label: 'Insights', href: '/insights' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full glass-header bg-white/80 backdrop-blur-xl border-b border-white/20">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center group">
            <NcitLogo
              priority
              className="h-10 md:h-12 w-auto group-hover:scale-[1.02] transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative group h-20 flex items-center"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link 
                href={item.href} 
                className="flex items-center gap-1 text-sm font-medium text-ncit-ink/80 hover:text-ncit-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-ncit-blue after:transition-all hover:after:w-full pb-1"
              >
                {item.label}
                {item.subItems && (
                  <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {item.subItems && openDropdown === item.label && (
                <div className="absolute top-[calc(100%-10px)] left-0 min-w-[240px] bg-white border border-gray-100 shadow-xl shadow-ncit-ink/5 rounded-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-5 py-2.5 text-sm text-ncit-ink/80 hover:text-ncit-blue hover:bg-ncit-blue/5 transition-colors"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Utility Actions & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/portal" className="hidden sm:inline-flex">
            <Button className="bg-ncit-ink hover:bg-ncit-blue text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
              Member Portal
            </Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-ncit-ink p-2 min-w-11 min-h-11 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white/95 backdrop-blur-xl border-t border-ncit-ink/10 overflow-y-auto">
          <div className="flex flex-col p-6 gap-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-ncit-ink/5 pb-2 mb-2">
                  <div className="flex justify-between items-center py-2">
                    <Link 
                      href={item.href} 
                      onClick={() => !item.subItems && setMobileMenuOpen(false)}
                      className="flex-1 py-2.5 text-lg font-bold text-ncit-ink hover:text-ncit-blue transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <button 
                        aria-label={`Show ${item.label} links`}
                        aria-expanded={openDropdown === item.label}
                        className="p-2 min-w-11 min-h-11 flex items-center justify-center"
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      >
                        <ChevronDown className={`w-5 h-5 text-ncit-ink/50 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {item.subItems && openDropdown === item.label && (
                    <div className="flex flex-col pl-4 mt-1 mb-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center min-h-11 text-ncit-ink/70 hover:text-ncit-blue transition-colors text-base"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="flex flex-col gap-4 mt-2 pt-2">
              <Link href="/portal" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-ncit-blue text-white rounded-xl h-12 text-lg shadow-md">
                  Member Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
