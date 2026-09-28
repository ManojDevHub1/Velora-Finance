# Velora Finance

## Your money, made visible.

Velora Finance is a premium personal finance platform landing page concept built as a frontend engineering and UI/UX design portfolio project.

> Concept project by Manoj Kushwaha.

*Disclaimer: Velora Finance is not a real financial institution, does not provide certified financial advice, and does not conduct commercial banking activities. All figures, metrics, and accounts presented across the interface are fictional demo data created exclusively for interface demonstration purposes.*

---

## Preview

Live preview screenshots will be added soon.

---

## Live Demo

Live demo will be added after deployment.

---

## About the Project

Velora explores an alternative to generic, neon-heavy SaaS dashboards and cluttered financial spreadsheets. Positioned at the intersection of **editorial publication** and **intelligent financial tooling**, the interface is designed around clarity, intentionality, and data storytelling:

- **Spending Visibility:** Clear categorical breakdowns that contextualize everyday outflows without noisy alerts.
- **Cash-Flow Understanding:** Multi-month inflow vs. outflow visual comparisons that reveal seasonal rhythms.
- **Savings Goals:** Paced timeline tracking that connects aspirations to concrete monthly commitments.
- **Financial Briefings:** Structured analytical memos that highlight shifts and explain root causes instead of generic AI chat bubbles.
- **Data Visualization:** Bespoke SVG charts and progress timelines integrated into an asymmetric editorial layout.

---

## Key Features

- **Asymmetrical Editorial Hero:** Features a prominent display headline, an animated total balance counter (`₹2,48,650`), monthly change indicator (`+₹18,420`), and an interactive 6-month growth curve with hover and keyboard data points.
- **Monthly Cash-Flow Snapshot:** Interactive dual-bar and retention curve visualization (April–September 2026) with hover tooltips, dynamic card metric updates, and responsive horizontal touch-scroll support.
- **Editorial Philosophy Statement:** Typographic pause section featuring oversized serif type and intentional whitespace.
- **4-Stage Workflow Continuum:** Connected storytelling walkthrough across four phases—`01 TRACK`, `02 UNDERSTAND`, `03 PLAN`, and `04 MOVE FORWARD`—with tablist semantics and keyboard arrow navigation.
- **Categorical Spending Breakdown:** Proportional animated bars for essential and discretionary categories (Bills, Food, Shopping, Transport, Entertainment) with itemized notes.
- **Executive Financial Briefing Memo:** Structured monthly intelligence report highlighting specific behavioral shifts (dining increase analysis) with confirmation indicators.
- **Savings Goals & Milestones:** Dedicated timeline progress indicators (`TODAY ●───────────────○ TARGET`) for a hardware target (`₹72,000 / ₹90,000`, 80%) along with Emergency and Travel reserve tracking.
- **Dark Contrast 24-Month Roadmap:** High-contrast obsidian dark section (`#151817`) visualizing a compounding `₹4.8L` trajectory with interactive milestone markers.
- **Editorial Financial Habits:** Three structured principles outlining intentional spending, consistent saving, and confident planning.
- **Transparent Concept Pricing:** Honest tiers (`FREE`, `PRO`, `FAMILY`) featuring an interactive Monthly/Annual billing switcher with a 20% discount preview.
- **Accessible Accordion FAQ:** Single-expand accordion with full ARIA semantics (`aria-expanded`, `aria-controls`), keyboard support, and clear non-advisory statements.
- **Sticky Scroll-Spy Navigation:** Header with backdrop blur, scroll-spy section tracking, and an accessible mobile slide-out drawer with background scroll lock.
- **Interactive Local Simulation Modal:** Accessible dialog system for reviewing breakdowns, inspecting tiers, and exploring features without dead buttons.
- **Accessibility & Motion Discipline:** Semantic HTML5 hierarchy, visible focus rings, minimum 44px touch targets, and comprehensive `prefers-reduced-motion` support.

---

## Design Direction

