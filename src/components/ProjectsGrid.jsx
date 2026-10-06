import React, { useState } from 'react';
import { FolderGit2, FileText, ArrowUpRight, TrendingUp, Cloud, Target, ShieldCheck, BarChart3, Truck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsGrid({ onOpenPRD }) {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Product & Strategy', 'Brand & Marketing', 'Analytics & Data', 'Growth & Content'];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Product & Strategy') return p.tags.includes('Product Strategy') || p.tags.includes('PRD') || p.tags.includes('Supply Chain');
    if (activeFilter === 'Brand & Marketing') return p.tags.includes('Brand Strategy') || p.tags.includes('Customer Personas');
    if (activeFilter === 'Analytics & Data') return p.tags.includes('FinOps') || p.tags.includes('Regression Analysis') || p.tags.includes('Machine Learning');
    if (activeFilter === 'Growth & Content') return p.tags.includes('A/B Testing') || p.tags.includes('SEO');
    return true;
  });

  const getProjectIcon = (title) => {
    if (title.includes('SaaS') || title.includes('PRD')) return <FileText className="w-5 h-5 text-cyan-400" />;
    if (title.includes('FinOps') || title.includes('Cloud')) return <Cloud className="w-5 h-5 text-teal-400" />;
    if (title.includes('Pricing') || title.includes('Regression')) return <BarChart3 className="w-5 h-5 text-blue-400" />;
    if (title.includes('Supply Chain')) return <Truck className="w-5 h-5 text-amber-400" />;
    if (title.includes('Growth') || title.includes('PrepBee')) return <TrendingUp className="w-5 h-5 text-emerald-400" />;
    return <Target className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <section id="projects" className="py-20 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
              Complete Project Portfolio ({projects.length} Initiatives)
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Product, Strategy & Analytics Projects
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Comprehensive list of projects across corporate internships and academic PM coursework.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between shadow-lg shadow-black/40"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {getProjectIcon(project.title)}
                  </div>
                  
                  {project.hasPRD && (
                    <button
                      onClick={() => onOpenPRD(project.prdId)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-semibold border border-cyan-500/30 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      View Doc
                    </button>
                  )}
                </div>

                {/* Content */}
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                  {project.organization}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Footer Tags */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 text-xs font-medium border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
