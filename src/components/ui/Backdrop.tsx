import { cn } from "@/lib/utils";

/** Soft animated aurora/glow orbs for section backgrounds. */
export function GlowOrb({
  className,
  color = "electric",
}: {
  className?: string;
  color?: "electric" | "violet" | "aqua";
}) {
  const colors = {
    electric: "rgba(77,166,255,0.22)",
    violet: "rgba(139,92,246,0.20)",
    aqua: "rgba(56,224,208,0.16)",
  } as const;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 h-[40rem] w-[40rem] rounded-full blur-[120px] animate-pulse-glow",
        className
      )}
      style={{
        background: `radial-gradient(circle, ${colors[color]}, transparent 70%)`,
      }}
    />
  );
}

/** Full-bleed grid + radial vignette backdrop. */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
      <div className="absolute inset-0 bg-grid opacity-[0.5]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-ink)_85%)]" />
    </div>
  );
}

/** Thin glowing horizontal divider. */
export function GlowDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-electric/40 to-transparent",
        className
      )}
    />
  );
}
