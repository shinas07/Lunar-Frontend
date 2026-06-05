import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { TextReveal } from "./TextReveal";
import { Reveal } from "./Reveal";

/** Standard section header: eyebrow + headline + optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <TextReveal
        as={as}
        text={title}
        className={cn(
          "max-w-3xl text-balance text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1.0] tracking-[-0.02em] text-cloud",
          align === "center" && "mx-auto justify-center"
        )}
      />
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-pretty text-lg leading-relaxed text-mist",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
