import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProjectBySlug, type Project } from "@/data/projects";

const selectedSlugs = [
  "projectghost",
  "agentic-developer-portal",
  "spycloud-design-system-accessibility",
  "cisco-devnet-sandbox",
];

const selectedCopy: Record<string, string> = {
  projectghost:
    "A native macOS product exploring AI-assisted outreach, relationship intelligence, and workflow momentum for modern job search.",
  "agentic-developer-portal":
    "UX workflow systems for AI-assisted repository management and agent execution.",
  "spycloud-design-system-accessibility":
    "Accessibility remediation that expanded into design-system foundations, token consistency, and stronger alignment between Figma, React, and SCSS.",
  "cisco-devnet-sandbox":
    "Frontend systems, SVG animation, and developer platform UX for Cisco DevNet Sandbox and a real-time event experience.",
};

const additionalExperience = [
  {
    slug: "apple-internal-tools",
    label: "Apple",
    summary:
      "Internal customer service and sales tooling with React UI components, workflow redesign, and design sprint collaboration.",
    accent: "from-slate-200/12",
    initials: "A",
  },
  {
    slug: "brightspeed-customer-service-redesign",
    label: "BrightSpeed",
    summary:
      "Customer service application redesign focused on operational clarity, agent workflows, and accessible enterprise UI patterns.",
    accent: "from-amber-200/10",
    initials: "BS",
  },
  {
    slug: "att-genai-enterprise-tools",
    label: "AT&T",
    summary:
      "NDA-safe enterprise GenAI tooling work focused on secure internal workflows, scalable frontend patterns, and usability for internal teams.",
    accent: "from-cyan-200/12",
    initials: "AT&T",
  },
];

