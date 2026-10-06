import React from 'react';
import { ArrowDownRight, Sparkles, TrendingUp, ShieldCheck, Zap, Download, Linkedin, Github, Mail, ExternalLink, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, keyMetrics } = portfolioData;

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-teal-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7">
            
            {/* Seeking APM Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-semibold mb-6 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Seeking Associate Product Manager (APM) & PM Roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Data-Driven & Execution-First <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Product Manager
              </span>
            </h1>
            
            {/* Bio Summary */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              {personal.summary}
            </p>

            {/* Badges / Credentials Tags */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-400">
              <span className="px-3 py-1 bg-slate-900/90 rounded-lg border border-slate-800 text-slate-200">
                🎓 MBA (NMIMS, 2026)
              </span>
              <span className="px-3 py-1 bg-slate-900/90 rounded-lg border border-slate-800 text-slate-200">
                💻 B.Tech IT (VIT Vellore, 2023)
              </span>
              <span className="px-3 py-1 bg-slate-900/90 rounded-lg border border-slate-800 text-slate-200">
                🏦 Ex-IndusInd Bank Fraud Analytics
              </span>
              <span className="px-3 py-1 bg-slate-900/90 rounded-lg border border-slate-800 text-slate-200">
                💼 Ex-PwC Tech Consulting & JSPL
              </span>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#featured-case"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-black font-bold text-sm shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition-all"
              >
                <Sparkles className="w-4 h-4 fill-black text-black" />
                Explore GenAI Case Study
              </a>
              
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 transition-all hover:border-cyan-500/40"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                Get in Touch
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-cyan-500/40 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-cyan-500/40 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Image Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
              
              {/* Image Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-cyan-500/30 p-2 shadow-2xl max-w-sm">
                <img
                  src={personal.image}
                  alt="Safal Raj - Product Manager"
                  className="w-full h-[400px] object-cover object-top rounded-2xl filter brightness-105 contrast-105"
                />

                {/* Floating Status Pill */}
                <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-md flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Safal Raj</div>
                    <div className="text-[11px] text-cyan-300 font-medium">MBA (NMIMS '26) • B.Tech IT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quantified Impact Metrics Grid */}
        <div id="impact" className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs uppercase font-bold tracking-widest text-slate-400 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              Quantified Impact At A Glance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="relative group p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-sm transition-all hover:-translate-y-1 shadow-lg shadow-black/40"
              >
                <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${metric.accentColor} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-200 mt-2">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
