"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between px-4" role="navigation" aria-label="Main navigation">
          <Link 
            href="/" 
            className="text-xl font-bold text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Chris Willoughby - Home"
          >
            Chris Willoughby
          </Link>
          
          <div className="flex items-center space-x-6">
            <ul className="hidden md:flex items-center space-x-6" role="menubar">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <Button variant="outline" size="sm" asChild className="focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <Link href="/contact" aria-label="Get in touch with Chris Willoughby">
                Get in Touch
              </Link>
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}
