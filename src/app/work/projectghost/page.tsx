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

const basePath = "/images/work/projectghost";

const chips = [
  "SwiftUI",
  "SwiftData",
  "Product Design",
  "UX Systems",
  "AI-Assisted Workflows",
  "macOS App",
];

const problems = [
  "Cognitive overload",
  "Weak follow-through",
  "Relationship decay",
  "Lack of strategic feedback",
  "Emotional fatigue",
];

const workflows = [
  {
    title: "Application Center",
    image: "app_center-job_form.png",
    body: "Structured opportunity records, match context, and next actions in one workspace.",
  },
  {
    title: "Relationship Management",
    image: "contact_details-view_1.png",
    body: "Contact history and follow-up context stay close to the actions they influence.",
  },
  {
    title: "Weekly Action Engine",
    image: "dashboard_screen.png",
    body: "A dashboard organized around weekly momentum instead of passive tracking.",
  },
  {
    title: "AI-Assisted Messaging",
    image: "app_center-outreach_contacts.png",
    body: "Drafting support is layered into the workflow without replacing user judgment.",
  },
];

const takeaways = [
  "Product systems matter more than feature quantity.",
  "Workflow clarity reduces cognitive load.",
  "AI should assist decisions, not overwhelm users.",
  "Strong UX requires strong architecture.",
];

export const metadata = {
  title: "ProjectGhost | Chris Willoughby",
  description:
    "A cinematic product case study for ProjectGhost, an AI-assisted outreach and relationship intelligence system for modern job search.",
};

function Screenshot({
  image,
  alt,
  className = "",
}: {
  image: string;
  alt: string;
  className?: string;
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
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover opacity-[0.88] brightness-[0.82] contrast-125 saturate-[0.82] transition duration-500 group-hover:opacity-95 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,transparent_56%,rgba(0,0,0,0.34)_100%),linear-gradient(180deg,rgba(2,6,23,0.08),transparent_45%,rgba(2,6,23,0.5))]" />
        <div className="absolute inset-0 opacity-[0.12] hero-grain" />
      </div>
    </div>
  );
}

export default function ProjectGhostPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative py-8 md:py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(125,211,252,0.13),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(30,64,175,0.16),transparent_34%)]" />
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
                  Active Build / Ongoing Product Development
                </Badge>
                <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
                  ProjectGhost
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-2xl">
                  AI-Assisted Outreach &amp; Relationship Intelligence for
                  Modern Job Search
                </p>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/56">
                  ProjectGhost is a workflow and relationship intelligence
                  system designed to reduce friction in networking, outreach,
                  and opportunity management during a modern job search.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <Badge
                      key={chip}
                      variant="outline"
                      className="border-white/10 bg-white/[0.025] text-[10px] uppercase tracking-[0.14em] text-white/50"
                    >
                      {chip}
                    </Badge>
                  ))}
                </div>
              </div>

              <Screenshot
                image="hero.png"
                alt="ProjectGhost product dashboard"
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
              Overview
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              A career command center.
            </h2>
          </div>
          <p className="text-xl leading-9 text-white/64 md:text-2xl">
            ProjectGhost began as a personal workflow problem and evolved into a
            broader product exploration around outreach, relationship
            intelligence, action prioritization, and AI-assisted messaging.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              The Problem
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              The work was never just about tracking jobs.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <Card
                key={problem}
                className="border-white/10 bg-zinc-950/72 text-white"
              >
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight text-white">
                    {problem}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6 text-white/56">
                    A recurring source of friction in modern job search
                    workflows.
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
              Core Workflows
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Organized around momentum.
            </h2>
          </div>
          <div className="grid gap-8">
            {workflows.map((workflow, index) => (
              <div
                key={workflow.title}
                className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
              >
                <Screenshot
                  image={workflow.image}
                  alt={`ProjectGhost ${workflow.title}`}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                />
                <Card className="border-white/10 bg-zinc-950/74 text-white">
                  <CardHeader>
                    <p className="font-mono text-xs text-cyan-100/45">
                      0{index + 1}
                    </p>
                    <CardTitle className="text-3xl tracking-tight text-white">
                      {workflow.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7 text-white/60">
                      {workflow.body}
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
              Key Takeaways
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              What ProjectGhost continues to prove.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {takeaways.map((takeaway) => (
              <Card
                key={takeaway}
                className="border-white/10 bg-zinc-950/72 text-white"
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
    </main>
  );
}
