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

const basePath = "/images/work/sinistral-design-system";

const componentPanels = [
  {
    title: "Input Fields",
    src: "input_fields.png",
    alt: "Sinistral input field components and interaction states",
    body: "Form patterns shaped around clarity, state visibility, and repeatable implementation.",
  },
  {
    title: "Selectors",
    src: "selectors.png",
    alt: "Sinistral selector components and state examples",
    body: "Choice controls with consistent spacing, accessible states, and predictable behavior.",
  },
  {
    title: "Modal",
    src: "modal.png",
    alt: "Sinistral modal component system",
    body: "Focused overlays that preserve hierarchy, intent, and keyboard-friendly interaction.",
  },
  {
    title: "Notifications",
    src: "notifications.png",
    alt: "Sinistral notification components and status treatments",
    body: "Feedback patterns designed to communicate status without overwhelming the interface.",
  },
];

const principles = [
  "Accessible interaction patterns",
  "Visible component states",
  "Implementation-aware design",
  "Consistent system behavior",
];

export const metadata = {
  title: "Interface Systems | Chris Willoughby",
  description:
    "A cinematic overview of design systems, accessibility, scalable UI architecture, and implementation-aware product systems.",
};

function ImagePanel({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_26px_100px_rgba(0,0,0,0.42)] ${className}`}
    >
      <Image
        src={`${basePath}/${src}`}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 58vw"
        className="object-cover opacity-[0.82] brightness-[0.78] contrast-125 saturate-[0.82] transition duration-500 group-hover:opacity-95 group-hover:brightness-90"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,transparent_56%,rgba(0,0,0,0.34)_100%),linear-gradient(180deg,rgba(2,6,23,0.08),transparent_45%,rgba(2,6,23,0.5))]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] hero-grain" />
    </div>
  );
}

export default function SystemsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative py-8 md:py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(125,211,252,0.12),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(30,64,175,0.14),transparent_34%)]" />
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

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(24,24,27,0.88),rgba(3,7,18,0.98))] p-4 shadow-[0_34px_130px_rgba(0,0,0,0.54)] md:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.12),transparent_44%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div className="px-2 py-6 md:px-6 lg:py-10">
                <Badge
                  variant="outline"
                  className="mb-6 border-cyan-100/15 bg-black/35 text-[10px] uppercase tracking-[0.22em] text-cyan-50/70 backdrop-blur-md"
                >
                  Sinistral Design System
                </Badge>
                <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
                  Interface Systems
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-2xl">
                  Design systems, accessibility, scalable UI architecture, and
                  implementation-aware product systems.
                </p>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/54">
                  “Systems are not about control. They are about clarity,
                  consistency, accessibility, and speed.”
                </p>
              </div>

              <ImagePanel
                src="overview.png"
                alt="Sinistral Design System overview"
                priority
                className="min-h-[420px] md:min-h-[620px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Foundations
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Rhythm before components.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/56">
              Typography hierarchy, spacing rhythm, and readability create the
              foundation for scalable interfaces.
            </p>
          </div>

          <ImagePanel
            src="typography.png"
            alt="Sinistral typography hierarchy and type scale"
            className="min-h-[420px]"
          />
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Component Systems
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Curated patterns, not a component dump.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {componentPanels.map((panel, index) => (
              <Card
                key={panel.title}
                className={`overflow-hidden border-white/10 bg-zinc-950/74 py-0 text-white shadow-[0_24px_90px_rgba(0,0,0,0.36)] transition duration-300 hover:-translate-y-1 hover:border-cyan-100/18 ${
                  index % 2 === 1 ? "md:mt-10" : ""
                }`}
              >
                <div className="relative h-[280px] bg-black">
                  <Image
                    src={`${basePath}/${panel.src}`}
                    alt={panel.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-[0.8] brightness-[0.76] contrast-125 saturate-[0.82] transition duration-500 hover:opacity-95 hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/54 via-transparent to-black/16" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl tracking-tight text-white">
                    {panel.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6 text-white/56">
                    {panel.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Accessibility + Implementation
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Designed for use, then for reuse.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/56">
              Accessible interaction patterns, visible states, and practical
              implementation constraints make the system easier to ship and
              easier to maintain.
            </p>
          </div>

          <Card className="border-white/10 bg-zinc-950/78 text-white shadow-[0_24px_90px_rgba(0,0,0,0.38)]">
            <CardContent className="grid gap-4 p-6 md:p-8">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white/62"
                >
                  {principle}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
