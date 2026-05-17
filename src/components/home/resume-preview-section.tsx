"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeRoles } from "@/data/resume";

export function ResumePreviewSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const latestRoles = resumeRoles.slice(0, 3);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 border-b border-white/5"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
                Experience
              </h2>
              <p className="text-lg text-white/50">
                Recent roles and impact
              </p>
            </div>
          </div>

          <div className="space-y-6 mb-10">
            {latestRoles.map((role, index) => (
              <div
                key={role.id}
                className="p-6 rounded-xl border border-white/8 bg-white/[0.02] backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {role.title}
                    </h3>
                    <p className="text-white/60">
                      {role.company}
                      {role.location && ` · ${role.location}`}
                    </p>
                  </div>
                  <div className="text-sm text-white/40 whitespace-nowrap">
                    {role.startDate} – {role.endDate || "Present"}
                  </div>
                </div>
                <ul className="space-y-2">
                  {role.bullets.slice(0, 2).map((bullet, i) => (
                    <li key={i} className="text-sm text-white/50 leading-relaxed">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 text-white"
          >
            <Link href="/resume">
              View Full Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