- **Aesthetic:** Premium Fintech + Editorial Publication + Data Storytelling
- **Palette:**
  - Primary Background: `#F7F7F2` (Warm Ecru)
  - Secondary Background: `#EFEFE8` (Muted Neutral)
  - Primary Text: `#171918` (Refined Ink)
  - Secondary Text: `#606560` (Graphite Slate)
  - Primary Accent: `#1D8F68` (Deep Emerald Green)
  - Soft Accent: `#D7EDE3` (Sage Tint)
  - Dark Contrast Section: `#151817` (Obsidian Charcoal)
- **Typography:**
  - Display / Headings: `DM Serif Display` (Google Font via `next/font/google`)
  - Body & User Interface: `Inter` (Google Font via `next/font/google`)
- **Composition:** Asymmetrical editorial columns, generous vertical rhythm, thin border rules, and bespoke SVG curves rather than generic third-party chart libraries.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | React framework with static prerendering and route optimization |
| **TypeScript** | Strict type safety across all components and dataset structures |
| **Tailwind CSS** | Utility-first styling with custom editorial theme configuration |
| **Framer Motion** | Micro-interactions, spring transitions, and reduced-motion orchestration |
| **Lucide React** | Clean, consistent vector iconography |

---

## Project Structure

```text
Velora Finance/
├── app/
│   ├── globals.css                # Global styles, editorial grid, and reduced-motion rules
│   ├── icon.svg                   # Custom geometric Velora brand favicon
│   ├── layout.tsx                 # Root layout, Google fonts, and metadata configuration
│   └── page.tsx                   # Main page orchestrator connecting all 12 sections
├── components/
│   ├── CountUp.tsx                # Cubic ease-out number counter with reduced-motion support
│   ├── EditorialStatement.tsx     # Section 03: Typographic editorial pause
│   ├── FAQ.tsx                    # Section 11: Accessible ARIA accordion
│   ├── FinalCTA.tsx               # Section 12: Minimal editorial call to action
│   ├── FinancialSnapshot.tsx      # Section 02: Interactive monthly cash-flow chart
│   ├── Footer.tsx                 # Portfolio attribution, navigation, and concept disclaimer
│   ├── HabitsSection.tsx          # Section 09: Three financial habits principles
│   ├── Hero.tsx                   # Section 01: Asymmetric hero + balance overview chart
│   ├── IntelligenceReport.tsx     # Section 06: Executive financial memo
│   ├── InteractiveDemoModal.tsx   # Accessible focus-trapped dialog for walkthroughs
│   ├── Navbar.tsx                 # Sticky navigation with scroll-spy & mobile drawer
│   ├── Pricing.tsx                # Section 10: Non-manipulative pricing tiers with billing toggle
│   ├── ProjectionSection.tsx      # Section 08: Dark contrast 24-month roadmap
│   ├── SavingsGoals.tsx           # Section 07: Timeline allocation indicators
│   ├── SpendingInsights.tsx       # Section 05: Proportional categorical spending bars
│   └── WorkflowStory.tsx          # Section 04: 4-stage continuum walkthrough
├── data/
│   └── financeData.ts             # Centralized, strictly-typed mock financial dataset
├── .eslintrc.json                 # Next.js core web vitals linting configuration
├── next.config.mjs                # Next.js build configuration
├── package.json                   # Project dependencies and script definitions
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.ts             # Custom color palette and font definitions
└── tsconfig.json                  # Strict TypeScript compiler options
```

---

## Getting Started

### Prerequisites

- **Node.js:** `v18.17+` or `v20+` (tested on `v24.19.0`)
- **npm:** `v9+` or `v10+`

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd "VELORA FINANCE"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

- `npm run dev` — Starts the Next.js development server.
- `npm run build` — Compiles an optimized static production build.
- `npm run start` — Serves the production build locally.
- `npm run lint` — Runs ESLint to verify code quality and rule adherence.

---

## License & Attribution

© 2026 Velora — Portfolio Concept Project by **Manoj Kushwaha**.

This project is created strictly for educational and portfolio demonstration purposes. All company names, products, and financial numbers are fictional.
