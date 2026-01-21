import Image from "next/image";
import { heroFeature } from "@/data/content";
import { Play, Sparkles } from "lucide-react";

export function FeatureHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-10 lg:p-16"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroFeature.backdrop ?? heroFeature.thumbnail}
          alt={heroFeature.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-black/95" />
        <div className="absolute -left-24 top-1/3 h-48 w-48 rounded-full bg-sky-500/20 blur-2xl" />
        <div className="absolute -right-24 top-1/2 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-[120px]" />
      </div>
      <div className="flex flex-col gap-6 text-slate-100 lg:max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">
          {heroFeature.category}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {heroFeature.title}
        </h1>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          {heroFeature.description}
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="rounded-full border border-white/5 bg-white/5 px-3 py-1">
            {heroFeature.runtime}
          </span>
          <span className="rounded-full border border-white/5 bg-white/5 px-3 py-1">
            {heroFeature.rating}
          </span>
          <span className="rounded-full border border-white/5 bg-white/5 px-3 py-1">
            {heroFeature.year}
          </span>
          {heroFeature.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-sky-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-sky-400">
            <Play className="h-4 w-4" />
            Play Preview
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white/30 hover:bg-white/10">
            <Sparkles className="h-4 w-4" />
            View Specs
          </button>
        </div>
      </div>
      <dl className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
        {[
          ["Bitrate", "Up to 120 Mbps adaptive"],
          ["Audio", "13.4.6 Spatial Atmosphere"],
          ["Color", "Quantum HDR+ 4000 nits"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur"
          >
            <dt className="text-xs uppercase tracking-[0.25em] text-sky-300">
              {label}
            </dt>
            <dd className="mt-2 text-sm font-medium text-white">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
