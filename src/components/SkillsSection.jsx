import React from 'react';
import { Award, Trophy, CheckCircle, Cpu, Sliders, Wrench, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const { skills, certifications, achievements } = portfolioData;

  const getCategoryIcon = (category) => {
    if (category.includes('Product')) return <Cpu className="w-4 h-4 text-cyan-400" />;
    if (category.includes('Risk')) return <Sliders className="w-4 h-4 text-teal-400" />;
    if (category.includes('Tools')) return <Wrench className="w-4 h-4 text-emerald-400" />;
    return <Sparkles className="w-4 h-4 text-indigo-400" />;
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            Core Competencies & Recognitions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills, Certifications & Achievements
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            A balanced mix of product management frameworks, quantitative data analytical capabilities, and proven national case competition accolades.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 backdrop-blur-sm transition-all"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                  {getCategoryIcon(skillGroup.category)}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-slate-950 text-slate-200 text-xs font-medium border border-slate-800/80 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Certifications */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-teal-400" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, cIdx) => (
                <div key={cIdx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-200">{cert.title}</div>
                    <div className="text-xs text-slate-400">{cert.issuer}</div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* National Achievements */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-cyan-400" />
              Competitions & Honors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((ach, aIdx) => (
                <div key={aIdx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{ach.title}</div>
                  <div className="text-xs text-slate-200 mt-1 font-semibold">{ach.detail}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
