import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const roles = [
  "UX Designer",
  "Accessibility Lead",
  "Design System Architect",
  "Front-End Contributor",
];

const complianceBullets = [
  "Ran Axe audits to identify WCAG violations",
  "Created a remediation report for accessibility and UI inconsistencies",
  "Adjusted brand colors and interface patterns to improve contrast and compliance",
  "Helped developers understand accessible implementation patterns",
  "Improved semantic structure, keyboard support, and screen reader considerations",
];

const systemBullets = [
  "Rebuilt front-end styling using SCSS with a structured architecture",
  "Removed duplicated and bloated CSS",
  "Created an internal NPM-based styling package for consistent product styling",
  "Established a centralized source of truth for visual tokens and reusable patterns",
  "Partnered with product and engineering to support a broader 2.0 redesign direction",
];

const impact = [
  "Reduced design and development inconsistency",
  "Improved accessibility and compliance confidence",
  "Created stronger alignment between Figma, React, and SCSS implementation",
  "Laid the groundwork for faster feature rollout through shared styling and reusable patterns",
];

const stack = [
  "Figma",
  "React",
  "SCSS",
  "HTML",
  "JavaScript",
  "WCAG",
  "Axe",
  "Design Systems",
  "NPM",
  "Accessibility",
];

const takeaways = [
  "Accessibility can reveal deeper system problems.",
  "Design systems are about speed, clarity, and consistency.",
  "A small remediation effort can become a platform-level improvement.",
  "UX ownership matters most when design and code overlap.",
];

export const metadata = {
  title: "SpyCloud Design System + Accessibility | Chris Willoughby",
  description:
    "A cinematic case study about accessibility remediation, design-system foundations, and frontend cleanup for SpyCloud.",
};

function SystemPanel() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_28px_110px_rgba(0,0,0,0.46)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(125,211,252,0.16),transparent_36%),radial-gradient(circle_at_50%_80%,rgba(30,64,175,0.16),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:58px_58px] opacity-30" />
      <div className="absolute inset-0 opacity-[0.15] hero-grain" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/10" />
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/12" />
      <div className="absolute left-8 right-8 top-10 grid grid-cols-3 gap-4 opacity-45">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-16 rounded-xl border border-white/10 bg-black/20"
          />
        ))}
      </div>
      <div className="relative z-10 flex min-h-[420px] items-center justify-center px-10">
        <div className="rounded-2xl border border-white/10 bg-black/45 px-8 py-7 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <Image
            src="/images/work/spycloud/logo.svg"
            alt="SpyCloud logo"
            width={360}
            height={108}
            priority
            className="h-auto w-[260px] md:w-[360px]"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />
    </div>
  );
}

export default function SpyCloudPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_10%,rgba(125,211,252,0.12),transparent_31%),radial-gradient(circle_at_80%_18%,rgba(30,64,175,0.16),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.14] hero-grain" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] hero-scanlines" />

        <div className="container mx-auto grid max-w-7xl gap-10 px-6 py-8 md:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="animate-slide-up">
            <Button
              variant="ghost"
              asChild
              className="mb-10 text-white/58 hover:bg-white/[0.04] hover:text-white"
            >
              <Link href="/work">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to Work
              </Link>
            </Button>

            <Badge
              variant="outline"
              className="mb-5 border-cyan-100/15 bg-black/35 text-[10px] uppercase tracking-[0.22em] text-cyan-50/70 backdrop-blur-md"
            >
              SpyCloud · Design Systems · Accessibility · React / SCSS
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              SpyCloud Design System + Accessibility
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-2xl">
              From accessibility remediation to scalable product foundations.
            </p>
          </div>

          <div className="animate-fade-in">
            <SystemPanel />
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Overview
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Compliance work exposed a larger system opportunity.
            </h2>
          </div>
          <p className="text-xl leading-9 text-white/64 md:text-2xl">
            Initially brought in to address accessibility issues, I uncovered
            broader inconsistencies across color, spacing, component usage, and
            front-end styling. What began as remediation work evolved into a
            system-wide cleanup and the foundation for a scalable design system.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(125,211,252,0.08),transparent_32%)]" />
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              My Role
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Working where UX, accessibility, and implementation overlap.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {roles.map((role) => (
              <Badge
                key={role}
                variant="outline"
                className="border-white/10 bg-white/[0.025] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/58"
              >
                {role}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2">
          <Card className="border-white/10 bg-zinc-950/78 text-white shadow-[0_24px_90px_rgba(0,0,0,0.38)]">
            <CardHeader>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
                Phase 1
              </p>
              <CardTitle className="text-3xl tracking-tight text-white">
                Compliance + Consistency
              </CardTitle>
              <CardDescription className="pt-4">
                <ul className="grid gap-3">
                  {complianceBullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white/62"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-white/10 bg-zinc-950/78 text-white shadow-[0_24px_90px_rgba(0,0,0,0.38)]">
            <CardHeader>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
                Phase 2
              </p>
              <CardTitle className="text-3xl tracking-tight text-white">
                System Foundation
              </CardTitle>
              <CardDescription className="pt-4">
                <ul className="grid gap-3">
                  {systemBullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white/62"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Impact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Cleaner foundations for product teams.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {impact.map((item) => (
              <Card
                key={item}
                className="border-white/10 bg-zinc-950/72 text-white shadow-[0_22px_80px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-cyan-100/18 hover:bg-zinc-950"
              >
                <CardHeader>
                  <CardTitle className="text-xl leading-7 tracking-tight text-white">
                    {item}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Stack
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Design-system work from audit to implementation.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="border-white/10 bg-white/[0.025] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/58"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Key Takeaways
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              What the work made clear.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {takeaways.map((takeaway) => (
              <Card
                key={takeaway}
                className="border-white/10 bg-zinc-950/72 text-white shadow-[0_22px_80px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-cyan-100/18 hover:bg-zinc-950"
              >
                <CardHeader>
                  <CardDescription className="text-base leading-7 text-white/64">
                    {takeaway}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 px-6 py-12 text-center shadow-[0_28px_110px_rgba(0,0,0,0.46)] md:px-12 md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.11),transparent_44%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.15] hero-grain" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Want to see more?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/56">
                Explore more case studies and the experience behind the systems,
                interfaces, and production UI work.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
                >
                  <Link href="/work">
                    View More Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/12 bg-white/[0.025] text-white hover:border-cyan-100/24 hover:bg-cyan-100/[0.06] hover:text-white"
                >
                  <Link href="/resume">View Resume</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
