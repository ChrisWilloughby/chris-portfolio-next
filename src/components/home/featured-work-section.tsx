"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

import { FeaturedProjectCard } from "@/components/home/featured-project-card";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedWorkSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-white/5 py-20 md:py-28"
      aria-labelledby="featured-work-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_5%,rgba(125,211,252,0.08),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(30,64,175,0.12),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/15 to-transparent" />

      <div className="container max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/45">
                Selected Case Files
              </p>
              <h2
                id="featured-work-heading"
                className="mb-3 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl"
              >
                Featured Work
              </h2>
              <p className="max-w-2xl text-base leading-7 text-white/52 md:text-lg">
                Enterprise product work presented as focused case studies:
                restrained, technical, and built around measurable product impact.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden items-center gap-2 text-sm text-white/60 transition-colors hover:text-white md:flex"
            >
              View all work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                imageSrc={project.image!}
                imageAlt={`${project.title} featured work image`}
              />
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              View all work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
