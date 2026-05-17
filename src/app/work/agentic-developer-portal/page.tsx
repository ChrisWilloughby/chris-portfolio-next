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

const basePath = "/images/work/agentic-dev-portal";

const decisions = [
  {
    title: "Docked Execution Panel",
    body: "The task surface remains connected to the repository context instead of becoming a disconnected modal.",
  },
  {
    title: "Log Color Coding",
    body: "Color and hierarchy separate normal progress, warnings, errors, and completed states at a glance.",
  },
  {
    title: "Repository-Centered IA",
    body: "The mental model starts with repository selection, then moves into task intent, execution, and review.",
  },
  {
    title: "Progressive Disclosure",
    body: "Execution details are available when needed, but the primary workflow stays calm and readable.",
  },
];

const visuals = [
  {
    title: "Repository List",
    image: "repository-list.png",
    body: "A familiar entry point that orients users around project context before agent execution begins.",
  },
  {
    title: "Repository Overview",
    image: "repository-overview.png",
    body: "A central workspace that keeps repository health, activity, and next actions visible.",
  },
  {
    title: "Agent Task Execution",
    image: "agent-task.png",
    body: "A focused task panel for instructions, context, execution state, and follow-up decisions.",
  },
  {
    title: "Completed Drawer",
    image: "completed-drawer.png",
    body: "Completed work stays inspectable so users can review what changed before moving forward.",
  },
];

export const metadata = {
  title: "Agentic Developer Portal | Chris Willoughby",
  description:
    "A product UX case study for an agentic developer portal focused on repository workflows, task execution, and AI-assisted developer operations.",
};

function Screenshot({
  image,
  alt,
  className = "",
  priority = false,
}: {
  image: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_28px_110px_rgba(0,0,0,0.46)] ${className}`}
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={`${basePath}/${image}`}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover opacity-[0.88] brightness-[0.82] contrast-125 saturate-[0.82] transition duration-500 group-hover:opacity-95 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,transparent_56%,rgba(0,0,0,0.34)_100%),linear-gradient(180deg,rgba(2,6,23,0.08),transparent_45%,rgba(2,6,23,0.5))]" />
        <div className="absolute inset-0 opacity-[0.12] hero-grain" />
      </div>
    </div>
  );
}

export default function AgenticDeveloperPortalPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative py-8 md:py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(125,211,252,0.12),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(30,64,175,0.16),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.14] hero-grain" />
        <div className="container relative mx-auto max-w-7xl px-6">
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

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(24,24,27,0.88),rgba(3,7,18,0.98))] p-4 shadow-[0_34px_130px_rgba(0,0,0,0.56)] md:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(125,211,252,0.12),transparent_34%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div className="px-2 py-6 md:px-6 lg:py-10">
                <Badge
                  variant="outline"
                  className="mb-6 border-cyan-100/15 bg-black/35 text-[10px] uppercase tracking-[0.22em] text-cyan-50/70"
                >
                  UX Rationale / AI Workflow Systems
                </Badge>
                <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
                  Agentic Developer Portal
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-2xl">
                  A repository-first interface for AI-assisted developer
                  workflows, task execution, and operational review.
                </p>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/56">
                  The case study explores how agentic tooling can remain
                  understandable, inspectable, and calm while still exposing the
                  power of autonomous execution.
                </p>
              </div>

              <Screenshot
                image="hero.png"
                alt="Agentic Developer Portal hero interface"
                priority
                className="lg:my-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Design Problem
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              AI workflows need visible structure.
            </h2>
          </div>
          <p className="text-xl leading-9 text-white/64 md:text-2xl">
            Agentic developer tools can become confusing quickly when task
            state, repository context, logs, and outcomes compete for attention.
            This concept focuses on making execution visible without turning the
            product into a wall of system noise.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              UX Decisions
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Design tradeoffs made explicit.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {decisions.map((decision) => (
              <Card
                key={decision.title}
                className="border-white/10 bg-zinc-950/72 text-white"
              >
                <CardHeader>
                  <CardTitle className="text-2xl tracking-tight text-white">
                    {decision.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6 text-white/56">
                    {decision.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Visual Sections
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              The workflow in motion.
            </h2>
          </div>

          <div className="grid gap-8">
            {visuals.map((visual, index) => (
              <div
                key={visual.title}
                className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
              >
                <Screenshot
                  image={visual.image}
                  alt={`Agentic Developer Portal ${visual.title}`}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                />
                <Card className="border-white/10 bg-zinc-950/74 text-white">
                  <CardHeader>
                    <p className="font-mono text-xs text-cyan-100/45">
                      0{index + 1}
                    </p>
                    <CardTitle className="text-3xl tracking-tight text-white">
                      {visual.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7 text-white/60">
                      {visual.body}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Live Product Preview
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Prototype embedded in context.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/56">
              The case study includes a live product preview area so the
              workflow can be evaluated as an interaction model, not only as a
              static screenshot.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_28px_110px_rgba(0,0,0,0.46)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="text-xs uppercase tracking-[0.22em] text-white/42">
                Preview
              </span>
              <span className="h-2 w-2 rounded-full bg-cyan-200/60" />
            </div>
            <div className="aspect-[16/10] w-full bg-black">
              <iframe
                title="Agentic Developer Portal live product preview"
                src="https://agenticdevportal.netlify.app/"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
