export interface MonthData {
  month: string;
  shortMonth: string;
  income: number;
  expenses: number;
  savings: number;
  highlight?: string;
}

export interface SpendingCategory {
  id: string;
  name: string;
  amount: number;
  percentage: number;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
  details: string;
}

export interface SavingsGoal {
  id: string;
  title: string;
  currentAmount: number;
  targetAmount: number;
  percentage: number;
  remainingAmount: number;
  targetDate: string;
  monthlyPace: string;
  category: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  featured?: boolean;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FINANCE_DATA = {
  // Key metrics
  overview: {
    totalBalance: 248650,
    monthlyChange: 18420,
    monthlyChangePercentage: "+8.0%",
    income: 52000,
    expenses: 33580,
    savings: 18420,
    savingsRate: 35.4, // percentage
    currencySymbol: "₹",
  },

  // Monthly cashflow data (Apr - Sep)
  cashFlow: [
    {
      month: "April 2026",
      shortMonth: "Apr",
      income: 48500,
      expenses: 34200,
      savings: 14300,
      highlight: "Annual health premium renew",
    },
    {
      month: "May 2026",
      shortMonth: "May",
      income: 50000,
      expenses: 32800,
      savings: 17200,
      highlight: "Discretionary spending trimmed",
    },
    {
      month: "June 2026",
      shortMonth: "Jun",
      income: 51000,
      expenses: 35100,
      savings: 15900,
      highlight: "Summer travel booking",
    },
    {
      month: "July 2026",
      shortMonth: "Jul",
      income: 50500,
      expenses: 31900,
      savings: 18600,
      highlight: "Utility bills optimized",
    },
    {
      month: "August 2026",
      shortMonth: "Aug",
      income: 51800,
      expenses: 34100,
      savings: 17700,
      highlight: "Weekend dining increased",
    },
    {
      month: "September 2026",
      shortMonth: "Sep",
      income: 52000,
      expenses: 33580,
      savings: 18420,
      highlight: "Current month — healthy 35.4% savings rate",
    },
  ] as MonthData[],

  // Spending categories
  spendingCategories: [
    {
      id: "bills",
      name: "Bills",
      amount: 7200,
      percentage: 21.4,
      change: "-2.1%",
      changeType: "decrease",
      details: "Rent, electricity, high-speed fiber & insurance premiums.",
    },
    {
      id: "food",
      name: "Food",
      amount: 6420,
      percentage: 19.1,
      change: "+18.0%",
      changeType: "increase",
      details: "Weekly artisanal groceries and Friday evening dining.",
    },
    {
      id: "shopping",
      name: "Shopping",
      amount: 4800,
      percentage: 14.3,
      change: "+4.2%",
      changeType: "increase",
      details: "Books, minimal home office setup & ergonomic chair.",
    },
    {
      id: "transport",
      name: "Transport",
      amount: 2350,
      percentage: 7.0,
      change: "-6.0%",
      changeType: "decrease",
      details: "Metro transit passes, rideshare, and weekend fuel.",
    },
    {
      id: "entertainment",
      name: "Entertainment",
      amount: 1840,
      percentage: 5.5,
      change: "0.0%",
      changeType: "neutral",
      details: "Audio streaming, independent film subscriptions, museum tickets.",
    },
  ] as SpendingCategory[],

  // Intelligence briefing
  intelligenceReport: {
    badge: "VELORA INSIGHT",
    date: "SEPTEMBER 2026",
    title: "An easier way to understand your habits.",
    mainInsight: "Dining spending increased 18% compared with August.",
    supportingExplanation: "The increase mainly came from higher weekend spending.",
    secondaryInsights: [
      { text: "Grocery spending remained stable throughout the month", trend: "stable" },
      { text: "Transport costs decreased 6% following hybrid commute", trend: "positive" },
      { text: "Savings rate improved this month to 35.4%", trend: "positive" },
    ],
    ctaText: "View spending breakdown →",
  },

  // Savings goals
  savingsGoals: {
    primary: {
      id: "laptop",
      title: "NEW LAPTOP",
      currentAmount: 72000,
      targetAmount: 90000,
      percentage: 80,
      remainingAmount: 18000,
      targetDate: "November 2026",
      monthlyPace: "₹9,000 / mo",
      category: "Hardware",
    } as SavingsGoal,
    secondary: [
      {
        id: "emergency",
        title: "Emergency Fund",
        currentAmount: 45000,
        targetAmount: 75000,
        percentage: 60,
        remainingAmount: 30000,
        targetDate: "March 2027",
        monthlyPace: "₹5,000 / mo",
        category: "Security",
      },
      {
        id: "travel",
        title: "Travel",
        currentAmount: 28500,
        targetAmount: 40000,
        percentage: 71,
        remainingAmount: 11500,
        targetDate: "December 2026",
        monthlyPace: "₹3,830 / mo",
        category: "Leisure",
      },
    ] as SavingsGoal[],
  },

  // Dark section projection
  projection: {
    targetAmountDisplay: "₹4.8L",
    label: "Projected savings over 24 months",
    headline: "Your future\nis a number.",
    supportingText: "Small decisions become meaningful when you can see them clearly.",
    cta: "Explore your plan →",
    milestones: [
      { month: "Month 6", amount: "₹1.1L", growth: "+₹18k/mo" },
      { month: "Month 12", amount: "₹2.3L", growth: "+Compounding" },
      { month: "Month 18", amount: "₹3.5L", growth: "+Buffer" },
      { month: "Month 24", amount: "₹4.8L", growth: "Target reached" },
    ],
  },

  // How Velora works (4 stages)
  workflow: [
    {
      number: "01",
      title: "TRACK",
      tagline: "Know exactly where your money goes.",
      description: "Every outflow and deposit is quietly categorized without noisy alerts or intrusive notifications.",
      previewType: "transactions",
      items: [
        { name: "Organic Market", cat: "Groceries", date: "Sep 27", amount: "-₹1,450" },
        { name: "Metro Transit Card", cat: "Transport", date: "Sep 25", amount: "-₹600" },
        { name: "Consulting Inflow", cat: "Income", date: "Sep 24", amount: "+₹22,000" },
        { name: "Coffee Roasters", cat: "Dining", date: "Sep 23", amount: "-₹280" },
      ],
    },
    {
      number: "02",
      title: "UNDERSTAND",
      tagline: "Turn spending into meaningful patterns.",
      description: "See where your money actually goes over weeks and months, distinguishing essential commitments from flexible habits.",
      previewType: "categories",
      breakdown: [
        { label: "Fixed Essentials", percent: 45, color: "#1D8F68" },
        { label: "Discretionary Living", percent: 20, color: "#3FB389" },
        { label: "Direct Savings", percent: 35, color: "#8AD4B8" },
      ],
    },
    {
      number: "03",
      title: "PLAN",
      tagline: "Give every goal a number.",
      description: "Define real milestones—from emergency peace of mind to upcoming trips—and watch continuous pacing keep you on track.",
      previewType: "goals",
      goalSummary: {
        name: "Quarterly Target",
        saved: "₹1,45,500",
        target: "₹2,05,000",
        pace: "On pace for early arrival",
      },
    },
    {
      number: "04",
      title: "MOVE FORWARD",
      tagline: "See what your next month could look like.",
      description: "Forward-looking projections remove month-end surprises, helping you make calm choices with quiet conviction.",
      previewType: "projection",
      forecast: {
        projectedSavings: "₹19,200",
        confidence: "High stability",
        buffer: "₹14,500 reserve cushion",
      },
    },
  ],

  // Habits section
  habits: [
    {
      number: "01",
      title: "Spend intentionally",
      text: "Understand every transaction in context so you direct your resources toward what genuinely matters.",
    },
    {
      number: "02",
      title: "Save consistently",
      text: "Automate steady progress toward meaningful targets without feeling restricted or burdened by rigid budgets.",
    },
    {
      number: "03",
      title: "Plan confidently",
      text: "Gain calm foreknowledge of upcoming expenses and cash flow swings before they ever arrive.",
    },
  ],

  // Pricing plans
  pricingPlans: [
    {
      id: "free",
      name: "FREE",
      price: "₹0",
      period: "forever",
      description: "Essential clarity for individuals starting their financial rhythm.",
      features: [
        "Basic spending tracking",
        "Monthly overview",
        "Savings goals (up to 2)",
        "Standard category breakdowns",
        "Manual transaction tagging",
      ],
    },
    {
      id: "pro",
      name: "PRO",
      price: "₹299",
      period: "per month",
      featured: true,
      description: "Comprehensive financial intelligence for focused professionals.",
      features: [
        "Advanced insights & trends",
        "Detailed spending analysis",
        "Cash-flow trends (multi-year)",
        "Unlimited savings goals",
        "Quarterly forward projections",
        "Custom rule definitions",
      ],
    },
    {
      id: "family",
      name: "FAMILY",
      price: "₹499",
      period: "per month",
      description: "Harmonious shared financial visibility for households and partners.",
      features: [
        "Shared household goals",
        "Multiple independent profiles (up to 4)",
        "Advanced household insights",
        "Family planning & buffers",
        "Split expense intelligence",
        "Priority architectural support",
      ],
    },
  ] as PricingPlan[],

  // FAQ items
  faq: [
    {
      id: "item-1",
      question: "What can I track with Velora?",
      answer:
        "Velora is designed to track your overall net liquidity, recurring monthly cash flows (income, fixed bills, flexible expenses), and dedicated savings goal timelines. The interface visualizes historical patterns and projected trajectories from a single calm dashboard.",
    },
    {
      id: "item-2",
      question: "How are spending insights generated?",
      answer:
        "Spending insights analyze your category patterns across billing cycles. By comparing moving averages against historical baselines, the system flags meaningful shifts (such as weekend dining increases or transit savings) and presents them as concise editorial briefings.",
    },
    {
      id: "item-3",
      question: "Can I create multiple savings goals?",
      answer:
        "Yes. On the Pro and Family tiers you can establish unlimited concurrent goals—from short-term tech replacements to multi-year contingency reserves—each with individual pacing targets and visual timelines.",
    },
    {
      id: "item-4",
      question: "Does Velora provide financial advice?",
      answer:
        "No. Velora is an organizational and visualization tool designed solely to help you observe your own numbers with clarity. It does not provide certified financial advice, investment counsel, tax recommendations, or fiduciary services. All figures shown in this demo are fictional representations for design portfolio purposes.",
    },
    {
      id: "item-5",
      question: "Is my financial data secure?",
      answer:
        "This portfolio concept website runs entirely in your local browser with static mock data and does not transmit, store, or solicit real banking credentials or personal financial records. In a production implementation, modern zero-knowledge protocols, encrypted transit channels, and local-first data principles would govern all user state.",
    },
  ] as FAQItem[],
};

// Formatter utility
export function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}
