import { experienceHighlights } from "@/data/content";
import { Waves, Maximize, Radio } from "lucide-react";

const icons = [Waves, Maximize, Radio];

export function ExperienceHighlights() {
  return (
    <section
      id="experiences"
      className="grid gap-6 md:grid-cols-3 md:gap-8"
      aria-label="Experience highlights"
    >
      {experienceHighlights.map((highlight, index) => {
        const Icon = icons[index % icons.length];
        return (
          <article
            key={highlight.title}
            className="glass-panel relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/20"
          >
            <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-sky-500/15 blur-3xl" />
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
              {highlight.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {highlight.description}
            </p>
          </article>
        );
      })}
    </section>
  );
}
