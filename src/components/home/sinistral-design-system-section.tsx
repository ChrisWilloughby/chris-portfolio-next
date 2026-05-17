"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components/ui/button";

export function SinistralDesignSystemSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-white/5 py-16 md:py-20"
      aria-labelledby="interface-systems-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(125,211,252,0.08),transparent_32%),radial-gradient(circle_at_84%_70%,rgba(30,64,175,0.1),transparent_34%)]" />
      <div className="container relative mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(24,24,27,0.88),rgba(3,7,18,0.98))] p-4 shadow-[0_24px_100px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:border-cyan-100/18 md:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.12),transparent_42%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.12] hero-grain" />

            <div className="relative grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div className="px-2 py-4 md:px-4 lg:py-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
                  Hidden Depth
                </p>
                <h2
                  id="interface-systems-heading"
                  className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
                >
                  Interface Systems
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/54 md:text-lg">
                  Scalable UI architecture, accessibility, interaction states,
                  and implementation-aware design systems.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="mt-8 border-white/10 bg-white/[0.025] text-white hover:border-cyan-100/25 hover:bg-cyan-100/[0.06] hover:text-white"
                >
                  <Link href="/systems">
                    Explore Interface Systems
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-black md:min-h-[390px]">
                <Image
                  src="/images/work/sinistral-design-system/teaser.png"
                  alt="Sinistral Design System interface systems teaser"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover opacity-[0.82] brightness-[0.76] contrast-125 saturate-[0.82] transition duration-500 group-hover:opacity-95 group-hover:brightness-90"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,transparent_56%,rgba(0,0,0,0.36)_100%),linear-gradient(180deg,rgba(2,6,23,0.08),transparent_45%,rgba(2,6,23,0.52))]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
