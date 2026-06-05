"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Three.js scene is heavy — load it only on the client, below the fold.
const GlobeScene = dynamic(() => import("./GlobeScene"), {
  ssr: false,
  loading: () => <GlobeFallback />,
});

function GlobeFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-48 w-48 animate-pulse-glow rounded-full bg-[radial-gradient(circle,rgba(77,166,255,0.25),transparent_70%)]" />
    </div>
  );
}

export function Globe({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-square w-full", className)}>
      {/* Glow behind the canvas */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(77,166,255,0.18),transparent_65%)] blur-2xl"
      />
      <GlobeScene />
    </div>
  );
}
