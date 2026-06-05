"use client";

import { Marquee } from "./Marquee";
import { cn } from "@/lib/utils";

export type MovingCard = { quote: string; name: string; title: string };

/**
 * Infinite moving cards (inspired by Aceternity UI) — adapted into the
 * Lunar design system for showcasing engineering principles.
 */
export function MovingCards({
  items,
  reverse = false,
  duration = "60s",
  className,
}: {
  items: MovingCard[];
  reverse?: boolean;
  duration?: string;
  className?: string;
}) {
  return (
    <Marquee reverse={reverse} duration={duration} className={cn("py-2", className)}>
      {items.map((item, i) => (
        <article
          key={i}
          className="relative w-[300px] shrink-0 rounded-2xl border border-line bg-gradient-to-b from-surface to-surface-2 p-6 sm:w-[420px]"
        >
          <span
            aria-hidden
            className="absolute right-5 top-3 font-display text-5xl leading-none text-electric/15"
          >
            &rdquo;
          </span>
          <p className="relative text-pretty text-[0.95rem] leading-relaxed text-haze">
            {item.quote}
          </p>
          <footer className="mt-5 flex items-center gap-3">
            <span className="h-9 w-9 rounded-full bg-gradient-to-br from-electric to-violet" />
            <span className="flex flex-col">
              <span className="text-sm font-medium text-cloud">{item.name}</span>
              <span className="font-mono text-[0.7rem] uppercase tracking-widest text-faint">
                {item.title}
              </span>
            </span>
          </footer>
        </article>
      ))}
    </Marquee>
  );
}
