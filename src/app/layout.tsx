import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chris Willoughby — UX Designer & UI Engineer",
  description:
    "Senior UX Designer and UI Engineer specializing in design systems, React, and product UX. Portfolio, case studies, and selected front-end work by Chris Willoughby.",

  keywords: [
    "Chris Willoughby",
    "UX Designer",
    "UI Engineer",
    "Product Designer",
    "Design Systems",
    "React Developer",
    "Next.js",
    "Frontend Developer",
    "Portfolio"
  ],

  authors: [{ name: "Chris Willoughby" }],
  creator: "Chris Willoughby",

  openGraph: {
    title: "Chris Willoughby — UX Designer & UI Engineer",
    description:
      "Senior UX Designer and UI Engineer specializing in design systems, React, and product UX.",
    siteName: "Chris Willoughby Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chris Willoughby — UX Designer & UI Engineer",
    description:
      "Senior UX Designer and UI Engineer specializing in design systems and React.",
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
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
