import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUp, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactFooter() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 bg-[#080B11] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to Action Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/30 relative overflow-hidden shadow-2xl mb-16">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Let's Connect
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Looking for an APM / Product Manager who ships impact?
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              I am actively interviewing for Associate Product Manager (APM) and Product Manager roles. Feel free to reach out directly via email or phone!
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-black font-bold text-sm hover:scale-[1.02] transition-all shadow-lg shadow-cyan-500/20"
              >
                <Mail className="w-4 h-4 fill-black text-cyan-400" />
                Send an Email ({personal.email})
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                Call {personal.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-teal-400 flex items-center justify-center font-bold text-black text-sm">
                SR
              </div>
              <span className="text-base font-bold text-white">Safal Raj</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              MBA (NMIMS 2026) & B.Tech IT (VIT 2023). Product, Analytics & Growth Leader.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Direct Contact</div>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${personal.email}`} className="hover:text-cyan-400 transition-colors">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personal.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Quick Navigation</div>
            <div className="space-y-2 text-xs text-slate-300">
              <div><a href="#impact" className="hover:text-cyan-400">Impact Metrics</a></div>
              <div><a href="#featured-case" className="hover:text-cyan-400">GenAI Case Study</a></div>
              <div><a href="#projects" className="hover:text-cyan-400">Projects & PRDs</a></div>
              <div><a href="#experience" className="hover:text-cyan-400">Work History</a></div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Social Profiles</div>
              <div className="flex gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Safal Raj. Personal Product Manager Portfolio.
        </div>

      </div>
    </footer>
  );
}
