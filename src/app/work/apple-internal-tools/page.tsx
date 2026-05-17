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
  "UX/UI Developer",
  "React Contributor",
  "Design Sprint Collaboration",
  "Internal Tooling",
  "Component Systems",
];

const work = [
  "Built responsive React UI components",
  "Redesigned admin/workflow interfaces",
  "Participated in design sprints and prototyping",
  "Collaborated closely with UX and engineering",
  "Supported usability evaluation and refinement",
  "Improved implementation consistency",
];

const outcomes = [
  "Improved internal workflow clarity",
  "Supported scalable UI consistency",
  "Reduced friction between design and implementation",
  "Contributed to tools used by internal operational teams",
];

const stack = [
  "React",
  "HTML",
  "SCSS",
  "JavaScript",
  "AEM",
  "UX Design",
  "Design Sprints",
  "Component Systems",
];

const takeaways = [
  "Internal tools deserve excellent UX.",
  "Design systems improve implementation quality.",
  "Strong collaboration keeps systems scalable.",
  "Operational workflows require clarity and restraint.",
];

export const metadata = {
  title: "Apple Internal Tools | Chris Willoughby",
  description:
    "A cinematic case study about scalable internal workflow systems, React UI, and UX/UI engineering for enterprise tooling.",
};

function AbstractSystemsPanel() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_30px_120px_rgba(0,0,0,0.54)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_28%,rgba(226,232,240,0.13),transparent_34%),radial-gradient(circle_at_74%_74%,rgba(59,130,246,0.11),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />
      <div className="absolute inset-0 opacity-[0.14] hero-grain" />
      <div className="absolute inset-0 opacity-[0.18] hero-scanlines" />

      <div className="absolute left-8 right-8 top-10 grid gap-4 md:left-12 md:right-12">
        <div className="h-16 rounded-xl border border-white/10 bg-black/30" />
        <div className="grid grid-cols-3 gap-4">
          <div className="h-28 rounded-xl border border-white/10 bg-white/[0.025]" />
          <div className="h-28 rounded-xl border border-white/10 bg-white/[0.035]" />
          <div className="h-28 rounded-xl border border-white/10 bg-white/[0.025]" />
        </div>
        <div className="grid grid-cols-[0.72fr_1.28fr] gap-4">
          <div className="h-44 rounded-xl border border-white/10 bg-black/28" />
          <div className="space-y-4 rounded-xl border border-white/10 bg-black/28 p-5">
            <div className="h-3 w-2/3 rounded-full bg-white/14" />
            <div className="h-3 w-5/6 rounded-full bg-white/10" />
            <div className="h-3 w-1/2 rounded-full bg-white/10" />
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="h-12 rounded-lg border border-cyan-100/10 bg-cyan-100/[0.035]" />
              <div className="h-12 rounded-lg border border-white/10 bg-white/[0.025]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md md:left-12 md:right-12">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/42">
          Internal workflow system
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {["Standards", "Clarity", "Scale"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white/64"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-transparent to-black/36" />
    </div>
  );
}

export default function AppleInternalToolsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(226,232,240,0.1),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(30,64,175,0.14),transparent_36%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.14] hero-grain" />

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
              className="mb-5 border-white/12 bg-black/35 text-[10px] uppercase tracking-[0.22em] text-white/68 backdrop-blur-md"
            >
              Apple · Internal Tools · React · UX/UI Engineering
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Apple Internal Tools
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-2xl">
              Building scalable internal workflow systems aligned with strict
              design and engineering standards.
            </p>
          </div>

          <div className="animate-fade-in">
            <AbstractSystemsPanel />
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-white/42">
              Context
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Operational tools built for internal teams.
            </h2>
          </div>
          <p className="text-xl leading-9 text-white/64 md:text-2xl">
            The work centered on internal customer service and sales tooling:
            React-based applications, operational workflow UX, and close
            collaboration between design and engineering to turn standards into
            usable production interfaces.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(148,163,184,0.08),transparent_32%)]" />
        <div className="container mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
          <Card className="border-white/10 bg-zinc-950/78 text-white shadow-[0_24px_90px_rgba(0,0,0,0.38)]">
            <CardHeader>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/42">
                Challenge
              </p>
              <CardTitle className="text-3xl tracking-tight text-white">
                High standards under operational pressure.
              </CardTitle>
              <CardDescription className="pt-4 text-base leading-7 text-white/60">
                Internal tooling needed to balance speed and quality while
                preserving usability, consistency across interfaces, and strong
                implementation discipline.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-white/10 bg-zinc-950/78 text-white shadow-[0_24px_90px_rgba(0,0,0,0.38)]">
            <CardHeader>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/42">
                My Role
              </p>
              <CardTitle className="text-3xl tracking-tight text-white">
                UX/UI engineering across systems and workflows.
              </CardTitle>
              <div className="flex flex-wrap gap-3 pt-4">
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
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-white/42">
              What I Did
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Turning standards into usable implementation.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {work.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/8 bg-white/[0.025] px-5 py-4 text-sm leading-6 text-white/62 transition duration-300 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.04]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-white/42">
              Outcomes
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Clearer workflows and stronger implementation alignment.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {outcomes.map((item) => (
              <Card
                key={item}
                className="border-white/10 bg-zinc-950/72 text-white shadow-[0_22px_80px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-zinc-950"
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
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-white/42">
              Stack
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Practical frontend systems for internal products.
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
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-white/42">
              Key Takeaways
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              What the work reinforced.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {takeaways.map((takeaway) => (
              <Card
                key={takeaway}
                className="border-white/10 bg-zinc-950/72 text-white shadow-[0_22px_80px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-zinc-950"
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
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(226,232,240,0.09),transparent_44%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.15] hero-grain" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Want to see more?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/56">
                Explore more work and the experience behind the systems,
                interfaces, and production UI craft.
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
                  className="border-white/12 bg-white/[0.025] text-white hover:border-white/24 hover:bg-white/[0.06] hover:text-white"
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
