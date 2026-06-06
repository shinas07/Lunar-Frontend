import { LogoMark } from "@/components/ui/Logo";

/**
 * Full-screen brand loader — mirrors the first-load intro and is shown
 * automatically during route transitions / whenever a page is slow to load
 * (wired via src/app/loading.tsx). Pure CSS animation, no JS required.
 */
export function Loader() {
  return (
    <div className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,194,255,0.14),transparent_60%)]"
      />
      <div className="animate-float">
        <LogoMark className="h-14 w-14" />
      </div>
      <div className="mt-6 pl-[0.3em] font-display text-3xl font-semibold tracking-[0.3em] text-cloud">
        LUNAR
      </div>
      <div className="relative mt-8 h-px w-40 overflow-hidden rounded-full bg-line">
        <span className="absolute inset-y-0 left-0 w-1/3 animate-loader-bar rounded-full bg-gradient-to-r from-electric to-violet" />
      </div>
    </div>
  );
}
