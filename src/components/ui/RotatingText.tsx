"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

/**
 * Cycles through a list of words with a vertical slide. Pauses (shows the
 * first word) for reduced-motion users.
 */
export function RotatingText({
  words,
  className,
  interval = 2200,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [reduced, words.length, interval]);

  return (
    <span className={cn("relative inline-flex overflow-hidden align-bottom", className)}>
      {/* Invisible sizer keeps width stable to the longest word */}
      <span aria-hidden className="invisible whitespace-nowrap">
        {words.reduce((a, b) => (b.length > a.length ? b : a), "")}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={reduced ? false : { y: "110%" }}
          animate={{ y: 0 }}
          exit={reduced ? undefined : { y: "-110%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
