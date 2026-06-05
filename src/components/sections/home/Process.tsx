import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/lib/data";

export function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="How we work"
        title="A disciplined path from idea to production"
        description="Four phases, tightly instrumented. We de-risk early, build in the open, and stay accountable after launch."
        className="max-w-2xl"
      />

      <div className="relative mt-16">
        {/* Connecting line */}
        <div
          aria-hidden
          className="absolute left-0 top-8 hidden h-px w-full bg-gradient-to-r from-electric/40 via-line to-transparent lg:block"
        />
        <div className="grid gap-10 lg:grid-cols-4">
          {process.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={i * 0.1} className="relative">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-line-strong bg-surface">
                    <Icon className="h-6 w-6 text-electric" />
                  </span>
                  <span className="font-mono text-sm text-faint lg:mt-6">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-cloud lg:mt-4">
                  {step.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-mist">
                  {step.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
