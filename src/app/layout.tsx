import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Hussien | Junior Flutter Developer | Mobile App Engineer",
  description: "Self-driven Junior Flutter Developer with 2+ years of experience building production-ready, cross-platform mobile applications using Clean Architecture, BLoC, and Gemini AI.",
  keywords: [
    "Ahmed Hussien Abd El-Razik",
    "Flutter Developer",
    "Junior Flutter Developer",
    "Dart Developer",
    "Mobile App Developer",
    "Next.js Portfolio",
    "Clean Architecture Flutter",
    "Gemini AI Flutter",
    "Android Developer",
    "iOS Developer",
    "Kafr El Sheikh",
    "Egypt",
  ],
  authors: [{ name: "Ahmed Hussien Abd El-Razik" }],
  openGraph: {
    title: "Ahmed Hussien | Junior Flutter Developer | Mobile App Engineer",
    description: "Portfolio of Ahmed Hussien, Junior Flutter Developer building high-performance mobile apps.",
    url: "https://ahmed-hussien.dev",
    siteName: "Ahmed Hussien Portfolio",
    type: "website",
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
      className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}
    >
      <body className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen selection:bg-[#02569B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
