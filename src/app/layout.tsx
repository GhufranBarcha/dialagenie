import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dial A Genie | 24/7 AI Receptionist for Businesses",
  description: "Dial A Genie is your AI-powered 24/7 virtual receptionist. Never miss a call again. Automate bookings, answer FAQs, and capture leads around the clock. No training required.",
  keywords: [
    "AI receptionist",
    "virtual receptionist",
    "24/7 call answering service",
    "AI phone answering",
    "automated receptionist",
    "AI for small business",
    "call automation software",
    "AI appointment booking",
    "missed call solution",
    "business phone AI",
    "Dial A Genie",
    "conversational AI receptionist",
    "AI customer service",
    "automated call handling",
  ],
  authors: [{ name: "Dial A Genie" }],
  creator: "Dial A Genie",
  metadataBase: new URL("https://www.dialagenie.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dial A Genie | 24/7 AI Receptionist for Businesses",
    description: "Never miss a call again. Dial A Genie's AI receptionist answers calls, books appointments, and qualifies leads around the clock — no human needed.",
    url: "https://www.dialagenie.com",
    siteName: "Dial A Genie",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dial A Genie | 24/7 AI Receptionist for Businesses",
    description: "Never miss a call again. Dial A Genie's AI receptionist answers calls, books appointments, and qualifies leads 24/7.",
    creator: "@dialagenie",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
