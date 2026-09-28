"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { FINANCE_DATA } from "@/data/financeData";

interface ProjectionSectionProps {
  onExplorePlan: () => void;
}

export function ProjectionSection({ onExplorePlan }: ProjectionSectionProps) {
  const { headline, label, targetAmountDisplay, supportingText, cta, milestones } =
    FINANCE_DATA.projection;
  const [activeMilestone, setActiveMilestone] = useState<number>(3); // Month 24 by default
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projection"
      className="py-20 sm:py-28 md:py-36 bg-brand-dark text-[#F7F7F2] relative overflow-hidden scroll-mt-24"
    >
      {/* Subtle fine dark editorial grid */}
      <div className="absolute inset-0 editorial-grid-dark pointer-events-none opacity-30" />

      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Dark Editorial Typography */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest text-brand-accent-soft uppercase">
                06 / FORWARD PROJECTION
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.08] whitespace-pre-line">
              {headline}
            </h2>

            <p className="text-base sm:text-lg text-white/70 max-w-lg leading-relaxed font-normal">
              {supportingText}
            </p>

            {/* Giant Number Callout */}
            <div className="pt-2 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-1">
                {label}
              </span>
              <div className="font-serif text-5xl sm:text-7xl md:text-8xl text-brand-accent-soft font-normal tracking-tight">
                {targetAmountDisplay}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onExplorePlan}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-white font-medium text-sm hover:bg-brand-accent-hover transition-all duration-200 shadow-md group min-h-[46px]"
              >
                <span>{cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Minimal Projected Savings Chart */}
          <div className="lg:col-span-6">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-8 rounded-3xl bg-[#1C201E] border border-white/10 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <span className="font-mono text-xs text-white/60 tracking-wider uppercase">
                  COMPOUNDING PROJECTION (24 MONTHS)
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-brand-accent-soft">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+₹18.4K / MO BASELINE</span>
                </span>
              </div>

              {/* Minimal Dark SVG Line Chart */}
              <div className="w-full h-52 sm:h-56 pt-6 relative">
                <svg
                  viewBox="0 0 400 200"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="24-month compounding trajectory chart"
                >
                  <defs>
                    <linearGradient id="darkCurveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1D8F68" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#1D8F68" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Guidelines */}
                  <line x1="20" y1="160" x2="380" y2="160" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                  <line x1="20" y1="100" x2="380" y2="100" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                  <line x1="20" y1="40" x2="380" y2="40" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

                  {/* Gradient Area Fill */}
                  <motion.path
                    d="M 20 160 C 120 150, 220 100, 380 40 L 380 180 L 20 180 Z"
                    fill="url(#darkCurveGradient)"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Projected Trajectory Line */}
                  <motion.path
                    d="M 20 160 C 120 150, 220 100, 380 40"
                    fill="none"
                    stroke="#1D8F68"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />

                  {/* Milestone Points */}
                  <circle cx="20" cy="160" r={activeMilestone === 0 ? 6 : 4} fill="#1D8F68" />
                  <circle cx="140" cy="135" r={activeMilestone === 1 ? 6 : 4} fill="#1D8F68" />
                  <circle cx="260" cy="90" r={activeMilestone === 2 ? 6 : 4} fill="#1D8F68" />
                  <circle cx="380" cy="40" r={activeMilestone === 3 ? 7 : 5} fill="#D7EDE3" stroke="#1D8F68" strokeWidth="2.5" />
                </svg>
              </div>

              {/* Milestones Grid Below Chart */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-6 border-t border-white/10">
                {milestones.map((m, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveMilestone(idx)}
                    onMouseEnter={() => setActiveMilestone(idx)}
                    className={`p-3 rounded-xl border text-left transition-all focus-visible:outline-brand-accent ${
                      activeMilestone === idx
                        ? "bg-white/15 border-brand-accent"
                        : "bg-white/5 border-white/5 hover:bg-white/10"
                    }`}
                  >
                    <span className="text-[10px] font-mono text-white/50 block">
                      {m.month}
                    </span>
                    <span className="font-mono text-sm sm:text-base font-semibold text-white block mt-0.5">
                      {m.amount}
                    </span>
                    <span className="text-[10px] text-brand-accent-soft block mt-0.5 font-mono">
                      {m.growth}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-4 text-center">
                <span className="text-[11px] font-mono text-white/40">
                  Assumes constant monthly surplus with steady reserve allocation.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
