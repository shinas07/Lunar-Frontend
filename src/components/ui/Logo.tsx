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
        <linearGradient id="lunar-body" x1="8" y1="6" x2="30" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#eaf7ff" />
          <stop offset="0.5" stopColor="#3fb0e0" />
          <stop offset="1" stopColor="#0a5577" />
        </linearGradient>
        <radialGradient id="lunar-gloss" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lunar-seal" x1="5" y1="8" x2="35" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#cfeaff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0a5577" stopOpacity="0.18" />
        </linearGradient>
        <mask id="lunar-crescent">
          <circle cx="18.5" cy="20" r="12" fill="#fff" />
          <circle cx="25" cy="13.5" r="10.5" fill="#000" />
        </mask>
      </defs>
      {/* Fine seal ring — an understated emblem frame */}
      <circle cx="20" cy="20" r="18.5" stroke="url(#lunar-seal)" strokeWidth="1" />
      {/* Glossy crescent moon */}
      <g mask="url(#lunar-crescent)">
        <circle cx="18.5" cy="20" r="12" fill="url(#lunar-body)" />
        <ellipse cx="14.5" cy="13.5" rx="6.5" ry="4.2" fill="url(#lunar-gloss)" />
      </g>
    </svg>
  );
}
