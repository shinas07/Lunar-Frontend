import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GridBackdrop } from "@/components/ui/Backdrop";
import { capabilities } from "@/lib/data";

export function WhyLunar() {
  return (
    <Section className="relative overflow-hidden">
      <GridBackdrop />
      <SectionHeading
        eyebrow="Why Lunar"
        title="Built like the systems we ship"
        description="The principles below aren't marketing — they're the engineering defaults behind every platform we deliver."
        align="center"
        className="mx-auto items-center"
      />

      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {/* Feature cell */}
        <Reveal className="lg:col-span-1 lg:row-span-2">
          <SpotlightCard className="flex h-full flex-col justify-between overflow-hidden p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(77,166,255,0.22),transparent_70%)] blur-2xl"
            />
            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                Engineering standard
              </span>
              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-cloud">
                Correctness is not negotiable.
              </h3>
              <p className="mt-4 text-pretty leading-relaxed text-mist">
                In settlement networks and intelligence platforms, a single
                undefined edge case is a production incident. We engineer for the
                hard path first — verifiable, observable, and resilient by design.
              </p>
            </div>
            <div className="relative mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {[
                ["100%", "Audit coverage"],
                ["0", "Single points of failure"],
                ["24/7", "Observability"],
                ["E2E", "Test discipline"],
              ].map(([v, l]) => (
                <div key={l} className="bg-surface/80 p-4">
                  <div className="font-display text-xl font-semibold text-cloud">{v}</div>
                  <div className="mt-1 text-xs text-faint">{l}</div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>

        {/* Capability cells */}
        {capabilities.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <Reveal key={cap.title} delay={i * 0.08}>
              <SpotlightCard className="h-full p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-elevated/60">
                  <Icon className="h-5 w-5 text-electric" />
                </span>
                <h4 className="mt-5 font-display text-lg font-semibold text-cloud">
                  {cap.title}
                </h4>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-mist">
                  {cap.description}
                </p>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
