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
  title: {
    default: "Chris Willoughby - Portfolio",
    template: "%s | Chris Willoughby"
  },
  description: "Full-stack developer specializing in modern web technologies. Explore my work, experience, and creative projects.",
  keywords: ["portfolio", "web development", "full-stack", "developer", "frontend", "backend"],
  authors: [{ name: "Chris Willoughby" }],
  openGraph: {
    title: "Chris Willoughby - Portfolio",
    description: "Full-stack developer specializing in modern web technologies. Explore my work, experience, and creative projects.",
    type: "website",
    locale: "en_US",
    url: "https://chriswilloughby.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Willoughby - Portfolio",
    description: "Full-stack developer specializing in modern web technologies.",
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
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
