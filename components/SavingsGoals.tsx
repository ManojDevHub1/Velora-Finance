"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FINANCE_DATA, formatINR } from "@/data/financeData";
import { Target, Calendar } from "lucide-react";

export function SavingsGoals() {
  const { primary, secondary } = FINANCE_DATA.savingsGoals;
  const [hoveredGoalId, setHoveredGoalId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="goals"
      className="py-20 md:py-28 lg:py-32 bg-brand-bg border-b border-brand-border relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-bg-subtle border border-brand-border mb-4">
            <span className="text-[11px] font-mono tracking-widest text-brand-text font-medium uppercase">
              05 / SAVINGS TIMELINES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-brand-text tracking-tight leading-[1.12]">
            Give every goal
            <br />
            a number.
          </h2>
          <p className="text-base sm:text-lg text-brand-text-muted mt-4 leading-relaxed">
            Vague resolutions fail under pressure. When aspirations are anchored to explicit timelines and monthly pacing, capital accumulation becomes inevitable.
          </p>
        </div>

        {/* Primary Goal: Large Horizontal Progress Timeline */}
        <div className="p-6 sm:p-9 lg:p-12 rounded-3xl bg-white border border-brand-border shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-7 border-b border-brand-border">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-accent uppercase tracking-wider mb-1.5">
                <Target className="w-4 h-4" />
                <span>PRIMARY CAPITAL PRIORITY • {primary.category}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-text">
                {primary.title}
              </h3>
            </div>

            <div className="text-left md:text-right">
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-brand-text">
                {formatINR(primary.currentAmount)}{" "}
                <span className="text-brand-text-muted font-normal text-lg sm:text-xl">
                  / {formatINR(primary.targetAmount)}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent-soft text-brand-accent text-xs font-mono font-bold mt-2">
                <span>{primary.percentage}% COMPLETE</span>
              </div>
            </div>
          </div>

          {/* Large Horizontal Timeline Track: TODAY ●───────────────○ TARGET */}
          <div className="py-8 sm:py-10">
            <div className="flex justify-between items-center text-xs font-mono uppercase text-brand-text-muted mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
                <span className="font-semibold text-brand-text">TODAY (₹72,000)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-brand-text bg-white" />
                <span className="font-semibold text-brand-text">TARGET (₹90,000)</span>
              </div>
            </div>

            {/* Visual Progress Timeline Bar */}
            <div className="relative w-full h-3.5 rounded-full bg-brand-bg-subtle border border-brand-border overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-brand-accent relative"
                initial={shouldReduceMotion ? { width: `${primary.percentage}%` } : { width: 0 }}
                whileInView={{ width: `${primary.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* Pacing Breakdown details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-7 sm:pt-8">
              <div className="p-4 rounded-xl bg-brand-bg-subtle border border-brand-border">
                <span className="text-[11px] font-mono text-brand-text-muted uppercase block mb-1">
                  Remaining Gap
                </span>
                <span className="font-mono text-base sm:text-lg font-semibold text-brand-text">
                  {formatINR(primary.remainingAmount)}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-brand-bg-subtle border border-brand-border">
                <span className="text-[11px] font-mono text-brand-text-muted uppercase block mb-1">
                  Required Monthly Pace
                </span>
                <span className="font-mono text-base sm:text-lg font-semibold text-brand-text">
                  {primary.monthlyPace}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-brand-accent-soft/40 border border-brand-accent/20">
                <span className="text-[11px] font-mono text-brand-accent uppercase block mb-1">
                  Projected Completion
                </span>
                <span className="font-mono text-base sm:text-lg font-semibold text-brand-accent">
                  {primary.targetDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {secondary.map((goal) => {
            const isHovered = hoveredGoalId === goal.id;
            return (
              <div
                key={goal.id}
                tabIndex={0}
                role="region"
                aria-label={`Goal: ${goal.title}`}
                onMouseEnter={() => setHoveredGoalId(goal.id)}
                onMouseLeave={() => setHoveredGoalId(null)}
                className={`p-6 sm:p-8 rounded-2xl bg-white border transition-all focus-visible:outline-brand-accent ${
                  isHovered
                    ? "border-brand-accent shadow-xs scale-[1.01]"
                    : "border-brand-border shadow-xs hover:border-brand-border"
                }`}
              >
                <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                  <div>
                    <span className="text-xs font-mono text-brand-text-muted uppercase">
                      {goal.category}
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl text-brand-text mt-0.5">
                      {goal.title}
                    </h4>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm sm:text-base font-semibold text-brand-text">
                      {formatINR(goal.currentAmount)}
                    </span>
                    <span className="text-xs text-brand-text-muted block">
                      of {formatINR(goal.targetAmount)}
                    </span>
                  </div>
                </div>

                <div className="py-5 sm:py-6 space-y-2">
                  <div className="flex justify-between text-xs font-mono text-brand-text-muted">
                    <span>Progress: {goal.percentage}%</span>
                    <span>Remaining: {formatINR(goal.remainingAmount)}</span>
                  </div>

                  <div className="w-full h-2.5 rounded-full bg-brand-bg-subtle border border-brand-border overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-brand-text"
                      initial={shouldReduceMotion ? { width: `${goal.percentage}%` } : { width: 0 }}
                      whileInView={{ width: `${goal.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-brand-text-muted pt-2 border-t border-brand-border/60">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    Target: {goal.targetDate}
                  </span>
                  <span className="font-mono text-brand-accent font-medium">
                    {goal.monthlyPace}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
