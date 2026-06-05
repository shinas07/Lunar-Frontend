"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePrefersReducedMotion, useIsMobile } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

// Three.js scene is heavy — client-only, code-split, below the fold.
const GlobeScene = dynamic(() => import("./GlobeScene"), { ssr: false });

export function Globe({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const useFallback = !ready || reduced || isMobile;

  return (
    <div className={cn("relative aspect-square w-full", className)}>
      {useFallback ? <StaticGlobe /> : <GlobeScene />}
    </div>
  );
}

/** Pure-CSS stylised globe fallback — no WebGL, no texture. */
function StaticGlobe() {
  return (
    <div className="absolute inset-[10%] grid place-items-center">
      <div
        className="relative aspect-square w-full animate-float rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #16294a 0%, #0c1730 45%, #070c18 78%)",
          boxShadow:
            "inset -22px -22px 64px rgba(0,0,0,0.8), inset 16px 16px 54px rgba(0,194,255,0.14), 0 0 70px rgba(0,194,255,0.16)",
        }}
      >
        <div className="absolute inset-0 rounded-full bg-dots opacity-30" />
      </div>
    </div>
  );
}
