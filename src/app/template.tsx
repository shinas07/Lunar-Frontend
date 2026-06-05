"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Route transition. `template.tsx` re-mounts on every navigation, so each
 * page fades + lifts in with premium easing. Honors reduced-motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
