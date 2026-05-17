"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function HeroBanner() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black"
    >
      <div className="relative h-[280px] md:h-[340px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/85" />

        <div className="absolute inset-y-0 left-0 w-[40%] md:w-[36%]">
          <Image
            src="/images/hero/right-face.png"
            alt="Comic noir portrait left"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 36vw"
            className="object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/35 to-black/95" />
        </div>

        <div className="absolute inset-y-0 right-0 w-[46%] md:w-[42%]">
          <Image
            src="/images/hero/left-face.png"
            alt="Comic noir portrait right"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover object-right brightness-[0.28] contrast-[1.4] saturate-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/85 to-black/98" />
        </div>

        <div
          className="absolute inset-0 bg-black/62"
          style={{
            clipPath: "polygon(49% 0%, 100% 0%, 100% 100%, 41% 100%)",
          }}
        />

        {/* Center </> mark */}
<div
  className="pointer-events-none absolute z-10 flex items-center justify-center"
  style={{
    left: "39%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  }}
>
  <div
    className={`transition-all duration-1000 ${
      inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    <div className="absolute h-28 w-28 rounded-full bg-cyan-100/[0.055] blur-2xl md:h-36 md:w-36" />
    <span
      className="relative text-[58px] font-bold tracking-tighter text-cyan-100/42 md:text-[74px]"
      style={{
        textShadow:
          "0 0 12px rgba(125,211,252,0.28), 0 0 26px rgba(125,211,252,0.12)",
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      }}
    >
      {"</>"}
    </span>
  </div>
</div>

        {/* Text block on the right */}
<div className="relative z-20 flex h-full items-center">
  <div className="ml-[48%] w-[48%] max-w-[620px] px-6 md:px-10">
    <div
      className={`transition-all duration-1000 delay-150 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
      }`}
    >
      <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
        Chris Willoughby
      </h1>

      <p className="mt-3 max-w-xl text-sm text-white/68 md:text-lg">
        Senior Product Designer who codes production UI
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {["Next.js", "Tailwind", "MDX", "shadcn/ui", "TypeScript"].map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/8 bg-white/[0.018] px-3.5 py-1 text-[10px] tracking-[0.16em] text-white/50 backdrop-blur-sm md:text-xs"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

        <div className="pointer-events-none absolute inset-0 opacity-[0.12] hero-scanlines" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.22] hero-grain" />

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}