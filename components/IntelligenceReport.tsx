"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { FINANCE_DATA } from "@/data/financeData";

interface IntelligenceReportProps {
  onOpenBreakdown: () => void;
}

export function IntelligenceReport({ onOpenBreakdown }: IntelligenceReportProps) {
  const report = FINANCE_DATA.intelligenceReport;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="briefing"
      className="py-20 md:py-28 lg:py-32 bg-brand-bg-subtle border-b border-brand-border relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-bg border border-brand-border">
              <span className="text-[11px] font-mono tracking-widest text-brand-text font-medium uppercase">
                04 / FINANCIAL BRIEFING
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-brand-text tracking-tight leading-[1.12]">
              {report.title}
            </h2>

            <p className="text-base sm:text-lg text-brand-text-muted leading-relaxed">
              Raw figures rarely change behavior. Velora synthesizes your seasonal rhythms into concise monthly editorial briefings—identifying what shifted and why.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBreakdown}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-text text-white font-medium text-sm hover:bg-brand-dark transition-all duration-200 shadow-sm active:scale-[0.98] group min-h-[46px]"
              >
                <span>{report.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Report Panel (No chatbot, no robot, no AI brain) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-white border border-brand-border p-6 sm:p-9 lg:p-10 shadow-sm relative overflow-hidden"
            >
              {/* Report Header Metadata */}
              <div className="flex items-center justify-between pb-6 border-b border-brand-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-bg-subtle border border-brand-border flex items-center justify-center text-brand-accent">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-brand-accent tracking-wider uppercase block">
                      {report.badge}
                    </span>
                    <span className="text-[11px] text-brand-text-muted">
                      EXECUTIVE MONTHLY MEMO
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono text-xs font-semibold text-brand-text uppercase block">
                    {report.date}
                  </span>
                  <span className="text-[11px] text-brand-text-muted font-mono">
                    STATUS: AUDITED
                  </span>
                </div>
              </div>

              {/* Main Insight Section */}
              <div className="py-7 border-b border-brand-border/70 space-y-3">
                <div className="inline-block px-2.5 py-1 rounded bg-amber-50 text-amber-800 text-xs font-mono font-medium border border-amber-200/60">
                  FLAGGED SHIFT
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-text font-normal leading-snug">
                  &ldquo;{report.mainInsight}&rdquo;
                </h3>

                <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed max-w-xl">
                  {report.supportingExplanation}
                </p>

                {/* Subtle Mini Comparison */}
                <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-brand-bg-subtle border border-brand-border">
                    <span className="text-brand-text-muted block text-[10px]">
                      AUG DINING
                    </span>
                    <span className="font-semibold text-brand-text text-sm">
                      ₹5,440
                    </span>
                  </div>
                  <span className="text-brand-text-muted hidden sm:inline">→</span>
                  <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/50">
                    <span className="text-amber-800 block text-[10px]">
                      SEP DINING (+18%)
                    </span>
                    <span className="font-semibold text-amber-900 text-sm">
                      ₹6,420
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary Insights Checklist */}
              <div className="pt-6 space-y-3.5">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-text-muted block">
                  SECONDARY OBSERVATIONS
                </span>

                <div className="space-y-2.5">
                  {report.secondaryInsights.map((insight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-brand-bg-subtle/70 border border-brand-border/60 flex items-center justify-between text-xs sm:text-sm text-brand-text gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                        <span>{insight.text}</span>
                      </div>
                      <span className="text-xs font-mono text-brand-accent shrink-0 pl-1">
                        Confirmed
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Report Footer */}
              <div className="mt-7 pt-4 border-t border-dashed border-brand-border/80 flex flex-wrap items-center justify-between text-xs text-brand-text-muted font-mono gap-2">
                <span>PREPARED FOR CLIENT PORTFOLIO</span>
                <button
                  type="button"
                  onClick={onOpenBreakdown}
                  className="text-brand-accent hover:underline font-medium focus-visible:outline-brand-accent rounded"
                >
                  Drill down into ledger →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
