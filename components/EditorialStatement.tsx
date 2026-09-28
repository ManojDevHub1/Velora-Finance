"use client";

import { motion, useReducedMotion } from "framer-motion";

export function EditorialStatement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 md:py-36 lg:py-44 bg-brand-bg border-b border-brand-border relative overflow-hidden">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Main Statement (Left & Center, asymmetric) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs font-mono tracking-widest text-brand-text-muted uppercase block mb-5 sm:mb-6">
                THE EDITORIAL PHILOSOPHY
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-normal text-brand-text leading-[1.12] tracking-tight">
                Most people don’t need
                <br />
                more financial information.
                <br />
                <span className="italic font-serif text-brand-accent">
                  They need clarity.
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Supporting Copy (Offset Right side) */}
          <div className="lg:col-span-4 lg:pt-16 space-y-6">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="w-12 h-px bg-brand-accent" />

              <p className="text-base sm:text-lg md:text-xl text-brand-text-muted font-normal leading-relaxed">
                Velora turns scattered transactions and numbers into a simple picture of where your money is going — and what you can do next.
              </p>

              <div className="pt-4 border-t border-brand-border">
                <span className="text-xs font-mono text-brand-text-muted uppercase tracking-wider block">
                  Design Standard
                </span>
                <p className="text-xs text-brand-text-muted mt-1 leading-normal">
                  Reduced visual friction. No aggressive notifications. No algorithmic judgment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
