"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenGetStarted: () => void;
}

export function Navbar({ onOpenGetStarted }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["overview", "insights", "goals", "pricing"];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { num: "01", label: "Overview", href: "#overview", id: "overview" },
    { num: "02", label: "Insights", href: "#insights", id: "insights" },
    { num: "03", label: "Goals", href: "#goals", id: "goals" },
    { num: "04", label: "Pricing", href: "#pricing", id: "pricing" },
  ];

  const handleNavLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-bg/92 backdrop-blur-md border-b border-brand-border py-3 shadow-xs"
          : "bg-transparent border-b border-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-editorial mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#overview"
            className="flex items-center gap-2.5 group focus-visible:outline-brand-accent rounded-md py-1"
            aria-label="Velora Home"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-dark flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs">
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
            <div className="flex flex-col">
              <span className="font-serif tracking-widest text-lg sm:text-xl font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                VELORA
              </span>
            </div>
          </a>

          {/* Desktop Center Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(link.href);
                  }}
                  className={`group flex items-center gap-1.5 py-1 px-2.5 rounded transition-colors relative ${
                    isActive
                      ? "text-brand-text font-medium"
                      : "text-brand-text-muted hover:text-brand-text"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="text-[11px] font-mono text-brand-text-muted group-hover:text-brand-accent transition-colors">
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenGetStarted}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-brand-text hover:bg-brand-accent rounded-lg transition-all shadow-xs active:scale-[0.98] focus-visible:outline-brand-accent min-h-[38px]"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-brand-text hover:text-brand-accent rounded-lg transition-colors focus-visible:outline-brand-accent min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden border-b border-brand-border bg-brand-bg/98 backdrop-blur-xl px-4 pt-2 pb-6 shadow-xl"
          >
            <nav className="flex flex-col space-y-2 pt-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(link.href);
                  }}
                  className={`flex items-center justify-between py-3 px-3 rounded-xl text-base transition-colors min-h-[44px] ${
                    activeSection === link.id
                      ? "bg-brand-accent-soft text-brand-text font-medium"
                      : "text-brand-text-muted hover:text-brand-text hover:bg-brand-bg-subtle"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-brand-accent">
                      {link.num}
                    </span>
                    <span>{link.label}</span>
                  </span>
                  <span className="text-xs text-brand-text-muted">→</span>
                </a>
              ))}
              <div className="pt-3 border-t border-brand-border">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGetStarted();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-brand-accent text-white font-medium text-sm hover:bg-brand-accent-hover transition-colors shadow-xs min-h-[46px]"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