function SelectedWorkCard({ project }: { project: Project }) {
  return (
    <Card className="group relative isolate flex h-full min-h-[640px] overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgba(24,24,27,0.86),rgba(3,7,18,0.98))] py-0 text-white shadow-[0_26px_100px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.11),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_36%)]" />
      <div className="relative h-[280px] shrink-0 overflow-hidden border-b border-white/10 bg-black">
        <Image
          src={project.image!}
          alt={`${project.title} case study preview`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-[0.84] brightness-[0.82] contrast-125 saturate-[0.82] transition duration-500 group-hover:opacity-95 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,transparent_54%,rgba(0,0,0,0.36)_100%),linear-gradient(180deg,rgba(2,6,23,0.08),transparent_42%,rgba(2,6,23,0.48))]" />
        <div className="absolute inset-0 opacity-[0.12] hero-grain" />
        <Badge
          variant="outline"
          className="absolute left-4 top-4 border-cyan-100/15 bg-black/45 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-50/70 backdrop-blur-md"
        >
          {project.status}
        </Badge>
      </div>

      <CardHeader className="relative gap-4 px-5 pt-6">
        <CardTitle className="text-2xl leading-tight tracking-tight text-white">
          {project.title}
        </CardTitle>
        <CardDescription className="text-sm leading-6 text-white/58">
          {selectedCopy[project.slug] ?? project.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative px-5">
        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 5).map((tool) => (
            <Badge
              key={tool}
              variant="outline"
              className="border-white/10 bg-white/[0.025] text-[10px] font-medium tracking-[0.14em] text-white/50"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="relative mt-auto px-5 pb-5 pt-2">
        <Button
          variant="outline"
          asChild
          className="w-full border-white/10 bg-white/[0.025] text-white hover:border-cyan-100/25 hover:bg-cyan-100/[0.06] hover:text-white"
        >
          <Link href={project.href} aria-label={`View case study for ${project.title}`}>
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function AdditionalExperienceCard({
  project,
  label,
  summary,
  accent,
  initials,
}: {
  project: Project;
  label: string;
  summary: string;
  accent: string;
  initials: string;
}) {
  return (
    <Card className="relative isolate overflow-hidden border-white/8 bg-white/[0.016] text-white shadow-[0_16px_60px_rgba(0,0,0,0.24)]">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} via-transparent to-transparent opacity-70`} />
      <CardHeader className="relative gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] text-xs font-semibold uppercase tracking-[0.16em] text-white/62">
            {initials}
          </div>
          {project.status === "NDA-Safe Summary" ? (
            <Badge
              variant="outline"
              className="border-white/10 bg-white/[0.025] text-[10px] uppercase tracking-[0.16em] text-white/42"
            >
              NDA-safe summary
            </Badge>
          ) : null}
        </div>
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-white/35">
            {label}
          </p>
          <CardTitle className="text-xl leading-tight tracking-tight text-white">
            {project.title}
          </CardTitle>
          <CardDescription className="mt-4 text-sm leading-6 text-white/52">
            {summary}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="relative">
        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <Badge
              key={tool}
              variant="outline"
              className="border-white/8 bg-transparent text-[10px] tracking-[0.14em] text-white/38"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SystemsArchitectureSection() {
  return (
    <section className="relative border-t border-white/5 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(125,211,252,0.08),transparent_32%)]" />
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
            SYSTEMS &amp; ARCHITECTURE
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Interface systems, built to scale.
          </h2>
        </div>

        <Card className="group relative isolate overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgba(24,24,27,0.86),rgba(3,7,18,0.98))] py-0 text-white shadow-[0_26px_100px_rgba(0,0,0,0.38)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_12%,rgba(125,211,252,0.12),transparent_34%)]" />
          <div className="grid gap-0 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-black md:min-h-[460px]">
              <Image
                src="/images/work/sinistral-design-system/overview.png"
                alt="Sinistral Design System overview"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover opacity-[0.82] brightness-[0.78] contrast-125 saturate-[0.82] transition duration-500 group-hover:opacity-95 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,transparent_56%,rgba(0,0,0,0.34)_100%),linear-gradient(180deg,rgba(2,6,23,0.08),transparent_45%,rgba(2,6,23,0.5))]" />
              <div className="absolute inset-0 opacity-[0.12] hero-grain" />
            </div>

            <div className="relative flex flex-col justify-center p-6 md:p-10">
              <Badge
                variant="outline"
                className="mb-5 w-fit border-cyan-100/15 bg-black/35 text-[10px] uppercase tracking-[0.18em] text-cyan-50/70"
              >
                Design Systems
              </Badge>
              <CardTitle className="text-3xl leading-tight tracking-tight text-white md:text-4xl">
                Sinistral Design System
              </CardTitle>
              <CardDescription className="mt-5 text-base leading-7 text-white/56">
                Scalable UI architecture, accessibility, interaction states, and
                implementation-aware component foundations.
              </CardDescription>
              <Button
                variant="outline"
                asChild
                className="mt-8 w-fit border-white/10 bg-white/[0.025] text-white hover:border-cyan-100/25 hover:bg-cyan-100/[0.06] hover:text-white"
              >
                <Link href="/systems">
                  Explore Interface Systems
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default function WorkPage() {
  const selectedProjects = selectedSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project) => project !== undefined);

  const additionalProjects = additionalExperience
    .map((item) => {
      const project = getProjectBySlug(item.slug);
      return project ? { ...item, project } : undefined;
    })
    .filter((item) => item !== undefined);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative border-b border-white/5 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(125,211,252,0.1),transparent_32%),radial-gradient(circle_at_84%_18%,rgba(30,64,175,0.12),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] hero-grain" />
        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan-100/45">
              Curated Portfolio
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Selected Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/58 md:text-xl">
              A focused set of product systems, enterprise UX work, and public
              technical platform projects. The emphasis is depth, judgment, and
              production-minded design craft.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
                Selected Work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Selected Work
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/48 md:text-right">
              Four projects that best represent product thinking, AI workflow
              systems, accessibility, and developer platform UX.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {selectedProjects.map((project) => (
              <SelectedWorkCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(148,163,184,0.07),transparent_30%)]" />
        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-white/38">
              ADDITIONAL EXPERIENCE
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Enterprise work, distilled.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/50">
              A concise view of enterprise projects where the work is
              NDA-sensitive, internally focused, or better represented through
              outcomes than screenshots.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {additionalProjects.map((item) => (
              <AdditionalExperienceCard
                key={item.project.id}
                project={item.project}
                label={item.label}
                summary={item.summary}
                accent={item.accent}
                initials={item.initials}
              />
            ))}
          </div>
        </div>
      </section>

      <SystemsArchitectureSection />
    </main>
  );
}
