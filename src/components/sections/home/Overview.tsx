import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { GlowOrb } from "@/components/ui/Backdrop";
import { stats } from "@/lib/data";

const phrase =
  "We are a product-focused technology company building complex systems where correctness, security, and scale are non-negotiable.";

export function Overview() {
  const words = phrase.split(" ");
  return (
    <Section className="overflow-hidden">
      <GlowOrb color="violet" className="-left-40 top-0" />
      <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
          </Reveal>
          <p className="mt-7 flex flex-wrap font-display text-3xl font-medium leading-[1.25] tracking-tight sm:text-4xl md:text-[2.7rem]">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.26em] overflow-hidden">
                <Reveal as="span" delay={i * 0.018} direction="up">
                  <span className="inline-block text-cloud">{w}</span>
                </Reveal>
              </span>
            ))}
          </p>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <Reveal delay={0.1}>
            <p className="text-pretty leading-relaxed text-mist">
              From distributed ledgers that settle institutional transactions to
              telecom intelligence platforms operating at national scale, Lunar
              brings the discipline of enterprise engineering to the frontier of
              technology. Every system we ship is designed to run unattended,
              audited, and accountable.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-pretty leading-relaxed text-mist">
              We partner with organizations that cannot afford to be wrong — and
              we measure ourselves by what we put into production.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="bg-surface/80 p-8 text-center md:p-10"
          >
            <div className="font-display text-4xl font-semibold tracking-tight text-gradient md:text-5xl">
              <Counter
                value={s.value}
                decimals={s.decimals}
                prefix={s.prefix}
                suffix={s.suffix}
              />
            </div>
            <div className="mt-3 text-sm text-mist">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
