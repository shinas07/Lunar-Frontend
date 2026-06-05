"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Word-by-word masked reveal for headlines. Each word rises from
 * behind a clipping mask for a premium editorial feel.
 */
export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}) {
  const words = text.split(" ");

  return (
    <Tag className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.28em] inline-block overflow-hidden py-[0.06em]">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "115%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.055,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
