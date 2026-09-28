import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Velora Finance — Your Money, Made Visible",
  description:
    "Velora is a premium personal finance concept focused on clearer spending, savings, and financial planning. Portfolio concept by Manoj Kushwaha.",
  authors: [{ name: "Manoj Kushwaha" }],
  keywords: [
    "personal finance",
    "financial clarity",
    "savings goals",
    "spending insights",
    "cash flow",
    "fintech design",
    "portfolio concept",
  ],
  openGraph: {
    title: "Velora Finance — Your Money, Made Visible",
    description:
      "A premium personal finance platform concept with editorial data storytelling, cash flow visibility, and intelligent goal tracking.",
    type: "website",
    locale: "en_US",
    siteName: "Velora Finance",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="bg-brand-bg text-brand-text min-h-screen selection:bg-brand-accent-soft selection:text-brand-dark antialiased">
        {children}
      </body>
    </html>
  );
}
