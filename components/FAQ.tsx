"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FINANCE_DATA } from "@/data/financeData";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("item-1");
  const shouldReduceMotion = useReducedMotion();
  const items = FINANCE_DATA.faq;

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-brand-bg border-b border-brand-border relative overflow-hidden">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-bg-subtle border border-brand-border">
              <span className="text-[11px] font-mono tracking-widest text-brand-text font-medium uppercase">
                09 / QUESTIONS & DETAILS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-brand-text tracking-tight leading-[1.12]">
              Clarity on
              <br />
              the details.
            </h2>

            <p className="text-base sm:text-lg text-brand-text-muted leading-relaxed">
              Explore common inquiries regarding data representation, architectural boundaries, and our strictly non-advisory portfolio principles.
            </p>
          </div>

          {/* Right Column: Accessible Accordion List */}
          <div className="lg:col-span-7 space-y-3">
            {items.map((item) => {
              const isOpen = openId === item.id;
              const buttonId = `faq-btn-${item.id}`;
              const regionId = `faq-region-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "bg-white border-brand-accent/50 shadow-xs"
                      : "bg-white/60 border-brand-border hover:border-brand-border/80 hover:bg-white"
                  }`}
                >
                  <h3 className="m-0 p-0 font-normal">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={regionId}
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-brand-accent rounded-2xl group min-h-[48px]"
                    >
                      <span className="font-serif text-lg sm:text-xl text-brand-text group-hover:text-brand-accent transition-colors leading-snug">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-7 h-7 rounded-full bg-brand-bg-subtle flex items-center justify-center shrink-0 text-brand-text-muted group-hover:text-brand-text"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={regionId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-brand-text-muted leading-relaxed border-t border-brand-border/40">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
