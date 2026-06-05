import { ArrowRight, Mail } from "lucide-react";
import { Starfield } from "@/components/ui/Starfield";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { site } from "@/lib/site";

export function CTA({
  title = "Have a system worth building right?",
  description = "Tell us about the problem. We'll tell you how we'd engineer it — and what it takes to ship.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-px py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-line-strong bg-gradient-to-b from-surface to-ink-2 px-6 py-20 text-center md:px-12 md:py-28">
        <Starfield className="opacity-70" shooting={false} />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(77,166,255,0.22),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.25),transparent_70%)] blur-3xl"
        />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
          <TextReveal
            text={title}
            className="justify-center text-balance text-4xl font-semibold leading-[1.05] text-cloud sm:text-5xl md:text-6xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty text-lg text-haze">{description}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <Button href="/contact" size="lg">
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Magnetic>
              <Button href={`mailto:${site.email}`} size="lg" variant="secondary">
                <Mail className="h-4 w-4" />
                {site.email}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
