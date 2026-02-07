"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const extractHeadings = () => {
      const elements = document.querySelectorAll('h2, h3, h4');
      const items: TocItem[] = Array.from(elements).map((element) => ({
        id: element.id,
        text: element.textContent || "",
        level: parseInt(element.tagName.substring(1)),
      }));
      setHeadings(items);
    };

    extractHeadings();

    // Re-extract when content changes
    const observer = new MutationObserver(extractHeadings);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(({ id }) => 
        document.getElementById(id)
      ).filter(Boolean);

      const current = headingElements.find((element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100;
      });

      if (current) {
        setActiveId(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={cn("space-y-2", className)}>
      <h3 className="text-sm font-semibold text-foreground mb-4">
        Table of Contents
      </h3>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "block py-1 text-muted-foreground hover:text-foreground transition-colors",
                heading.level === 3 && "pl-4",
                heading.level === 4 && "pl-8",
                activeId === heading.id && "text-primary font-medium"
              )}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(heading.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
