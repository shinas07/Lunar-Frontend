import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { Globe } from "@/components/ui/globe/Globe";

const points = [
  { k: "India + global", v: "Based in India, delivering for clients across time zones worldwide." },
  { k: "Always in sync", v: "Clear, regular communication and updates throughout every project." },
  { k: "Always-on support", v: "24/7 monitoring and rapid response for the products we maintain." },
];

export function GlobalReach() {
  return (
    <Section className="relative overflow-hidden border-y border-line bg-ink-2/40">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div>
          <Reveal>
            <Eyebrow>Global reach</Eyebrow>
          </Reveal>
          <TextReveal
            text="Based in India. Building for the world."
            className="mt-6 max-w-xl text-4xl font-semibold leading-[1.06] text-cloud sm:text-5xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-mist">
              We work with founders and teams across continents — shipping fast,
              communicating clearly, and supporting every product long after it
              goes live.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-line border-t border-line">
            {points.map((p, i) => (
              <Reveal key={p.k} delay={0.15 + i * 0.08} className="flex gap-5 py-5">
                <span className="font-display text-lg font-semibold text-electric">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="font-medium text-cloud">{p.k}</div>
                  <div className="mt-1 text-sm text-mist">{p.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal direction="none" className="relative">
          <Globe className="mx-auto max-w-[520px]" />
        </Reveal>
      </div>
    </Section>
  );
}
