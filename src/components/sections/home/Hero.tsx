"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Starfield } from "@/components/ui/Starfield";
import { Moon } from "@/components/ui/Moon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

const headline = ["Software", "for", "the", "next", "frontier."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yMoon = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden pt-28"
    >
      {/* Backdrop */}
      <Starfield className="z-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(77,166,255,0.16),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent"
      />

      {/* Moon */}
      <motion.div
        style={{ y: yMoon, opacity }}
        className="pointer-events-none absolute left-1/2 top-[8%] -z-0 w-[78vw] max-w-[640px] -translate-x-1/2 md:left-[68%] md:top-1/2 md:w-[42vw] md:-translate-y-1/2"
      >
        <Moon className="w-full" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yContent }}
        className="container-px relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow>Product Engineering Studio</Eyebrow>
          </motion.div>

          <h1 className="mt-6 font-display text-[3.2rem] font-semibold leading-[0.98] tracking-tight text-cloud sm:text-7xl lg:text-[5.6rem]">
            {headline.map((word, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {i >= 3 ? <span className="text-gradient">{word}</span> : word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-haze sm:text-xl"
          >
            Lunar engineers mission-critical software for governments, enterprises,
            and telecom operators — from blockchain infrastructure to telecom
            intelligence platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button href="/contact" size="lg">
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Magnetic>
            <Button href="/projects" size="lg" variant="secondary">
              Explore our work
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-full max-w-7xl container-px"
      >
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">
          <ArrowDown className="h-4 w-4 animate-bounce text-electric" />
          Scroll to explore
        </div>
      </motion.div>
    </section>
  );
}
