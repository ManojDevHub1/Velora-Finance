"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FINANCE_DATA } from "@/data/financeData";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export function WorkflowStory() {
  const [activeStage, setActiveStage] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const stages = FINANCE_DATA.workflow;
  const currentStage = stages[activeStage];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowLeft") {
      setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1));
    }
  };

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 lg:py-32 bg-brand-bg-subtle border-b border-brand-border relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-bg border border-brand-border mb-4">
            <span className="text-[11px] font-mono tracking-widest text-brand-text font-medium uppercase">
              02 / HOW IT WORKS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-brand-text tracking-tight leading-[1.12]">
            From transactions
            <br />
            to understanding.
          </h2>
          <p className="text-base sm:text-lg text-brand-text-muted mt-4 leading-relaxed">
            Financial progress isn’t about obsessive daily spreadsheets. It’s an effortless four-step continuum from raw activity to confident choices.
          </p>
        </div>

        {/* Stepper Navigation Tabs */}
        <div
          role="tablist"
          aria-label="Workflow stages"
          onKeyDown={handleKeyDown}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 p-1.5 rounded-2xl bg-brand-bg border border-brand-border mb-8 sm:mb-10"
        >
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.number}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`stage-panel-${stage.number}`}
                id={`stage-tab-${stage.number}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveStage(idx)}
                className={`p-3 sm:p-4 rounded-xl text-left transition-all relative focus-visible:outline-brand-accent ${
                  isActive
                    ? "bg-white text-brand-text shadow-xs border border-brand-border"
                    : "text-brand-text-muted hover:text-brand-text hover:bg-white/50"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-mono text-xs font-semibold ${
                      isActive ? "text-brand-accent" : "text-brand-text-muted"
                    }`}
                  >
                    {stage.number}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  )}
                </div>
                <div className="text-xs sm:text-sm font-semibold tracking-wide">
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Story Stage Card Container */}
        <div
          id={`stage-panel-${currentStage.number}`}
          role="tabpanel"
          aria-labelledby={`stage-tab-${currentStage.number}`}
          className="rounded-3xl bg-white border border-brand-border p-6 sm:p-10 lg:p-12 shadow-sm min-h-[440px] flex flex-col justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Narrative Copy */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-accent font-semibold">
                  <span>STAGE {currentStage.number} OF 04</span>
                  <span>•</span>
                  <span>{currentStage.title}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-text leading-tight">
                  &ldquo;{currentStage.tagline}&rdquo;
                </h3>

                <p className="text-brand-text-muted text-base sm:text-lg leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Stage controls */}
                <div className="pt-2 flex items-center gap-4">
                  {activeStage > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveStage((prev) => prev - 1)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-text-muted hover:text-brand-text transition-colors py-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0))
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent hover:text-brand-accent-hover transition-colors py-1.5"
                  >
                    <span>
                      {activeStage === stages.length - 1 ? "Start Over" : "Next Stage"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Stage-Specific Visual Representation */}
              <div className="lg:col-span-6">
                <div className="p-5 sm:p-6 rounded-2xl bg-brand-bg border border-brand-border shadow-xs">
                  {/* Visual 01: Clean Transaction Feed */}
                  {activeStage === 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-brand-text-muted pb-2 border-b border-brand-border">
                        <span>LIVE TRANSACTIONS</span>
                        <span>SEP 2026</span>
                      </div>
                      <div className="space-y-2">
                        {currentStage.items?.map((tx, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-white border border-brand-border/70 flex items-center justify-between transition-colors hover:border-brand-accent/40"
                          >
                            <div>
                              <p className="text-sm font-medium text-brand-text">
                                {tx.name}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-brand-text-muted mt-0.5">
                                <span className="bg-brand-bg px-2 py-0.5 rounded text-[11px]">
                                  {tx.cat}
                                </span>
                                <span>{tx.date}</span>
                              </div>
                            </div>
                            <span
                              className={`font-mono text-sm font-semibold ${
                                tx.amount.startsWith("+")
                                  ? "text-emerald-700"
                                  : "text-brand-text"
                              }`}
                            >
                              {tx.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Visual 02: Meaningful Spending Bars */}
                  {activeStage === 1 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-brand-text-muted pb-2 border-b border-brand-border">
                        <span>CATEGORICAL BREAKDOWN</span>
                        <span>MONTHLY RATIO</span>
                      </div>

                      <div className="space-y-3.5 pt-1">
                        {currentStage.breakdown?.map((cat, idx) => (
                          <div key={idx} className="space-y-1.5">
                            <div className="flex justify-between text-xs text-brand-text">
                              <span className="font-medium">{cat.label}</span>
                              <span className="font-mono font-semibold">{cat.percent}%</span>
                            </div>
                            <div className="w-full h-2.5 rounded-full bg-brand-border/60 overflow-hidden">
                              <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: cat.color }}
                                initial={shouldReduceMotion ? { width: `${cat.percent}%` } : { width: 0 }}
                                animate={{ width: `${cat.percent}%` }}
                                transition={{ duration: 0.6, delay: idx * 0.08 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-brand-border text-xs text-brand-text-muted flex items-center gap-2 mt-4">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                        <span>35% directed towards wealth & security buffers.</span>
                      </div>
                    </div>
                  )}

                  {/* Visual 03: Savings Progress Line */}
                  {activeStage === 2 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-brand-text-muted pb-2 border-b border-brand-border">
                        <span>GOAL MILESTONE PACING</span>
                        <span>TARGET: Q4</span>
                      </div>

                      <div className="bg-white p-4 sm:p-5 rounded-xl border border-brand-border space-y-4">
                        <div className="flex justify-between items-baseline">
                          <div>
                            <span className="text-xs uppercase font-mono text-brand-text-muted block">
                              Active Goal
                            </span>
                            <span className="font-serif text-lg sm:text-xl text-brand-text">
                              {currentStage.goalSummary?.name}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-semibold text-brand-accent bg-brand-accent-soft px-2.5 py-1 rounded">
                            71% Complete
                          </span>
                        </div>

                        {/* Progress timeline visual */}
                        <div className="relative pt-2 pb-1">
                          <div className="w-full h-2 rounded-full bg-brand-bg-subtle relative">
                            <motion.div
                              className="h-full rounded-full bg-brand-accent"
                              initial={shouldReduceMotion ? { width: "71%" } : { width: 0 }}
                              animate={{ width: "71%" }}
                              transition={{ duration: 0.7 }}
                            />
                            <div className="absolute top-1/2 left-[71%] -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-brand-accent border-2 border-white shadow-xs" />
                          </div>
                          <div className="flex justify-between items-center text-[11px] font-mono text-brand-text-muted mt-2.5">
                            <span>Today: {currentStage.goalSummary?.saved}</span>
                            <span>Target: {currentStage.goalSummary?.target}</span>
                          </div>
                        </div>

                        <div className="text-xs text-brand-accent font-medium pt-1">
                          ● {currentStage.goalSummary?.pace}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visual 04: Monthly Projection Visualization */}
                  {activeStage === 3 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-brand-text-muted pb-2 border-b border-brand-border">
                        <span>OCTOBER FORECAST</span>
                        <span>CONFIDENCE 94%</span>
                      </div>

                      <div className="bg-white p-4 sm:p-5 rounded-xl border border-brand-border space-y-4">
                        <div>
                          <span className="text-xs text-brand-text-muted font-mono uppercase block">
                            Projected Surplus
                          </span>
                          <span className="font-serif text-2xl sm:text-3xl text-brand-text block mt-1">
                            {currentStage.forecast?.projectedSavings}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                          <div className="p-2.5 rounded-lg bg-brand-bg border border-brand-border">
                            <span className="text-brand-text-muted block text-[11px]">
                              Reserve Buffer
                            </span>
                            <span className="font-mono font-semibold text-brand-text">
                              {currentStage.forecast?.buffer}
                            </span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-brand-accent-soft/50 border border-brand-accent/20">
                            <span className="text-brand-accent block text-[11px]">
                              Cash Flow Outlook
                            </span>
                            <span className="font-semibold text-brand-accent">
                              {currentStage.forecast?.confidence}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
