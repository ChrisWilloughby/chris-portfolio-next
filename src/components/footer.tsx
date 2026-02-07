import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/chriswilloughby",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/chriswilloughby",
    label: "LinkedIn", 
    icon: Linkedin,
  },
  {
    href: "mailto:chris@example.com",
    label: "Email",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chris Willoughby. All rights reserved.
          </div>
          
          <nav className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
