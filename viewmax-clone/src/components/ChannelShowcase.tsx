import Image from "next/image";
import clsx from "clsx";
import type { Channel } from "@/data/content";

type ChannelShowcaseProps = {
  channels: Channel[];
};

const toneMap: Record<Channel["tone"], string> = {
  primary: "from-sky-500/20 to-sky-400/10 text-sky-200",
  secondary: "from-indigo-500/20 to-indigo-400/10 text-indigo-200",
  accent: "from-amber-500/20 to-amber-400/10 text-amber-200",
};

export function ChannelShowcase({ channels }: ChannelShowcaseProps) {
  return (
    <section
      id="channels"
      className="grid gap-6 md:grid-cols-3 md:gap-8"
      aria-label="Live channels"
    >
      {channels.map((channel) => (
        <article
          key={channel.id}
          className={clsx(
            "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br p-6 shadow-lg transition hover:-translate-y-1 hover:border-white/30",
            toneMap[channel.tone],
          )}
        >
          <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/20 bg-black/40">
              <Image
                src={channel.logo}
                alt={`${channel.name} logo`}
                fill
                className="object-cover opacity-90"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {channel.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                Live Mode
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/90">
            {channel.description}
          </p>
          <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            <span>4K Streaming</span>
            <span>Zero Latency</span>
          </div>
        </article>
      ))}
    </section>
  );
}
