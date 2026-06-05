"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePrefersReducedMotion, useIsMobile } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

// WebGL Earth is heavy → client-only, code-split, loaded lazily.
const EarthScene = dynamic(() => import("./EarthScene"), { ssr: false });

/**
 * Interactive 3D Earth (night-lights) for the hero.
 *
 * Degrades gracefully: a lightweight CSS globe renders on first paint,
 * on mobile, and for reduced-motion users — so neither the WebGL bundle
 * nor the Earth texture loads in those cases (keeps Lighthouse high).
 */
export function EarthGlobe({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const useFallback = !ready || reduced || isMobile;

  return (
    <div className={cn("relative aspect-square", className)}>
      {useFallback ? <StaticGlobe /> : <EarthScene />}
    </div>
  );
}

/** Pure-CSS stylised globe — zero JS, no texture download. */
function StaticGlobe() {
  return (
    <div className="absolute inset-[8%] grid place-items-center">
      <div
        className="relative aspect-square w-full animate-float rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #16294a 0%, #0c1730 45%, #060a16 78%)",
          boxShadow:
            "inset -24px -24px 70px rgba(0,0,0,0.8), inset 18px 18px 60px rgba(0,194,255,0.14), 0 0 80px rgba(0,194,255,0.18)",
        }}
      >
        <div className="absolute inset-0 rounded-full bg-dots opacity-30" />
      </div>
    </div>
  );
}
