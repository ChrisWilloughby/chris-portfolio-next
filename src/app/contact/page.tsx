import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const contactOptions = [
  {
    label: "Email",
    value: "cwilloughby132@gmail.com",
    href: "mailto:cwilloughby132@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/chris-willoughby-06a1b83b",
    href: "https://www.linkedin.com/in/chris-willoughby-06a1b83b/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/ChrisWilloughby",
    href: "https://github.com/ChrisWilloughby",
    icon: Github,
    external: true,
  },
];

export const metadata = {
  title: "Contact | Chris Willoughby",
  description:
    "Contact Chris Willoughby for senior UX, product design, design systems, accessibility, UI engineering, and frontend-focused roles.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative border-b border-white/5 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(125,211,252,0.1),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(30,64,175,0.12),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] hero-grain" />

        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-6 border-cyan-100/15 bg-black/35 text-[10px] uppercase tracking-[0.22em] text-cyan-50/70"
            >
              Contact
            </Badge>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Let&apos;s talk.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64 md:text-2xl">
              If you&apos;re looking for a senior UX designer who can bridge
              product thinking, design systems, accessibility, and production
              UI, I&apos;d be glad to connect.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(148,163,184,0.07),transparent_30%)]" />
        <div className="container relative mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
              Direct Links
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              The fastest way to reach me.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/54">
              No form needed. Email is best for role conversations, and
              LinkedIn works well for quick context.
            </p>
          </div>

          <div className="grid gap-4">
            {contactOptions.map((option) => {
              const Icon = option.icon;

              return (
                <a
                  key={option.label}
                  href={option.href}
                  target={option.external ? "_blank" : undefined}
                  rel={option.external ? "noopener noreferrer" : undefined}
                  className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <Card className="relative isolate overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgba(24,24,27,0.82),rgba(3,7,18,0.96))] text-white shadow-[0_20px_80px_rgba(0,0,0,0.34)] transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-100/20">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_0%,rgba(125,211,252,0.1),transparent_32%)] opacity-80" />
                    <CardHeader className="relative flex-row items-center gap-4 space-y-0">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] text-cyan-50/70">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-sm font-medium uppercase tracking-[0.22em] text-white/42">
                          {option.label}
                        </CardTitle>
                        <CardDescription className="mt-2 truncate text-base text-white/70">
                          {option.value}
                        </CardDescription>
                      </div>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-white/32 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-50/70"
                        aria-hidden="true"
                      />
                    </CardHeader>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <Card className="relative overflow-hidden border-white/10 bg-zinc-950/74 text-white shadow-[0_24px_90px_rgba(0,0,0,0.36)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(125,211,252,0.1),transparent_34%)]" />
            <CardContent className="relative p-6 md:p-10">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
                Availability / Working Style
              </p>
              <p className="max-w-4xl text-xl leading-9 text-white/66 md:text-2xl">
                I&apos;m open to senior UX/UI, product design, UI engineering,
                design systems, and frontend-focused roles — especially where
                design and implementation need to stay closely aligned.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(30,64,175,0.12),transparent_34%)]" />
        <div className="container relative mx-auto max-w-6xl px-6">
          <Card className="relative isolate overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgba(24,24,27,0.88),rgba(3,7,18,0.98))] text-white shadow-[0_26px_100px_rgba(0,0,0,0.42)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.12),transparent_42%)]" />
            <CardHeader className="relative p-6 md:p-10">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
                Next Step
              </p>
              <CardTitle className="text-3xl tracking-tight text-white md:text-5xl">
                Prefer the full story first?
              </CardTitle>
              <CardDescription className="mt-4 max-w-2xl text-base leading-7 text-white/54">
                A few selected case studies and the resume give a clearer view
                of the systems, roles, and outcomes behind the work.
              </CardDescription>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-black hover:bg-cyan-50"
                >
                  <Link href="/work">
                    View Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/10 bg-white/[0.025] text-white hover:border-cyan-100/25 hover:bg-cyan-100/[0.06] hover:text-white"
                >
                  <Link href="/resume">
                    View Resume
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  );
}
