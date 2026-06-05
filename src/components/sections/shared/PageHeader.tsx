import { Starfield } from "@/components/ui/Starfield";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";

/** Consistent immersive header for inner pages. */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="relative overflow-hidden pb-12 pt-36 md:pb-20 md:pt-44">
      <Starfield className="opacity-80" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(77,166,255,0.18),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent"
      />
      <div className="container-px relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <TextReveal
          as="h1"
          text={title}
          className="mt-6 max-w-4xl text-[clamp(2.75rem,6.5vw,6rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-cloud"
        />
        <Reveal delay={0.15}>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-haze md:text-xl">
            {description}
          </p>
        </Reveal>
      </div>
    </header>
  );
}
