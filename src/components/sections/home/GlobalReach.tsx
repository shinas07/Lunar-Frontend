import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { Globe } from "@/components/ui/globe/Globe";

const points = [
  { k: "Remote-first", v: "A distributed senior team operating across time zones." },
  { k: "Compliance-ready", v: "Engineered to meet strict government and enterprise requirements." },
  { k: "Always-on", v: "24/7 monitoring and response for mission-critical platforms." },
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
            text="Engineered locally. Deployed at planetary scale."
            className="mt-6 max-w-xl text-4xl font-semibold leading-[1.06] text-cloud sm:text-5xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-mist">
              Our platforms process billions of events and serve users across
              continents — without compromising on latency, security, or
              reliability.
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
