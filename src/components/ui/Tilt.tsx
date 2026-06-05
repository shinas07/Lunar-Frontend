"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMediaQuery, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

/**
 * 3D tilt-on-hover wrapper. Adds depth to cards by rotating them toward
 * the cursor. No-ops on touch devices and for reduced-motion users
 * (renders a plain, stable <div> — no hydration mismatch).
 */
export function Tilt({
  children,
  className,
  max = 7,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = usePrefersReducedMotion();
  const enabled = finePointer && !reduced;

  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 180, damping: 18 });
  const sy = useSpring(py, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={enabled ? handleMove : undefined}
      onMouseLeave={enabled ? reset : undefined}
      style={
        enabled
          ? { rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1100 }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
