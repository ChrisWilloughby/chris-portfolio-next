import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/data/projects";

interface FeaturedProjectCardProps {
  project: Project;
  imageSrc: string;
  imageAlt: string;
}

export function FeaturedProjectCard({
  project,
  imageSrc,
  imageAlt,
}: FeaturedProjectCardProps) {
  return (
    <Card className="group relative h-full overflow-hidden border-white/10 bg-zinc-950/80 py-0 text-white shadow-[0_24px_90px_rgba(0,0,0,0.42)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/20 hover:bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.11),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_36%)] opacity-80" />
      <div className="pointer-events-none absolute inset-px rounded-xl ring-1 ring-white/[0.03]" />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
          className="object-cover opacity-80 brightness-[0.72] contrast-125 saturate-[0.78] transition duration-300 group-hover:opacity-95 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/18 to-black/25" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
        <Badge
          variant="outline"
          className="absolute left-4 top-4 border-cyan-100/15 bg-black/45 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-50/70 backdrop-blur-md"
        >
          {project.category}
        </Badge>
      </div>

      <CardHeader className="relative gap-4 px-5 pt-6">
        <CardTitle className="text-xl leading-tight tracking-tight text-white">
          {project.title}
        </CardTitle>
        <CardDescription className="text-sm leading-6 text-white/58">
          {project.shortDescription}
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
