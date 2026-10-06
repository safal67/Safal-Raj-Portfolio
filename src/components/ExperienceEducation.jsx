import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              Work & Entrepreneurial Experience ({experience.length} Roles)
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-8">
              Professional Journey
            </h2>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-10 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-slate-900 border-2 border-cyan-500/60 group-hover:border-cyan-400 group-hover:scale-110 transition-all flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/30 backdrop-blur-sm transition-all shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-cyan-400 mt-1 flex items-center gap-3">
                      <span>{exp.company}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-600" />
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2.5">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Credentials (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Background
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-8">
              Education
            </h2>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 backdrop-blur-sm transition-all shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700">
                      Expected {edu.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mt-4">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1">
                    {edu.institution}
                  </p>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {edu.details}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Academic Score:</span>
                    <span className="font-bold text-teal-300">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
