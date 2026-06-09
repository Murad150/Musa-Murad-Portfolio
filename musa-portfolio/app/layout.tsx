import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Musa Murad | Developer & Data Analyst",
    template: "%s | Muhammad Musa Murad",
  },
  description:
    "Mobile Application Developer & Data Analyst specializing in AI-driven mobile architectures, predictive analytics, and data visualization.",
  keywords: [
    "Muhammad Musa Murad",
    "Mobile App Developer",
    "Data Analyst",
    "Flutter",
    "React",
    "Python",
    "Power BI",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Musa Murad" }],
  creator: "Muhammad Musa Murad",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Musa Murad Portfolio",
    title: "Muhammad Musa Murad | Developer & Data Analyst",
    description:
      "Mobile Application Developer & Data Analyst specializing in AI-driven mobile architectures and data visualization.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Musa Murad | Developer & Data Analyst",
    description:
      "Mobile Application Developer & Data Analyst specializing in AI-driven mobile architectures.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Theme script — prevents flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem("theme");
                  if (!theme) {
                    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                  }
                  document.documentElement.classList.toggle("dark", theme === "dark");
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} font-body antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
