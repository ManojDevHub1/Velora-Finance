"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, ArrowRight, Info } from "lucide-react";
import { FINANCE_DATA, PricingPlan } from "@/data/financeData";

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const shouldReduceMotion = useReducedMotion();
  const plans = FINANCE_DATA.pricingPlans;

  return (
    <section
      id="pricing"
      className="py-20 md:py-28 lg:py-32 bg-brand-bg-subtle border-b border-brand-border relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-bg border border-brand-border mb-4">
            <span className="text-[11px] font-mono tracking-widest text-brand-text font-medium uppercase">
              08 / TRANSPARENT PRICING
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-brand-text tracking-tight leading-[1.12]">
            Choose the level
            <br />
            of clarity you need.
          </h2>
          <p className="text-base sm:text-lg text-brand-text-muted mt-4 leading-relaxed">
            Honest, straightforward tiers. No lock-in contracts, no synthetic scarcity, and no dark conversion patterns.
          </p>
        </div>

        {/* Concept Project Transparency Callout */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white border border-brand-border flex items-start gap-3.5 shadow-xs">
          <Info className="w-5 h-5 text-brand-accent mt-0.5 shrink-0" />
          <div className="text-xs text-brand-text-muted leading-relaxed">
            <strong className="text-brand-text font-medium block mb-0.5">
              Portfolio Concept Demonstration
            </strong>
            Velora is an interface design project created by Manoj Kushwaha. The figures below are fictional demo pricing. Choosing any tier triggers an interactive client-side walkthrough—no card or payment processing is present.
          </div>
        </div>

        {/* Billing Cycle Switcher (Interactive Polish) */}
        <div className="flex items-center justify-start gap-3 mb-10">
          <div className="inline-flex p-1 rounded-xl bg-white border border-brand-border">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-brand-dark text-white shadow-xs"
                  : "text-brand-text-muted hover:text-brand-text"
              }`}
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                billingCycle === "annual"
                  ? "bg-brand-dark text-white shadow-xs"
                  : "text-brand-text-muted hover:text-brand-text"
              }`}
            >
              <span>Annual</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-brand-accent text-white">
                Save 20%
              </span>
            </button>
          </div>
          <span className="text-xs text-brand-text-muted hidden sm:inline italic">
            (Interactive demo switch)
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const isFeatured = plan.featured;
            // Calculate annual price display
            const displayPrice =
              billingCycle === "annual" && plan.id !== "free"
                ? plan.id === "pro"
                  ? "₹239"
                  : "₹399"
                : plan.price;

            const displayPeriod =
              billingCycle === "annual" && plan.id !== "free"
                ? "per month (billed annually)"
                : plan.period;

            return (
              <motion.div
                key={plan.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  isFeatured
                    ? "bg-white border-2 border-brand-accent shadow-md relative"
                    : "bg-white border border-brand-border shadow-xs hover:border-brand-accent/40"
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-8 px-3 py-1 rounded-full bg-brand-accent text-white font-mono text-[11px] font-semibold tracking-wider uppercase">
                    Recommended
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold tracking-widest text-brand-text uppercase">
                      {plan.name}
                    </span>
                    <span className="text-xs text-brand-text-muted font-mono">
                      DEMO TIER
                    </span>
                  </div>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-brand-border">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-4xl sm:text-5xl text-brand-text">
                        {displayPrice}
                      </span>
                      <span className="text-xs sm:text-sm text-brand-text-muted font-sans">
                        / {displayPeriod}
                      </span>
                    </div>
                    <p className="text-xs text-brand-text-muted mt-2 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-brand-text-muted block">
                      Included features:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text">
                        <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action Button */}
                <button
                  type="button"
                  onClick={() =>
                    onSelectPlan({
                      ...plan,
                      price: displayPrice,
                      period: displayPeriod,
                    })
                  }
                  className={`w-full py-3.5 px-5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] min-h-[46px] focus-visible:outline-brand-accent ${
                    isFeatured
                      ? "bg-brand-accent text-white hover:bg-brand-accent-hover shadow-sm"
                      : "bg-brand-bg-subtle hover:bg-brand-text hover:text-white text-brand-text border border-brand-border"
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
