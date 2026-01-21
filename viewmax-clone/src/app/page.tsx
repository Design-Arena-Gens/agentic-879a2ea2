import { FeatureHero } from "@/components/FeatureHero";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { ChannelShowcase } from "@/components/ChannelShowcase";
import { ExperienceHighlights } from "@/components/ExperienceHighlights";
import { MediaRow } from "@/components/MediaRow";
import { Testimonials } from "@/components/Testimonials";
import {
  liveChannels,
  originals,
  trending,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative mx-auto w-full max-w-6xl space-y-16 px-6 py-16 sm:space-y-20 sm:py-20">
        <div className="absolute inset-x-10 -top-24 -z-10 h-80 rounded-full bg-sky-500/20 blur-[120px]" />
        <section className="space-y-6 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">
            Precision Cinema Delivery
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Viewmax redefines how you experience stories.
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            Stream cinematic releases, immersive originals, and interactive live
            events with adaptive brightness, spatial audio, and multi-device
            sync. Built for creators, festivals, and living room cinemas alike.
          </p>
        </section>
        <FeatureHero />
        <ExperienceHighlights />
        <MediaRow
          eyebrow="Now Pulse"
          title="Trending in Vision+"
          items={trending}
          highlightTone="sky"
          anchor="trending"
        />
        <MediaRow
          eyebrow="Studio Depth"
          title="Viewmax Originals"
          items={originals}
          highlightTone="violet"
          anchor="originals"
        />
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-300">
              Live Edge
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Hyperclear Channels
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
              Live cinematic broadcasts calibrated in real-time with zero
              latency, spatial mixing, and device-aware lighting.
            </p>
          </div>
          <ChannelShowcase channels={liveChannels} />
        </section>
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-300">
              Voices
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Trusted by creators and curators
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              Filmmakers, post-production teams, and festival curators choose
              Viewmax for uncompromising fidelity and collaborative tools.
            </p>
          </div>
          <Testimonials />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
