"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, Menu, X } from 'lucide-react';
import NcitLogo from '@/components/ui/ncit-logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'What We Do', 'Membership', 'Ecosystem', 'Invest', 'Insights'];

  return (
    <header className="sticky top-0 z-50 w-full glass-header bg-white/80 backdrop-blur-xl border-b border-white/20">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center group">
            <NcitLogo className="h-10 md:h-12 w-auto group-hover:scale-[1.02] transition-transform duration-300" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} 
              className="text-sm font-medium text-ncit-ink/80 hover:text-ncit-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-ncit-blue after:transition-all hover:after:w-full pb-1"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Utility Actions & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-ncit-ink/70 hover:text-ncit-blue hover:bg-white/50 rounded-full transition-all p-2.5" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/portal" className="hidden sm:inline-flex">
            <Button className="bg-ncit-ink hover:bg-ncit-blue text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
              Member Portal
            </Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-ncit-ink p-2"
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
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-ncit-ink hover:text-ncit-blue transition-colors py-2 border-b border-ncit-ink/5"
                >
                  {item}
                </Link>
              ))}
            </nav>
            
            <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-ncit-ink/10">
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
