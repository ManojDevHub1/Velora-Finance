"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FinancialSnapshot } from "@/components/FinancialSnapshot";
import { EditorialStatement } from "@/components/EditorialStatement";
import { WorkflowStory } from "@/components/WorkflowStory";
import { SpendingInsights } from "@/components/SpendingInsights";
import { IntelligenceReport } from "@/components/IntelligenceReport";
import { SavingsGoals } from "@/components/SavingsGoals";
import { ProjectionSection } from "@/components/ProjectionSection";
import { HabitsSection } from "@/components/HabitsSection";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import {
  InteractiveDemoModal,
  ModalType,
} from "@/components/InteractiveDemoModal";
import { PricingPlan } from "@/data/financeData";

export default function Home() {
  const [modalState, setModalState] = useState<ModalType>(null);

  const handleOpenExplore = () => {
    setModalState({ type: "explore" });
  };

  const handleOpenBreakdown = () => {
    setModalState({ type: "breakdown" });
  };

  const handleOpenAbout = () => {
    setModalState({ type: "about" });
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setModalState({
      type: "plan",
      planName: plan.name,
      price: plan.price,
      period: plan.period,
    });
  };

  const handleCloseModal = () => {
    setModalState(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
      {/* Navigation */}
      <Navbar onOpenGetStarted={handleOpenExplore} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* Section 01: Hero */}
        <Hero onExplore={handleOpenExplore} />

        {/* Section 02: Financial Snapshot */}
        <FinancialSnapshot />

        {/* Section 03: Editorial Statement */}
        <EditorialStatement />

        {/* Section 04: How Velora Works */}
        <WorkflowStory />

        {/* Section 05: Spending Insights */}
        <SpendingInsights />

        {/* Section 06: Smart Financial Insight / Briefing */}
        <IntelligenceReport onOpenBreakdown={handleOpenBreakdown} />

        {/* Section 07: Savings Goals */}
        <SavingsGoals />

        {/* Section 08: Dark Contrast Section */}
        <ProjectionSection onExplorePlan={handleOpenExplore} />

        {/* Section 09: Financial Habits */}
        <HabitsSection />

        {/* Section 10: Pricing */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* Section 11: FAQ */}
        <FAQ />

        {/* Section 12: Final CTA */}
        <FinalCTA onExplore={handleOpenExplore} />
      </main>

      {/* Footer */}
      <Footer onOpenAbout={handleOpenAbout} />

      {/* Interactive Modal System for all actions */}
      <InteractiveDemoModal
        modalState={modalState}
        onClose={handleCloseModal}
      />
    </div>
  );
}
