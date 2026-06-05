"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A luminous moon/planet orb rendered with layered CSS gradients —
 * the hero's gravitational centerpiece. Lightweight (no WebGL).
 */
export function Moon({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn("relative aspect-square", className)}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.35),rgba(20,168,207,0.12)_45%,transparent_70%)] blur-3xl" />

      {/* Orbit rings */}
      <div className="absolute inset-[-14%] animate-spin-slow rounded-full border border-electric/10" />
      <div className="absolute inset-[-26%] animate-spin-slow rounded-full border border-violet/10 [animation-direction:reverse] [animation-duration:40s]" />

      {/* The body */}
      <motion.div
        className="relative h-full w-full animate-float rounded-full"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #2a3b63 0%, #131c34 38%, #080d1c 70%, #04060e 100%)",
          boxShadow:
            "inset -28px -28px 80px rgba(0,0,0,0.85), inset 26px 26px 70px rgba(0,194,255,0.18), 0 0 90px rgba(0,194,255,0.18)",
        }}
      >
        {/* Terminator highlight */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_26%,rgba(95,217,255,0.4),transparent_42%)]" />

        {/* Craters */}
        <Crater className="left-[24%] top-[34%] h-[12%] w-[12%]" />
        <Crater className="left-[52%] top-[22%] h-[8%] w-[8%]" />
        <Crater className="left-[60%] top-[58%] h-[16%] w-[16%]" />
        <Crater className="left-[34%] top-[64%] h-[9%] w-[9%]" />
        <Crater className="left-[44%] top-[44%] h-[6%] w-[6%]" />

        {/* Rim light */}
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-electric/20" />
      </motion.div>
    </motion.div>
  );
}

function Crater({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute rounded-full", className)}
      style={{
        background:
          "radial-gradient(circle at 38% 32%, rgba(0,0,0,0.55), rgba(255,255,255,0.04) 70%, transparent)",
        boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.6), inset -1px -1px 3px rgba(95,217,255,0.12)",
      }}
    />
  );
}
