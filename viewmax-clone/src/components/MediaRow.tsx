'use client';

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import type { MediaItem } from "@/data/content";
import clsx from "clsx";

type MediaRowProps = {
  eyebrow: string;
  title: string;
  items: MediaItem[];
  highlightTone?: "sky" | "violet";
  anchor?: string;
};

export function MediaRow({
  eyebrow,
  title,
  items,
  highlightTone = "sky",
  anchor,
}: MediaRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const node = scrollRef.current;
    if (!node) return;
    const scrollAmount = node.clientWidth * 0.9;
    node.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id={anchor} className="relative space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-300">
            <Sparkles className="h-3 w-3" />
            {eyebrow}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => handleScroll("left")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 transition hover:border-white/20 hover:bg-white/20"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 transition hover:border-white/20 hover:bg-white/20"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="scrollbar-thin relative flex gap-6 overflow-x-auto pb-4"
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        {items.map((item) => (
          <article
            key={item.id}
            className="group relative min-w-[220px] w-[220px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 md:min-w-[260px] md:w-[260px]"
          >
            <div className="relative h-40 w-full">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div
                className={clsx(
                  "absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100",
                  highlightTone === "sky"
                    ? "bg-gradient-to-tr from-sky-500/30 via-transparent to-transparent"
                    : "bg-gradient-to-tr from-violet-500/30 via-transparent to-transparent",
                )}
              />
            </div>
            <div className="space-y-3 px-4 pb-5 pt-4">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  {item.category}
                </p>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="min-h-[3.5rem] text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.25em] text-slate-400">
                <span>{item.runtime}</span>
                <span className="rounded-full border border-white/10 px-2 py-[2px]">
                  {item.rating}
                </span>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black/60 to-transparent md:block" />
          </article>
        ))}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent" />
      </div>
    </section>
  );
}
