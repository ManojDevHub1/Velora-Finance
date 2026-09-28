"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft, Sparkles, Calendar, Info, ChevronRight } from "lucide-react";
import { FINANCE_DATA, MonthData, formatINR } from "@/data/financeData";

export function FinancialSnapshot() {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(5); // Sep by default
  const [hoveredMonthIndex, setHoveredMonthIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeIndex = hoveredMonthIndex !== null ? hoveredMonthIndex : selectedMonthIndex;
  const activeData: MonthData = FINANCE_DATA.cashFlow[activeIndex];

  const maxVal = 60000; // for chart scaling

  return (
    <section
      id="insights"
      className="py-20 md:py-28 lg:py-32 bg-brand-bg-subtle border-b border-brand-border relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-bg border border-brand-border mb-4">
            <span className="text-[11px] font-mono tracking-widest text-brand-text font-medium uppercase">
              01 / FINANCIAL SNAPSHOT
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-brand-text tracking-tight leading-[1.1] mb-4">
            See the whole picture.
          </h2>
          <p className="text-base sm:text-lg text-brand-text-muted leading-relaxed">
            Monthly cash flows shouldn’t be a mystery solved on the 30th. Inspect how your income, fixed commitments, and retained savings balance across the seasons.
          </p>
        </div>

        {/* Dynamic Metric Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {/* Income Card */}
          <motion.div
            layout
            className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-xs hover:border-brand-accent/40 transition-colors"
          >
            <div className="flex items-center justify-between text-xs text-brand-text-muted font-mono uppercase mb-3">
              <span className="flex items-center gap-1.5 font-medium">
                <ArrowDownLeft className="w-4 h-4 text-emerald-600" />
                Income
              </span>
              <span className="text-[11px] text-brand-text-muted">
                {activeData.shortMonth} &apos;26
              </span>
            </div>
            <div className="font-serif text-3xl sm:text-4xl text-brand-text mb-2">
              {formatINR(activeData.income)}
            </div>
            <p className="text-xs text-brand-text-muted">
              Consulting inflows & predictable monthly deposits.
            </p>
          </motion.div>

          {/* Expenses Card */}
          <motion.div
            layout
            className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-border shadow-xs hover:border-brand-accent/40 transition-colors"
          >
            <div className="flex items-center justify-between text-xs text-brand-text-muted font-mono uppercase mb-3">
              <span className="flex items-center gap-1.5 font-medium">
                <ArrowUpRight className="w-4 h-4 text-amber-600" />
                Expenses
              </span>
              <span className="text-[11px] text-brand-text-muted">
                {activeData.shortMonth} &apos;26
              </span>
            </div>
            <div className="font-serif text-3xl sm:text-4xl text-brand-text mb-2">
              {formatINR(activeData.expenses)}
            </div>
            <p className="text-xs text-brand-text-muted">
              Essential commitments, lifestyle, and utilities.
            </p>
          </motion.div>

          {/* Saved Card */}
          <motion.div
            layout
            className="p-5 sm:p-6 rounded-2xl bg-brand-accent-soft/40 border border-brand-accent/30 shadow-xs hover:border-brand-accent transition-colors"
          >
            <div className="flex items-center justify-between text-xs text-brand-accent font-mono uppercase mb-3">
              <span className="flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-4 h-4 text-brand-accent" />
                Saved
              </span>
              <span className="text-[11px] font-semibold text-brand-accent">
                {((activeData.savings / activeData.income) * 100).toFixed(1)}% Rate
              </span>
            </div>
            <div className="font-serif text-3xl sm:text-4xl text-brand-accent mb-2">
              {formatINR(activeData.savings)}
            </div>
            <p className="text-xs text-brand-text-muted">
              Net retained capital allocated to long-term targets.
            </p>
          </motion.div>
        </div>

        {/* Large Horizontal Cash Flow Visualization */}
        <div className="p-5 sm:p-8 rounded-2xl bg-white border border-brand-border shadow-sm">
          {/* Visual Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-border">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-brand-text">
                Monthly Inflow vs Outflow
              </h3>
              <p className="text-xs text-brand-text-muted mt-1">
                Hover or tap any month to dissect financial composition.
              </p>
            </div>

            {/* Selected Month Note Banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-bg border border-brand-border text-xs text-brand-text">
              <Info className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              <span>
                <strong>{activeData.month}:</strong> {activeData.highlight}
              </span>
            </div>
          </div>

          {/* Legend and Mobile Scroll Hint */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 pb-2 text-xs font-mono text-brand-text-muted">
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-xs bg-[#1D8F68]" />
                <span>Income</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-xs bg-[#D5D5CA]" />
                <span>Expenses</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#171918]" />
                <span>Net Retention</span>
              </div>
            </div>

            <div className="sm:hidden flex items-center gap-1 text-[11px] text-brand-accent">
              <span>Scroll horizontally</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Chart Canvas */}
          <div className="mt-4 overflow-x-auto pb-4 focus:outline-none">
            <div className="min-w-[580px] h-64 sm:h-72 relative flex items-end justify-between px-3 pt-8">
              {/* Horizontal Reference Lines */}
              <div className="absolute inset-x-0 top-12 border-b border-dashed border-brand-border/60 pointer-events-none">
                <span className="text-[10px] font-mono text-brand-text-muted/60 pl-2">₹50k</span>
              </div>
              <div className="absolute inset-x-0 top-28 border-b border-dashed border-brand-border/60 pointer-events-none">
                <span className="text-[10px] font-mono text-brand-text-muted/60 pl-2">₹35k</span>
              </div>
              <div className="absolute inset-x-0 top-44 border-b border-dashed border-brand-border/60 pointer-events-none">
                <span className="text-[10px] font-mono text-brand-text-muted/60 pl-2">₹20k</span>
              </div>

              {/* Month Columns */}
              {FINANCE_DATA.cashFlow.map((item, index) => {
                const isSelected = activeIndex === index;
                const incomeHeightPct = (item.income / maxVal) * 100;
                const expenseHeightPct = (item.expenses / maxVal) * 100;

                return (
                  <div
                    key={item.month}
                    tabIndex={0}
                    role="button"
                    aria-label={`${item.month}: Income ${formatINR(item.income)}, Expenses ${formatINR(item.expenses)}, Saved ${formatINR(item.savings)}`}
                    className={`flex-1 flex flex-col items-center justify-end h-full cursor-pointer px-2 transition-all duration-200 relative group focus-visible:outline-brand-accent rounded-lg ${
                      isSelected ? "scale-[1.02]" : "opacity-85 hover:opacity-100"
                    }`}
                    onMouseEnter={() => setHoveredMonthIndex(index)}
                    onMouseLeave={() => setHoveredMonthIndex(null)}
                    onClick={() => setSelectedMonthIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedMonthIndex(index);
                      }
                    }}
                  >
                    {/* Tooltip on active */}
                    {isSelected && (
                      <div className="absolute -top-7 bg-brand-dark text-white px-2.5 py-1 rounded text-[11px] font-mono whitespace-nowrap shadow-lg z-20 pointer-events-none">
                        Saved: {formatINR(item.savings)}
                      </div>
                    )}

                    {/* Bars Container */}
                    <div className="w-full max-w-[64px] flex items-end justify-center gap-1.5 h-full relative pb-8">
                      {/* Income Bar */}
                      <motion.div
                        className="w-1/2 rounded-t-sm transition-all"
                        style={{
                          height: `${incomeHeightPct}%`,
                          backgroundColor: isSelected ? "#1D8F68" : "#80BAA4",
                        }}
                        initial={shouldReduceMotion ? { height: `${incomeHeightPct}%` } : { height: 0 }}
                        whileInView={{ height: `${incomeHeightPct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.06 }}
                      />

                      {/* Expenses Bar */}
                      <motion.div
                        className="w-1/2 rounded-t-sm transition-all"
                        style={{
                          height: `${expenseHeightPct}%`,
                          backgroundColor: isSelected ? "#B4B4A8" : "#D4D4CA",
                        }}
                        initial={shouldReduceMotion ? { height: `${expenseHeightPct}%` } : { height: 0 }}
                        whileInView={{ height: `${expenseHeightPct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.06 + 0.04 }}
                      />
                    </div>

                    {/* Month Label */}
                    <div
                      className={`text-center py-2 border-t w-full transition-colors ${
                        isSelected
                          ? "border-brand-accent text-brand-accent font-semibold"
                          : "border-brand-border text-brand-text-muted group-hover:text-brand-text"
                      }`}
                    >
                      <span className="block font-mono text-xs">{item.shortMonth}</span>
                      <span className="block text-[10px] text-brand-text-muted font-sans">
                        {((item.savings / item.income) * 100).toFixed(0)}% saved
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footnote */}
          <div className="mt-4 pt-4 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-text-muted gap-2">
            <span>Fictional sample financial records for design portfolio preview.</span>
            <span className="font-mono">AVERAGE SAVINGS RATE: 33.8%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
