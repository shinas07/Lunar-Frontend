"use client";

import { cn } from "@/lib/utils";

/**
 * Pure-CSS infinite marquee. Renders two identical track copies and
 * slides by exactly -50% (minus the inter-track gap) for a seamless
 * loop. Pauses on hover.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  duration = "40s",
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn("mask-fade-x group relative flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-3",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        <div className="flex shrink-0 items-center gap-3">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-3">
          {children}
        </div>
      </div>
    </div>
  );
}
