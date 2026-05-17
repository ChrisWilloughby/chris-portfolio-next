"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="p-8 md:p-12 rounded-2xl border border-white/8 bg-white/[0.02] backdrop-blur-sm text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
              Want the full story?
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-8">
              Explore my complete work history, detailed project case studies, and get in touch to discuss opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-black hover:bg-white/90 border-0"
              >
                <Link href="/resume">
                  View Resume
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 text-white"
              >
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
