import Link from "next/link";
import { Clapperboard, Crown, MonitorPlay, Sparkles } from "lucide-react";

const primaryLinks = [
  { href: "#experiences", label: "Experiences" },
  { href: "#channels", label: "Channels" },
  { href: "#originals", label: "Originals" },
  { href: "#testimonials", label: "Voices" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.3em]"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
            <Clapperboard className="h-5 w-5" />
          </span>
          <span className="text-slate-100">Viewmax</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-sky-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-white/30 hover:bg-white/10 sm:flex">
            <MonitorPlay className="h-4 w-4" />
            Demo Mode
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-400">
            <Crown className="h-4 w-4" />
            Join Vision
          </button>
        </div>
        <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200">
          <Sparkles className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
