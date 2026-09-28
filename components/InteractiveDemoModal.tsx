"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Check, ArrowRight, ShieldCheck, Sparkles, PieChart, CreditCard } from "lucide-react";
import { FINANCE_DATA, formatINR } from "@/data/financeData";

export type ModalType =
  | null
  | { type: "plan"; planName: string; price: string; period: string }
  | { type: "explore" }
  | { type: "breakdown" }
  | { type: "about" };

interface InteractiveDemoModalProps {
  modalState: ModalType;
  onClose: () => void;
}

export function InteractiveDemoModal({
  modalState,
  onClose,
}: InteractiveDemoModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Focus trap & Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalState !== null) {
        onClose();
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    if (modalState !== null) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalState, onClose]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (modalState !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalState]);

  if (!modalState) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-brand-dark/65 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          ref={dialogRef}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 10 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-xl max-h-[88vh] overflow-y-auto rounded-3xl bg-brand-bg p-6 sm:p-8 shadow-2xl border border-brand-border text-brand-text"
        >
          {/* Close button */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-brand-text-muted hover:text-brand-text hover:bg-brand-bg-subtle transition-colors focus-visible:outline-brand-accent"
            aria-label="Close modal dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content Switch */}
          {modalState.type === "plan" && (
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent-soft text-brand-accent text-xs font-semibold uppercase tracking-wider mb-4">
                <CreditCard className="w-3.5 h-3.5" />
                Portfolio Concept Selection
              </div>

              <h3
                id="modal-title"
                className="font-serif text-2xl sm:text-3xl font-normal text-brand-text mb-2"
              >
                {modalState.planName} Plan Selected
              </h3>

              <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                You selected the <strong className="text-brand-text font-medium">{modalState.planName}</strong> plan at{" "}
                <span className="text-brand-accent font-semibold">{modalState.price}</span> {modalState.period}.
              </p>

              <div className="bg-brand-bg-subtle p-5 rounded-xl border border-brand-border mb-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-accent mt-0.5 shrink-0" />
                  <div className="text-xs text-brand-text-muted leading-relaxed">
                    <p className="font-medium text-brand-text mb-1">
                      No Payment Required — Concept Interface
                    </p>
                    Velora is a non-commercial portfolio concept created by Manoj Kushwaha. No credit card is required, no charges will ever occur, and no financial data is gathered.
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted">
                  Included in this tier:
                </p>
                <div className="space-y-2 text-sm text-brand-text">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Real-time local state simulations</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Multi-category spending breakdown</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>Calm editorial cash-flow visualization</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-brand-accent text-white font-medium text-sm hover:bg-brand-accent-hover transition-colors min-h-[44px]"
                >
                  <span>Continue Exploring</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl border border-brand-border text-brand-text-muted hover:text-brand-text hover:bg-brand-bg-subtle font-medium text-sm transition-colors min-h-[44px]"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}

          {modalState.type === "explore" && (
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent-soft text-brand-accent text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Interactive Overview
              </div>

              <h3
                id="modal-title"
                className="font-serif text-2xl sm:text-3xl font-normal text-brand-text mb-3"
              >
                Welcome to Velora
              </h3>

              <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                Experience the calm, editorial philosophy behind Velora. Every module below is live, responsive, and crafted to illustrate personal financial clarity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <a
                  href="#insights"
                  onClick={onClose}
                  className="p-4 rounded-xl bg-brand-bg-subtle border border-brand-border hover:border-brand-accent/50 transition-colors text-left group"
                >
                  <span className="text-xs font-mono text-brand-accent font-semibold block mb-1">
                    01 SNAPSHOT
                  </span>
                  <p className="text-sm font-medium text-brand-text group-hover:text-brand-accent transition-colors">
                    Monthly Cash Flow →
                  </p>
                  <p className="text-xs text-brand-text-muted mt-1">
                    Examine 6-month inflow & outflow curves.
                  </p>
                </a>

                <a
                  href="#spending"
                  onClick={onClose}
                  className="p-4 rounded-xl bg-brand-bg-subtle border border-brand-border hover:border-brand-accent/50 transition-colors text-left group"
                >
                  <span className="text-xs font-mono text-brand-accent font-semibold block mb-1">
                    02 BREAKDOWN
                  </span>
                  <p className="text-sm font-medium text-brand-text group-hover:text-brand-accent transition-colors">
                    Spending Dissection →
                  </p>
                  <p className="text-xs text-brand-text-muted mt-1">
                    Review Bills, Food, and lifestyle allocations.
                  </p>
                </a>

                <a
                  href="#goals"
                  onClick={onClose}
                  className="p-4 rounded-xl bg-brand-bg-subtle border border-brand-border hover:border-brand-accent/50 transition-colors text-left group"
                >
                  <span className="text-xs font-mono text-brand-accent font-semibold block mb-1">
                    03 ALLOCATION
                  </span>
                  <p className="text-sm font-medium text-brand-text group-hover:text-brand-accent transition-colors">
                    Savings Timelines →
                  </p>
                  <p className="text-xs text-brand-text-muted mt-1">
                    Track the ₹90,000 laptop and reserve targets.
                  </p>
                </a>

                <a
                  href="#projection"
                  onClick={onClose}
                  className="p-4 rounded-xl bg-brand-bg-subtle border border-brand-border hover:border-brand-accent/50 transition-colors text-left group"
                >
                  <span className="text-xs font-mono text-brand-accent font-semibold block mb-1">
                    04 FORECAST
                  </span>
                  <p className="text-sm font-medium text-brand-text group-hover:text-brand-accent transition-colors">
                    24-Month Trajectory →
                  </p>
                  <p className="text-xs text-brand-text-muted mt-1">
                    Explore the ₹4.8L dark contrast roadmap.
                  </p>
                </a>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-brand-accent text-white font-medium text-sm hover:bg-brand-accent-hover transition-colors min-h-[44px]"
              >
                <span>Continue Reading</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {modalState.type === "breakdown" && (
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent-soft text-brand-accent text-xs font-semibold uppercase tracking-wider mb-4">
                <PieChart className="w-3.5 h-3.5" />
                September 2026 Audit
              </div>

              <h3
                id="modal-title"
                className="font-serif text-2xl sm:text-3xl font-normal text-brand-text mb-2"
              >
                Spending Dissection
              </h3>

              <p className="text-brand-text-muted text-sm leading-relaxed mb-6">
                Detailed category transactions highlighting why dining increased 18% over August due to weekend leisure.
              </p>

              <div className="space-y-2.5 mb-6">
                {FINANCE_DATA.spendingCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className="p-3.5 rounded-xl bg-brand-bg-subtle border border-brand-border flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-brand-text">
                          {cat.name}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded font-mono ${
                            cat.changeType === "increase"
                              ? "bg-amber-100 text-amber-800"
                              : cat.changeType === "decrease"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-stone-200 text-stone-700"
                          }`}
                        >
                          {cat.change}
                        </span>
                      </div>
                      <p className="text-xs text-brand-text-muted mt-0.5">
                        {cat.details}
                      </p>
                    </div>
                    <div className="text-right shrink-0 pl-2">
                      <span className="font-mono text-sm font-semibold text-brand-text">
                        {formatINR(cat.amount)}
                      </span>
                      <span className="block text-[11px] text-brand-text-muted">
                        {cat.percentage}% of total
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-brand-accent-soft/50 border border-brand-accent/20 mb-6 text-xs text-brand-text-muted leading-relaxed">
                <strong className="text-brand-text block mb-1">
                  Auditor&apos;s Note (Demo Context)
                </strong>
                Dining increased to ₹6,420 from August baseline of ₹5,440. All other operational spending remained strictly within the projected seasonal threshold.
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-brand-text text-white font-medium text-sm hover:bg-brand-dark transition-colors min-h-[44px]"
              >
                Close Breakdown
              </button>
            </div>
          )}

          {modalState.type === "about" && (
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent-soft text-brand-accent text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Portfolio Concept
              </div>

              <h3
                id="modal-title"
                className="font-serif text-2xl sm:text-3xl font-normal text-brand-text mb-3"
              >
                About Velora
              </h3>

              <div className="space-y-4 text-sm text-brand-text-muted leading-relaxed mb-6">
                <p>
                  <strong className="text-brand-text">Velora</strong> is an independent portfolio concept crafted by <strong className="text-brand-text">Manoj Kushwaha</strong>. It demonstrates senior frontend architecture, high-contrast editorial typography, interactive SVG data storytelling, and accessible component design.
                </p>
                <div className="p-4 rounded-xl bg-brand-bg-subtle border border-brand-border">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">
                    Design Principles:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Editorial restraint over flashy SaaS noise</li>
                    <li>Authentic custom SVGs rather than third-party bloat</li>
                    <li>Asymmetrical layouts celebrating intentional whitespace</li>
                    <li>Strict adherence to ethical transparency & demo clarity</li>
                  </ul>
                </div>
                <p className="text-xs italic text-brand-text-muted">
                  Notice: Velora is not a real financial institution, does not manage assets, and does not provide financial advice.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-brand-accent text-white font-medium text-sm hover:bg-brand-accent-hover transition-colors min-h-[44px]"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
