import { testimonials } from "@/data/content";
import { QuoteIcon } from "lucide-react";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="grid gap-6 md:grid-cols-3 md:gap-8"
      aria-label="Testimonials"
    >
      {testimonials.map((testimonial) => (
        <figure
          key={testimonial.name}
          className="glass-panel relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/20"
        >
          <div className="absolute -left-12 top-0 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <QuoteIcon className="h-10 w-10 text-fuchsia-300" />
          <blockquote className="mt-4 text-sm leading-relaxed text-slate-200">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold tracking-tight text-white">
            <div>{testimonial.name}</div>
            <div className="mt-1 text-xs font-normal uppercase tracking-[0.3em] text-slate-400">
              {testimonial.title}
            </div>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
