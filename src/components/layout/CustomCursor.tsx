"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

/**
 * A subtle two-part custom cursor: an instant dot + a trailing ring that
 * grows over interactive elements. Rendered only on fine-pointer devices
 * and never for reduced-motion users. The native cursor stays visible.
 */
export function CustomCursor() {
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = usePrefersReducedMotion();
  const enabled = finePointer && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const interactive = !!(e.target as Element)?.closest?.(
        "a, button, input, textarea, select, label, [data-cursor='hover']"
      );
      setHovering(interactive);
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerout", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerout", leave);
    };
  }, [enabled, x, y, visible]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[150] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
    >
      {/* Trailing ring */}
      <motion.div
        className="absolute left-0 top-0 rounded-full border border-electric/70 mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          opacity: hovering ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
      {/* Instant dot */}
      <motion.div
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-electric-bright"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
}
