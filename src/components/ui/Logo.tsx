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
        <span className="font-display text-[1.3rem] font-semibold tracking-tight text-cloud">
          Lunar <span className="text-mist">Global</span>
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
        <linearGradient id="lunar-mark" x1="6" y1="3" x2="34" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9be9ff" />
          <stop offset="0.5" stopColor="#14c4ff" />
          <stop offset="1" stopColor="#0a86cf" />
        </linearGradient>
        <linearGradient id="lunar-orbit" x1="3" y1="20" x2="37" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5fd9ff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#7fe3ff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#5fd9ff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="lunar-glow" cx="0.5" cy="0.45" r="0.55">
          <stop stopColor="#00c2ff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#00c2ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Soft halo */}
      <circle cx="20" cy="20" r="19" fill="url(#lunar-glow)" />
      {/* Tilted orbit — passes behind the moon */}
      <ellipse
        cx="20"
        cy="20"
        rx="17.5"
        ry="6.2"
        transform="rotate(-28 20 20)"
        fill="none"
        stroke="url(#lunar-orbit)"
        strokeWidth="1.3"
      />
      {/* Crescent moon */}
      <path
        d="M28.5 6.2A16 16 0 1 0 33.8 24.5 12.5 12.5 0 0 1 28.5 6.2Z"
        fill="url(#lunar-mark)"
      />
      {/* Satellite node riding the orbit */}
      <circle cx="4.4" cy="25.8" r="2.4" fill="#d8f5ff" />
      <circle cx="4.4" cy="25.8" r="4.6" fill="url(#lunar-glow)" />
    </svg>
  );
}
