import React, { useState, useEffect } from 'react';
import { FileText, Mail, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Impact Metrics', href: '#impact' },
    { name: 'Featured PM Case Study', href: '#featured-case' },
    { name: 'Projects & PRDs', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills & Achievements', href: '#skills' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-cyan-950/10' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-400 flex items-center justify-center font-bold text-black text-lg shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              SR
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Safal Raj
              </span>
              <span className="block text-xs text-slate-400 font-medium">Product Manager</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              Contact
            </a>
            <a
              href="#featured-case"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-lg shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              View Case Study
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-3 border-t border-slate-800 bg-[#0B0F17]/95 rounded-2xl px-4 shadow-2xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-300 hover:text-cyan-400 py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  Contact Safal
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
