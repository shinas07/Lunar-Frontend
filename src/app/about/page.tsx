import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GlowOrb, GridBackdrop } from "@/components/ui/Backdrop";
import { Moon } from "@/components/ui/Moon";
import { PageHeader } from "@/components/sections/shared/PageHeader";
import { CTA } from "@/components/sections/shared/CTA";
import { values } from "@/lib/data";
import { Telescope, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lunar is a product-focused technology company engineering mission-critical software for governments, enterprises, and telecom operators. Learn about our vision, mission, and engineering culture.",
  alternates: { canonical: "/about" },
};

const culturePillars = [
  {
    title: "Technology-first",
    body: "We are engineers before anything else. Decisions are driven by what's technically true, not by what's convenient — and every senior voice can challenge an architecture.",
  },
  {
    title: "Small teams, deep ownership",
    body: "We deliberately keep teams small and senior. Fewer hands, more context, and complete ownership from architecture through production support.",
  },
  {
    title: "Bias for the hard problem",
    body: "We seek out the systems others avoid — regulated, high-throughput, security-critical. The hard problem is where our engineering compounds into advantage.",
  },
  {
    title: "Learn in production",
    body: "Real users and real data are the only honest reviewers. We ship in tight loops, instrument relentlessly, and let production teach us what to build next.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Lunar"
        title="We engineer at the frontier."
        description="Lunar exists to build the software that other companies consider too complex, too critical, or too risky — and to ship it with the rigor those systems demand."
      />

      {/* Vision & Mission */}
      <Section className="relative overflow-hidden">
        <GlowOrb color="electric" className="-right-40 -top-20" />
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <SpotlightCard className="h-full p-8 md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-elevated/60">
                <Telescope className="h-6 w-6 text-electric" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-semibold text-cloud">
                Our vision
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-mist">
                A world where the most important systems — the ones that move money,
                signal, and decisions — are built with the precision of aerospace and
                the speed of modern software. We want Lunar to be the team that
                organizations trust with their hardest engineering.
              </p>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard className="h-full p-8 md:p-10" spotlightColor="rgba(139,92,246,0.16)">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-elevated/60">
                <Target className="h-6 w-6 text-violet-bright" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-semibold text-cloud">
                Our mission
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-mist">
                To design, build, and operate complex technology products — blockchain,
                telecom intelligence, enterprise platforms, and data systems — that are
                correct, secure, and dependable at scale, and to stand behind every one
                of them in production.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </Section>

      {/* Big statement */}
      <Section size="tight" className="relative overflow-hidden border-y border-line bg-ink-2/40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Leadership philosophy"
              title="The best system wins — not the loudest opinion."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-pretty leading-relaxed text-mist">
                Leadership at Lunar is technical. We lead by setting the bar on
                quality, by removing obstacles for engineers, and by taking
                responsibility when systems are in the field. Titles don&apos;t ship
                software; clear thinking and accountable teams do.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-mist">
                We hire people who would rather be right than comfortable, who
                care about the user on the other end of the system, and who treat
                someone else&apos;s mission as their own.
              </p>
            </Reveal>
          </div>
          <Reveal direction="none" className="relative mx-auto w-full max-w-sm">
            <Moon className="w-full" />
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeading
          eyebrow="Our values"
          title="Four principles, applied without exception"
          description="They show up in code reviews, in architecture decisions, and in how we treat the organizations that trust us."
          className="max-w-2xl"
        />
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <RevealItem key={value.title} className="h-full">
                <SpotlightCard className="flex h-full gap-5 p-7 md:p-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-elevated/60">
                    <Icon className="h-6 w-6 text-electric" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-cloud">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-mist">
                      {value.description}
                    </p>
                  </div>
                </SpotlightCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Section>

      {/* Culture */}
      <Section className="relative overflow-hidden">
        <GridBackdrop />
        <SectionHeading
          eyebrow="Technology-first culture"
          title="How it actually feels to build here"
          align="center"
          className="mx-auto items-center"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {culturePillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="border-gradient h-full rounded-2xl p-8">
                <span className="font-mono text-sm text-electric">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-cloud">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-mist">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        title="Want to build something that matters?"
        description="Whether you're an organization with a hard problem or an engineer who wants to solve them, we'd like to talk."
      />
    </>
  );
}
