import { Clapperboard } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-sm text-slate-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-slate-200">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
            <Clapperboard className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em]">
              Viewmax
            </p>
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
              Immersive Cinema Platform
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em]">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Support</span>
          <span>System Status</span>
        </div>
      </div>
    </footer>
  );
}
