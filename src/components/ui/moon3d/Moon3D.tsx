"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Moon as CssMoon } from "@/components/ui/Moon";
import { usePrefersReducedMotion, useIsMobile } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

// WebGL scene is heavy → client-only, code-split, loaded lazily.
const MoonScene = dynamic(() => import("./MoonScene"), { ssr: false });

/**
 * Interactive 3D moon for the hero.
 *
 * Degrades gracefully: renders the lightweight CSS moon on first paint,
 * on mobile, and when reduced-motion is requested — so the WebGL bundle
 * never loads in those cases and Lighthouse stays high.
 */
export function Moon3D({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Defer the swap out of the synchronous effect body (avoids cascading render).
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const useFallback = !ready || reduced || isMobile;

  return (
    <div className={cn("relative aspect-square", className)}>
      {/* Glow that sits behind both the 3D and CSS versions */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(77,166,255,0.28),rgba(139,92,246,0.10)_45%,transparent_70%)] blur-3xl"
      />
      {useFallback ? <CssMoon className="h-full w-full" /> : <MoonScene />}
    </div>
  );
}
