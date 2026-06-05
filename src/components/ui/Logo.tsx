import { cn } from "@/lib/utils";

/**
 * Lunar wordmark — a custom crescent/eclipse mark paired with the
 * Lunar wordmark in the display typeface.
 */
export function Logo({
  className,
  showWord = true,
}: {
  className?: string;
  showWord?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-7 w-7" />
      {showWord && (
        <span className="font-display text-[1.35rem] font-semibold tracking-tight text-cloud">
          Lunar
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
      role="img"
    >
      <defs>
        <linearGradient id="lunar-mark" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7cc0ff" />
          <stop offset="0.5" stopColor="#4da6ff" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <radialGradient id="lunar-glow" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#4da6ff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#4da6ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="19" fill="url(#lunar-glow)" />
      <path
        d="M28.5 6.2A16 16 0 1 0 33.8 24.5 12.5 12.5 0 0 1 28.5 6.2Z"
        fill="url(#lunar-mark)"
      />
      <circle cx="20" cy="20" r="16" stroke="url(#lunar-mark)" strokeOpacity="0.35" strokeWidth="1.2" />
    </svg>
  );
}
