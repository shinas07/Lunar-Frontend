"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { LogoMark } from "@/components/ui/Logo";

const word = "LUNAR".split("");
const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * A short, elegant first-load intro. Shown once per session; skipped
 * entirely for reduced-motion users and on subsequent client navigations.
 */
export function Intro() {
  const reduced = usePrefersReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("lunar-intro");
    if (reduced || seen) {
      // Defer out of the synchronous effect body.
      const id = requestAnimationFrame(() => setShow(false));
      return () => cancelAnimationFrame(id);
    }
    sessionStorage.setItem("lunar-intro", "1");
    const t = setTimeout(() => setShow(false), 1900);
    return () => clearTimeout(t);
  }, [reduced]);

  // Lock scroll while the intro is on screen.
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(77,166,255,0.16),transparent_60%)]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <LogoMark className="h-14 w-14" />
          </motion.div>

          <div className="mt-6 flex overflow-hidden">
            {word.map((letter, i) => (
              <span key={i} className="overflow-hidden">
                <motion.span
                  className="inline-block font-display text-3xl font-semibold tracking-[0.3em] text-cloud"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 + i * 0.07, ease: EASE }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </div>

          {/* Progress line */}
          <motion.div
            className="mt-8 h-px w-40 origin-left bg-gradient-to-r from-electric to-violet"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: EASE }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
