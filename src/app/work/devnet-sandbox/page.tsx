import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stack = [
  "Bootstrap",
  "SCSS",
  "CSS Animation",
  "SVG",
  "Zeplin",
  "JavaScript",
  "Frontend Engineering",
  "Developer Platform UX",
];

const challenges = [
  "Complex SVG-heavy interface work",
  "Translating Zeplin specs into production code",
  "Maintaining responsiveness and performance",
  "Building polished animation systems using CSS",
];

const telemetryBullets = [
  "Live telemetry visualization",
  "Animated UI feedback loops",
  "Fast readability for live event audiences",
  "Hardware + digital interaction design",
];

const takeaways = [
  {
    title: "Motion With Purpose",
    body: "Animation should support understanding, not distract from it.",
  },
  {
    title: "Developer UX Is Product UX",
    body: "Developer platforms still require thoughtful information design, interaction design, and polish.",
  },
  {
    title: "Systems At Every Layer",
    body: "Systems thinking matters across SVG assets, responsive layout, animation timing, and production code.",
  },
  {
    title: "Event Interfaces Need Clarity",
    body: "Live experiences need fast comprehension, resilient visuals, and readable feedback from a distance.",
  },
];

export const metadata = {
  title: "Cisco DevNet Sandbox | Chris Willoughby",
  description:
    "A cinematic case study covering frontend systems, SVG animation, and developer platform UX for Cisco DevNet Sandbox and Tour de Cisco.",
};

export default function DevNetSandboxPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(125,211,252,0.13),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(30,64,175,0.16),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] hero-grain" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] hero-scanlines" />

        <div className="container mx-auto max-w-7xl px-6 py-8 md:py-10">
          <Button
            variant="ghost"
            asChild
            className="mb-8 text-white/58 hover:bg-white/[0.04] hover:text-white"
          >
            <Link href="/work">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
              Back to Work
            </Link>
          </Button>

          <div className="animate-fade-in relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_30px_120px_rgba(0,0,0,0.58)]">
            <div className="relative min-h-[560px] md:min-h-[680px]">
              <Image
                src="/images/work/devnet/hero.png"
                alt="Cisco DevNet Sandbox interface artwork"
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-[0.72] brightness-[0.58] contrast-125 saturate-[0.82]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/58 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/26 to-black/58" />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

              <div className="relative z-10 flex min-h-[560px] items-end md:min-h-[680px]">
                <div className="max-w-4xl px-6 pb-10 md:px-12 md:pb-14 lg:px-16">
                  <Badge
                    variant="outline"
                    className="mb-5 border-cyan-100/15 bg-black/35 text-[10px] uppercase tracking-[0.22em] text-cyan-50/70 backdrop-blur-md"
                  >
                    Cisco · Developer Platform · Frontend Engineering
                  </Badge>
                  <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                    Cisco DevNet Sandbox
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-2xl">
                    Frontend systems, SVG animation, and developer platform UX.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/5 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/15 to-transparent" />
        <div className="container mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div className="animate-slide-up">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Overview
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Production UI from precise design systems.
            </h2>
          </div>
          <p className="animate-slide-up text-xl leading-9 text-white/64 md:text-2xl">
            Built interactive frontend experiences for Cisco&apos;s DevNet Sandbox
            platform, translating Zeplin specifications and Illustrator SVG
            assets into responsive, animated production UI.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(125,211,252,0.08),transparent_32%)]" />
        <div className="container mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="animate-slide-up">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Challenge
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Making complex technical interfaces feel legible.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/55 md:text-lg">
              The work required careful translation between design intent,
              asset constraints, browser performance, and the clarity expected
              from a developer platform.
            </p>
          </div>

          <Card className="animate-slide-up overflow-hidden border-white/10 bg-zinc-950/75 py-0 text-white shadow-[0_26px_90px_rgba(0,0,0,0.42)]">
            <CardContent className="relative p-0">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.12),transparent_46%)]" />
              <div className="relative grid gap-4 p-6 md:p-8">
                {challenges.map((challenge, index) => (
                  <div
                    key={challenge}
                    className="flex items-start gap-4 rounded-xl border border-white/8 bg-black/30 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-100/18 hover:bg-white/[0.035]"
                  >
                    <span className="mt-1 font-mono text-xs text-cyan-100/45">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-6 text-white/66 md:text-base">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div className="group animate-slide-up relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_30px_110px_rgba(0,0,0,0.5)]">
            <div className="relative aspect-[16/11]">
              <Image
                src="/images/work/devnet/cycle.png"
                alt="Tour de Cisco real-time cycling event display"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover opacity-[0.76] brightness-[0.66] contrast-125 saturate-[0.78] transition duration-500 group-hover:opacity-95 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/18 to-black/30" />
              <div className="absolute inset-0 opacity-[0.16] hero-grain" />
            </div>
          </div>

          <div className="animate-slide-up">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Event Experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Tour de Cisco — Real-Time Event Experience
            </h2>
            <p className="mt-6 text-base leading-7 text-white/60 md:text-lg">
              This interactive event experience visualized real-time cycling
              data from a connected bike on an iPad display during a Cisco
              DevNet event.
            </p>
            <ul className="mt-8 grid gap-3">
              {telemetryBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white/62"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Stack
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Frontend craft across design, assets, and motion.
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

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Key Takeaways
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              What shaped the work.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {takeaways.map((takeaway) => (
              <Card
                key={takeaway.title}
                className="border-white/10 bg-zinc-950/72 text-white shadow-[0_22px_80px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-cyan-100/18 hover:bg-zinc-950"
              >
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight text-white">
                    {takeaway.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7 text-white/58">
                    {takeaway.body}
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
                Explore more case studies and the experience behind the
                systems, interfaces, and production UI work.
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
