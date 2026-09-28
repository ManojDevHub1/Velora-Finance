"use client";

import { ShieldCheck, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenAbout: () => void;
}

export function Footer({ onOpenAbout }: FooterProps) {
  const footerLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Insights", href: "#insights" },
    { label: "Goals", href: "#goals" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <footer className="bg-brand-bg-subtle text-brand-text pt-16 pb-12 border-t border-brand-border">
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-border">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#overview"
              className="flex items-center gap-2.5 group w-fit focus-visible:outline-brand-accent rounded"
              aria-label="Velora Home"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-dark flex items-center justify-center transition-transform group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white stroke-current" fill="none">
                  <path
                    d="M5 6L12 19L19 6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="11" r="1.5" fill="#1D8F68" />
                </svg>
              </div>
              <span className="font-serif tracking-widest text-xl font-bold text-brand-text">
                VELORA
              </span>
            </a>

            <p className="text-sm text-brand-text-muted max-w-sm leading-relaxed">
              &ldquo;Your money, made visible.&rdquo; A premium personal finance editorial interface dedicated to financial clarity and intentional compounding.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border text-xs text-brand-text-muted">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>Created by Manoj Kushwaha</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-brand-text-muted block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-brand-text">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-brand-accent transition-colors focus-visible:outline-brand-accent rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Details & Policies */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-brand-text-muted block">
              Concept Transparency
            </span>
            <ul className="space-y-2 text-sm text-brand-text">
              <li>
                <button
                  type="button"
                  onClick={onOpenAbout}
                  className="hover:text-brand-accent transition-colors text-left flex items-center gap-1 focus-visible:outline-brand-accent rounded"
                >
                  <span>About Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-text-muted" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAbout}
                  className="hover:text-brand-accent transition-colors text-left focus-visible:outline-brand-accent rounded"
                >
                  Privacy (Zero-Data Policy)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAbout}
                  className="hover:text-brand-accent transition-colors text-left focus-visible:outline-brand-accent rounded"
                >
                  Terms (Non-Advisory Demo)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Editorial Legal / Portfolio Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-text-muted">
          <div>
            <p className="font-medium text-brand-text">
              © 2026 Velora — Concept project by Manoj Kushwaha.
            </p>
            <p className="text-[11px] text-brand-text-muted mt-0.5">
              Not a real financial product. Demo interface for portfolio purposes.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-brand-text-muted">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            <span>PORTFOLIO SIMULATION ONLY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
