"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, ArrowDownLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import { CountUp } from "./CountUp";
import { FINANCE_DATA, formatINR } from "@/data/financeData";

interface HeroProps {
  onExplore: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  const [activePointIndex, setActivePointIndex] = useState<number>(5); // Default to latest (Sep)
  const shouldReduceMotion = useReducedMotion();

  const heroPoints = [
    { month: "Apr", balance: 212000, x: 25, y: 140 },
    { month: "May", balance: 219200, x: 80, y: 125 },
    { month: "Jun", balance: 227500, x: 138, y: 105 },
    { month: "Jul", balance: 235100, x: 196, y: 80 },
    { month: "Aug", balance: 242000, x: 254, y: 60 },
    { month: "Sep", balance: 248650, x: 315, y: 35 },
  ];

  const activePoint = heroPoints[activePointIndex];

  // SVG path curve
  const pathD = "M 25 140 Q 52 135 80 125 T 138 105 T 196 80 T 254 60 T 315 35";
  const areaD = "M 25 140 Q 52 135 80 125 T 138 105 T 196 80 T 254 60 T 315 35 L 315 175 L 25 175 Z";

  return (
    <section
      id="overview"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 overflow-hidden border-b border-brand-border scroll-mt-24"
    >
      {/* Subtle fine editorial background pattern */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-30" />

      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Asymmetrical Editorial Copy */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            {/* Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-bg-subtle border border-brand-border"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest text-brand-text font-medium uppercase">
                PERSONAL FINANCE, SIMPLIFIED
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl xl:text-[80px] font-normal tracking-tight text-brand-text leading-[1.06]"
            >
              Your money,
              <br />
              <span className="italic font-serif text-brand-accent">
                made visible.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-brand-text-muted max-w-xl leading-relaxed font-normal"
            >
              Velora gives you a clearer picture of your spending, savings, and financial goals — all in one beautifully simple place.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                type="button"
                onClick={onExplore}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-white font-medium text-sm hover:bg-brand-accent-hover transition-all duration-200 shadow-sm active:scale-[0.98] group min-h-[46px]"
              >
                <span>Explore Velora</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-brand-border bg-white/70 hover:bg-white text-brand-text font-medium text-sm transition-all duration-200 hover:border-brand-text/30 min-h-[46px]"
              >
                <span>See how it works</span>
              </a>
            </motion.div>

            {/* Supporting Label */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-3 text-xs text-brand-text-muted"
            >
              <div className="flex items-center gap-1.5 text-brand-accent">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="font-medium">Built for everyday financial clarity</span>
              </div>
              <span className="text-brand-border hidden sm:inline">•</span>
              <span className="italic text-[11px] text-brand-text-muted">Static Portfolio Simulation</span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Financial Visualization */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl bg-white p-5 sm:p-7 lg:p-8 border border-brand-border shadow-sm"
            >
              {/* Card Header & Badge */}
              <div className="flex items-start justify-between pb-5 border-b border-brand-border/70">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-brand-text-muted">
                    TOTAL BALANCE
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-brand-text font-normal tracking-tight">
                      <CountUp end={FINANCE_DATA.overview.totalBalance} prefix="₹" />
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-brand-text-muted block">
                    MONTHLY CHANGE
                  </span>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-accent-soft text-brand-accent text-xs font-semibold font-mono mt-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+₹18,420</span>
                  </div>
                  <span className="block text-[10px] text-brand-text-muted mt-0.5">
                    this month
                  </span>
                </div>
              </div>

              {/* Chart Visual Section */}
              <div className="pt-5 pb-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-brand-text-muted">
                    6-Month Growth Trajectory
                  </span>
                  <span className="text-xs font-mono text-brand-accent bg-brand-accent-soft/80 px-2 py-0.5 rounded font-medium">
                    {activePoint.month}: {formatINR(activePoint.balance)}
                  </span>
                </div>

                {/* Custom SVG Line Chart */}
                <div className="w-full h-44 sm:h-48 relative">
                  <svg
                    viewBox="0 0 340 185"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="6-month balance growth chart from April to September 2026"
                  >
                    <defs>
                      <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1D8F68" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#1D8F68" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Subtle grid lines */}
                    <line x1="20" y1="40" x2="320" y2="40" stroke="#EFEFE8" strokeDasharray="3 3" />
                    <line x1="20" y1="90" x2="320" y2="90" stroke="#EFEFE8" strokeDasharray="3 3" />
                    <line x1="20" y1="140" x2="320" y2="140" stroke="#EFEFE8" strokeDasharray="3 3" />

                    {/* Active point vertical guide line */}
                    <line
                      x1={activePoint.x}
                      y1="25"
                      x2={activePoint.x}
                      y2="175"
                      stroke="#1D8F68"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                      opacity="0.5"
                    />

                    {/* Area fill */}
                    <motion.path
                      d={areaD}
                      fill="url(#heroGradient)"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    {/* Stroke line */}
                    <motion.path
                      d={pathD}
                      fill="none"
                      stroke="#1D8F68"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />

                    {/* Interactive points */}
                    {heroPoints.map((pt, i) => {
                      const isCurrent = activePointIndex === i;
                      return (
                        <g key={pt.month}>
                          {/* Invisible larger touch target for accessibility */}
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r="16"
                            fill="transparent"
                            className="cursor-pointer"
                            tabIndex={0}
                            role="button"
                            aria-label={`${pt.month} balance: ${formatINR(pt.balance)}`}
                            onMouseEnter={() => setActivePointIndex(i)}
                            onClick={() => setActivePointIndex(i)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setActivePointIndex(i);
                              }
                            }}
                          />
                          {/* Visible point */}
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={isCurrent ? 6 : 4}
                            className="transition-all duration-150 pointer-events-none"
                            fill={isCurrent ? "#1D8F68" : "#FFFFFF"}
                            stroke="#1D8F68"
                            strokeWidth="2.5"
                          />
                          {/* Month text label */}
                          <text
                            x={pt.x}
                            y="178"
                            textAnchor="middle"
                            className={`text-[10px] font-mono select-none transition-colors ${
                              isCurrent ? "fill-[#1D8F68] font-bold" : "fill-[#606560]"
                            }`}
                          >
                            {pt.month}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Three Mini Breakdown Metrics */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-5 mt-2 border-t border-brand-border/70">
                <div className="bg-brand-bg-subtle p-2.5 sm:p-3 rounded-xl border border-brand-border/60">
                  <div className="flex items-center gap-1 text-[11px] font-mono uppercase text-brand-text-muted mb-1">
                    <ArrowDownLeft className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="truncate">Income</span>
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-brand-text">
                    <CountUp end={FINANCE_DATA.overview.income} prefix="₹" />
                  </div>
                </div>

                <div className="bg-brand-bg-subtle p-2.5 sm:p-3 rounded-xl border border-brand-border/60">
                  <div className="flex items-center gap-1 text-[11px] font-mono uppercase text-brand-text-muted mb-1">
                    <ArrowUpRight className="w-3 h-3 text-amber-600 shrink-0" />
                    <span className="truncate">Expenses</span>
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-brand-text">
                    <CountUp end={FINANCE_DATA.overview.expenses} prefix="₹" />
                  </div>
                </div>

                <div className="bg-brand-accent-soft/40 p-2.5 sm:p-3 rounded-xl border border-brand-accent/20">
                  <div className="flex items-center gap-1 text-[11px] font-mono uppercase text-brand-accent mb-1">
                    <Sparkles className="w-3 h-3 text-brand-accent shrink-0" />
                    <span className="truncate">Savings</span>
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-brand-accent">
                    <CountUp end={FINANCE_DATA.overview.savings} prefix="₹" />
                  </div>
                </div>
              </div>

              {/* Subtle footer stamp */}
              <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-brand-text-muted border-t border-dashed border-brand-border/70">
                <span className="font-mono">CYCLE: 01-30 SEP 2026</span>
                <span className="text-emerald-700 font-medium">● RECONCILED</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
