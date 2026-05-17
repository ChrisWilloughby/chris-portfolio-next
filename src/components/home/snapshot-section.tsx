"use client";

import { useInView } from "react-intersection-observer";

export function SnapshotSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 border-b border-white/5"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
            Senior UX/UI Designer and UI Engineer
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed mb-12">
            15+ years designing and building enterprise products, developer portals, design systems,
            accessibility improvements, and React-based interfaces. I bridge design and code to ship
            production UI that scales.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-white/8 bg-white/[0.02] backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-semibold text-white mb-2">
                UX/UI + Frontend
              </div>
              <div className="text-sm text-white/50">
                Design engineering hybrid
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/8 bg-white/[0.02] backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-semibold text-white mb-2">
                Design Systems
              </div>
              <div className="text-sm text-white/50">
                React, SCSS, Figma
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/8 bg-white/[0.02] backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-semibold text-white mb-2">
                WCAG Accessibility
              </div>
              <div className="text-sm text-white/50">
                Enterprise product experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
