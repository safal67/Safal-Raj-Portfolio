import React from 'react';
import { X, FileText, CheckCircle, User, Calendar, Tag } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PRDModal({ prdId, onClose }) {
  if (!prdId) return null;

  const prd = portfolioData.samplePRDs.find((p) => p.id === prdId) || portfolioData.samplePRDs[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {prd.status}
                </span>
                <span className="text-xs text-slate-400">Version {prd.version}</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">{prd.title}</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body - Scrollable PRD Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-wrap gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-cyan-400" />
              <span>Author: <strong className="text-slate-200">{prd.author}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Approved & Shipped</span>
            </div>
          </div>

          {prd.sections.map((section, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/80">
              <h4 className="text-base font-bold text-cyan-400 mb-3 flex items-center gap-2">
                {section.heading}
              </h4>
              <div className="text-slate-300 whitespace-pre-line leading-relaxed font-sans text-sm">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
          >
            Close PRD Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
