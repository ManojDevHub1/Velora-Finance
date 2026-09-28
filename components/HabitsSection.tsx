"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FINANCE_DATA } from "@/data/financeData";

export function HabitsSection() {
  const habits = FINANCE_DATA.habits;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-brand-bg border-b border-brand-border relative overflow-hidden">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-bg-subtle border border-brand-border mb-4">
            <span className="text-[11px] font-mono tracking-widest text-brand-text font-medium uppercase">
              07 / FINANCIAL HABITS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-brand-text tracking-tight leading-[1.12]">
            Small patterns.
            <br />
            Meaningful progress.
          </h2>
          <p className="text-base sm:text-lg text-brand-text-muted mt-4 leading-relaxed">
            Sustainable wealth is not built through painful restriction, but through calm clarity and deliberate compounding.
          </p>
        </div>

        {/* Three Editorial Principle Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-4">
          {habits.map((habit, idx) => (
            <motion.div
              key={habit.number}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3.5 pt-6 border-t border-brand-border"
            >
              <div className="font-mono text-xs font-semibold text-brand-accent tracking-widest uppercase">
                PRINCIPLE {habit.number}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-brand-text leading-snug">
                {habit.title}
              </h3>

              <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed font-normal">
                {habit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
