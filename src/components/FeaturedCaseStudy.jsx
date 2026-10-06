import React, { useState } from 'react';
import { ShieldAlert, Play, CheckCircle2, Bot, FileText, Cpu, ArrowRight, Sparkles, RefreshCw, AlertTriangle, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FeaturedCaseStudy({ onOpenPRD }) {
  const caseStudy = portfolioData.featuredCaseStudy;
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showResult, setShowResult] = useState(true);

  const currentScenario = caseStudy.simulatorData[selectedScenarioIndex];

  const handleSimulate = () => {
    setIsSimulating(true);
    setShowResult(false);
    setTimeout(() => {
      setIsSimulating(false);
      setShowResult(true);
    }, 800);
  };

  return (
    <section id="featured-case" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Featured PM Hero Case Study
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              GenAI Mule Narrative & Fraud Analytics System
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              IndusInd Bank — Management Associate (Fraud Analytics) • Shipped to Production
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex gap-3">
            <button
              onClick={() => onOpenPRD('prd-genai-mule')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold text-xs border border-slate-700 hover:border-cyan-500/50 transition-all"
            >
              <FileText className="w-4 h-4" />
              View Full PRD Document
            </button>
          </div>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Context, Problem & Solution (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Overview Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-cyan-400" />
                The Problem & Background
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {caseStudy.problemStatement}
              </p>

              {/* Target User Pain Points */}
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {caseStudy.targetUsers.map((user, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-xs font-bold text-cyan-400">{user.role}</div>
                    <div className="text-xs text-slate-400 mt-1 leading-snug">{user.pain}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution & Architecture */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-teal-400" />
                Product Solution & Framework
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {caseStudy.solutionOverview}
              </p>

              {/* Feature Pills */}
              <div className="mt-4 space-y-2">
                {caseStudy.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {caseStudy.impactMetrics.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-cyan-400">{item.stat}</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">{item.label}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{item.detail}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Live Interactive GenAI Simulator Widget (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#0F172A] border border-cyan-500/30 shadow-2xl shadow-cyan-950/30">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Live GenAI Mule Simulator</h4>
                    <p className="text-[11px] text-slate-400">Interactive product preview</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Interactive
                </span>
              </div>

              {/* Scenario Selector Tabs */}
              <div className="mt-4">
                <label className="text-xs font-medium text-slate-400 block mb-2">Select Account Scenario:</label>
                <div className="grid grid-cols-2 gap-2">
                  {caseStudy.simulatorData.map((scen, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedScenarioIndex(idx);
                        setShowResult(true);
                      }}
                      className={`p-2.5 rounded-xl text-left text-xs font-medium transition-all ${
                        selectedScenarioIndex === idx
                          ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 font-semibold'
                          : 'bg-slate-850 border border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="truncate">{scen.accountHolder}</div>
                      <div className="text-[10px] opacity-75 mt-0.5">{idx === 0 ? '⚠️ High Risk Mule' : '✅ Legitimate User'}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Account Data Details */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span>Account ID: {currentScenario.accountId}</span>
                  <span className={`font-bold ${selectedScenarioIndex === 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                    {currentScenario.riskScore}
                  </span>
                </div>
                <div className="text-slate-300 text-[11px] leading-snug line-clamp-2">
                  <span className="text-slate-500">Raw Logs: </span>
                  {currentScenario.rawLog}
                </div>
              </div>

              {/* Run Simulation Button */}
              <button
                onClick={handleSimulate}
                disabled={isSimulating}
                className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-teal-400 transition-all disabled:opacity-50"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-black" />
                    Synthesizing LLM Narrative...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-black" />
                    Run GenAI Investigation
                  </>
                )}
              </button>

              {/* Output Result Container */}
              {isSimulating && (
                <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-center py-8">
                  <RefreshCw className="w-6 h-6 text-cyan-400 animate-spin mx-auto mb-2" />
                  <p className="text-xs text-slate-400">Processing Falcon score feed & generating narrative...</p>
                </div>
              )}

              {showResult && !isSimulating && (
                <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-cyan-500/30 text-xs">
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800 mb-2">
                    <span className="font-semibold text-cyan-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Generated Mule Narrative
                    </span>
                    <span className="text-[10px] text-slate-500">&lt; 3 sec latency</span>
                  </div>

                  {/* Rules Triggered Badges */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {currentScenario.rulesTriggered.map((rule, rIdx) => (
                      <span key={rIdx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] border border-slate-700">
                        {rule}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-200 text-[12px] leading-relaxed">
                    {currentScenario.generatedNarrative}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-800 flex gap-2">
                    <button className="flex-1 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 text-[11px] font-bold border border-red-500/30 transition-colors">
                      Execute Freeze
                    </button>
                    <button className="flex-1 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium transition-colors">
                      Flag for Review
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
