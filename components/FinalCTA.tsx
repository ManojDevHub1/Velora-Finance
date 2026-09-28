"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUp } from "lucide-react";

interface FinalCTAProps {
  onExplore: () => void;
}

export function FinalCTA({ onExplore }: FinalCTAProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-brand-bg relative overflow-hidden border-b border-brand-border">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-bg-subtle border border-brand-border">
            <span className="text-[11px] font-mono tracking-widest text-brand-text font-medium uppercase">
              10 / BEGIN YOUR CLARITY
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-brand-text tracking-tight leading-[1.08]">
            Know your money.
            <br />
            <span className="italic font-serif text-brand-accent">
              Plan what comes next.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-brand-text-muted leading-relaxed max-w-xl mx-auto font-normal">
            See your spending clearly, track your goals, and build better financial habits with Velora.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={onExplore}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-brand-accent text-white font-medium text-sm hover:bg-brand-accent-hover transition-all duration-200 shadow-sm active:scale-[0.98] group min-h-[48px] focus-visible:outline-brand-accent"
            >
              <span>Explore Velora</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-brand-border bg-white hover:bg-brand-bg-subtle text-brand-text font-medium text-sm transition-all duration-200 min-h-[48px] focus-visible:outline-brand-accent"
            >
              <ArrowUp className="w-4 h-4 text-brand-text-muted" />
              <span>Back to overview</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
