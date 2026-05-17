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

const philosophy = [
  {
    title: "Systems thinking",
    description:
      "I’m usually more interested in the structure underneath the interface than the interface itself — workflows, relationships, states, and how decisions move through a system.",
  },
  {
    title: "Clarity over complexity",
    description:
      "The best interfaces often remove a step, reduce hesitation, or make a decision feel obvious without drawing attention to themselves.",
  },
  {
    title: "Accessibility",
    description:
      "I don’t treat accessibility as a compliance layer. It’s part of how product quality and usability are defined from the beginning.",
  },
  {
    title: "Implementation-aware design",
    description:
      "I work best when design and engineering stay closely connected. Good systems survive handoff, scale over time, and remain maintainable.",
  },
  {
    title: "Reducing friction",
    description:
      "A lot of my work focuses on reducing cognitive load — helping products feel calmer, clearer, and easier to operate under real conditions.",
  },
];

const workingMethods = [
  {
    title: "Collaboration",
    description:
      "I prefer close collaboration between product, design, and engineering so decisions stay grounded, practical, and buildable.",
  },
  {
    title: "Design + engineering overlap",
    description:
      "Some of the most valuable product decisions happen at the boundary between interface design and implementation.",
  },
  {
    title: "Prototyping",
    description:
      "I use prototypes to pressure-test ideas early — interaction pacing, hierarchy, friction points, and whether a workflow actually holds together.",
  },
  {
    title: "Iteration",
    description:
      "I tend to work iteratively: simplify the problem, refine the system, and improve the product through steady cycles rather than giant redesigns.",
  },
  {
    title: "Design systems",
    description:
      "I care about systems when they improve clarity, accessibility, consistency, and speed for both users and the teams building the product.",
  },
  {
    title: "Product thinking",
    description:
      "I try to connect interface decisions back to user behavior, operational realities, and the long-term direction of the product.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(125,211,252,0.1),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(30,64,175,0.12),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] hero-grain" />

        <div className="container relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge
              variant="outline"
              className="mb-6 border-cyan-100/15 bg-black/35 text-[10px] uppercase tracking-[0.22em] text-cyan-50/70"
            >
              Designer · Engineer · Systems Thinker
            </Badge>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
              About
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64 md:text-2xl">
              I design and build product systems where clarity, accessibility,
              and implementation quality matter as much as the surface.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.52)]">
            <div className="relative min-h-[560px]">
              <Image
                src="/images/about/about-portrait.jpg"
                alt="Portrait of Chris Willoughby"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-[0.9] brightness-[0.82] contrast-125 saturate-[0.86]"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,transparent_52%,rgba(0,0,0,0.42)_100%),linear-gradient(180deg,rgba(2,6,23,0.08),transparent_42%,rgba(2,6,23,0.56))]" />
              <div className="absolute inset-0 opacity-[0.14] hero-grain" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Working Philosophy
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Calm systems, clear decisions.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {philosophy.map((item) => (
              <Card
                key={item.title}
                className="border-white/10 bg-white/[0.018] text-white shadow-[0_16px_60px_rgba(0,0,0,0.24)]"
              >
                <CardHeader>
                  <CardTitle className="text-base leading-6 tracking-tight text-white">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6 text-white/52">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              How I Work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Between product intent and production reality.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workingMethods.map((method) => (
              <Card
                key={method.title}
                className="border-white/10 bg-zinc-950/72 text-white shadow-[0_22px_80px_rgba(0,0,0,0.28)]"
              >
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight text-white">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6 text-white/56">
                    {method.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-28">
        <div className="container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Personal Layer
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Outside the interface.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/56 md:text-lg">
              Outside of work, I’m usually building something, learning something, or disappearing into music for a while.
              I like systems that evolve over time — products, workflows, instruments, habits — and that mindset naturally 
              carries into how I design.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_24px_90px_rgba(0,0,0,0.42)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/about/about-noir.jpg"
                alt="Noir portrait accent"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover opacity-[0.72] brightness-[0.72] contrast-125 saturate-[0.78]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-black/24" />
              <div className="absolute inset-0 opacity-[0.16] hero-grain" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          I’m most effective where product thinking, systems design, and implementation overlap.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/56">
            My work is about making complex products easier to understand, easier to build, and easier to trust.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <Link href="/work">
                View Work
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
      </section>
    </main>
  );
}
