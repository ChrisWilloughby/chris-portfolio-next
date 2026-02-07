"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function HeroBanner() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Image - Left Aligned */}
      <div className="absolute inset-0 left-0 right-0">
        <div className="relative h-full w-full">
          {/* Banner Image Container */}
          <div className="absolute inset-0 left-0 right-1/2 md:right-1/3 lg:right-1/2">
            <Image
              src="/hero-banner.jpg" // This will be the provided banner image
              alt="Hero background"
              fill
              className="object-cover object-left"
              priority
              style={{ 
                filter: 'contrast(1.1) brightness(0.8)',
                mixBlendMode: 'screen'
              }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
          
          {/* Fallback gradient when no image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-950/20 to-black" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column - Glowing Mark */}
          <div className="flex items-center justify-center lg:col-span-5 lg:justify-start">
            <div className={`transform transition-all duration-1000 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 blur-2xl">
                  <div className="h-24 w-24 rounded-full bg-blue-500/20 md:h-32 md:w-32" />
                </div>
                
                {/* Glowing Mark */}
                <div className="relative flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-400 md:text-6xl lg:text-7xl" style={{
                    textShadow: `
                      0 0 20px rgba(59, 130, 246, 0.8),
                      0 0 40px rgba(59, 130, 246, 0.6),
                      0 0 60px rgba(59, 130, 246, 0.4),
                      0 0 80px rgba(59, 130, 246, 0.2)
                    `,
                    fontFamily: 'monospace'
                  }}>
                    &lt;/&gt;
                  </span>
                </div>
                
                {/* Animated pulse */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full border border-blue-400/30 animate-ping md:h-28 md:w-28" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Name and Tagline */}
          <div className="flex items-center justify-center lg:col-span-7 lg:justify-start">
            <div className={`space-y-6 text-center lg:text-left transform transition-all duration-1000 delay-300 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              {/* Name */}
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
                Chris Willoughby
              </h1>
              
              {/* Tagline */}
              <p className="text-lg text-blue-200 md:text-xl lg:text-2xl xl:text-3xl max-w-2xl">
                Senior Product Designer who codes production UI
              </p>
              
              {/* Optional CTA */}
              <div className="pt-4">
                <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-6 py-3 backdrop-blur-sm">
                  <span className="text-sm text-blue-200 md:text-base">
                    Available for freelance & consulting projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scanline Overlay - Subtle */}
      <div className="pointer-events-none absolute inset-0 z-20 opacity-10 hero-scanlines" />

      {/* Grain Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 opacity-30 hero-grain" />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
