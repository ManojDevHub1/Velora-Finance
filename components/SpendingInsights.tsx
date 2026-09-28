"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FINANCE_DATA, formatINR } from "@/data/financeData";
import { ArrowUpRight, ArrowDownRight, Minus, Receipt } from "lucide-react";

export function SpendingInsights() {
  const [selectedCatId, setSelectedCatId] = useState<string>("bills");
  const shouldReduceMotion = useReducedMotion();
  const categories = FINANCE_DATA.spendingCategories;

  // Find max for bar proportions
  const maxAmount = Math.max(...categories.map((c) => c.amount));
  const totalSpending = categories.reduce((acc, c) => acc + c.amount, 0);

  return (
    <section
      id="spending"
      className="py-20 md:py-28 lg:py-32 bg-brand-bg border-b border-brand-border relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-bg-subtle border border-brand-border">
              <span className="text-[11px] font-mono tracking-widest text-brand-text font-medium uppercase">
                03 / SPENDING BREAKDOWN
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-brand-text tracking-tight leading-[1.12]">
              Where your
              <br />
              money goes.
            </h2>

            <p className="text-base sm:text-lg text-brand-text-muted leading-relaxed">
              Every expense belongs to a deliberate life category. Hover or tap rows to inspect historical adjustments and operational details.
            </p>

            {/* Editorial Highlight Callout */}
            <div className="p-5 rounded-2xl bg-brand-bg-subtle border border-brand-border space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                <Receipt className="w-4 h-4" />
                <span>Monthly Allocation Insight</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-brand-text leading-snug">
                Your largest monthly category is{" "}
                <span className="text-brand-accent underline decoration-brand-accent/40 underline-offset-4">
                  Bills
                </span>
                .
              </p>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                Fictional demo information: Fixed commitments accounted for 21.4% of total September outflows ({formatINR(7200)}).
              </p>
            </div>

            {/* Total Monthly Spend Counter */}
            <div className="pt-2 flex items-center justify-between text-xs font-mono border-t border-brand-border text-brand-text-muted">
              <span>TOTAL DISSECTED:</span>
              <span className="text-brand-text font-semibold text-sm">
                {formatINR(totalSpending)}
              </span>
            </div>
          </div>

          {/* Right Column: Animated Horizontal Bars & Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 sm:p-8 rounded-3xl bg-white border border-brand-border shadow-xs space-y-5">
              <div className="flex items-center justify-between text-xs font-mono text-brand-text-muted pb-3 border-b border-brand-border">
                <span>CATEGORY</span>
                <div className="flex items-center gap-6">
                  <span>SHARE</span>
                  <span>AMOUNT</span>
                </div>
              </div>

              {/* Category rows */}
              <div className="space-y-3 sm:space-y-3.5" role="list">
                {categories.map((cat, idx) => {
                  const isSelected = selectedCatId === cat.id;
                  const barWidthPercent = (cat.amount / maxAmount) * 100;

                  return (
                    <div
                      key={cat.id}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isSelected}
                      aria-label={`${cat.name}: ${formatINR(cat.amount)}, ${cat.percentage}% of total`}
                      onClick={() => setSelectedCatId(cat.id)}
                      onMouseEnter={() => setSelectedCatId(cat.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedCatId(cat.id);
                        }
                      }}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer focus-visible:outline-brand-accent ${
                        isSelected
                          ? "bg-brand-bg-subtle/80 border-brand-accent shadow-xs scale-[1.01]"
                          : "bg-white border-brand-border/70 hover:border-brand-border hover:bg-brand-bg-subtle/40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <span
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${
                              isSelected ? "bg-brand-accent" : "bg-brand-border"
                            }`}
                          />
                          <span className="font-medium text-sm sm:text-base text-brand-text">
                            {cat.name}
                          </span>
                          <span
                            className={`text-[11px] font-mono px-2 py-0.5 rounded flex items-center gap-1 ${
                              cat.changeType === "increase"
                                ? "bg-amber-50 text-amber-800 border border-amber-200/50"
                                : cat.changeType === "decrease"
                                ? "bg-emerald-50 text-emerald-800 border border-emerald-200/50"
                                : "bg-stone-100 text-stone-700"
                            }`}
                          >
                            {cat.changeType === "increase" && <ArrowUpRight className="w-3 h-3" />}
                            {cat.changeType === "decrease" && <ArrowDownRight className="w-3 h-3" />}
                            {cat.changeType === "neutral" && <Minus className="w-3 h-3" />}
                            <span>{cat.change}</span>
                          </span>
                        </div>

                        <div className="flex items-center gap-4 sm:gap-6 text-right">
                          <span className="font-mono text-xs text-brand-text-muted">
                            {cat.percentage}%
                          </span>
                          <span className="font-mono text-sm sm:text-base font-semibold text-brand-text">
                            {formatINR(cat.amount)}
                          </span>
                        </div>
                      </div>

                      {/* Animated Proportional Bar */}
                      <div className="w-full h-2 rounded-full bg-brand-border/40 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            backgroundColor: isSelected ? "#1D8F68" : "#B2B8B3",
                          }}
                          initial={shouldReduceMotion ? { width: `${barWidthPercent}%` } : { width: 0 }}
                          whileInView={{ width: `${barWidthPercent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: idx * 0.06 }}
                        />
                      </div>

                      {/* Expandable note on hover/selection */}
                      {isSelected && (
                        <motion.div
                          initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.2 }}
                          className="pt-3 mt-2 border-t border-brand-border/60 text-xs text-brand-text-muted flex items-start gap-2"
                        >
                          <span className="text-brand-accent font-semibold shrink-0">Note:</span>
                          <span>{cat.details}</span>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Footnote */}
              <div className="pt-2 text-[11px] text-brand-text-muted text-right font-mono">
                DATA AUDITED FOR 30 DAYS ENDING SEP 30
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
