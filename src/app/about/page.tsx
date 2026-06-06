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
import { site } from "@/lib/site";
import { Telescope, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lunar Global Technologies is a full-service technology company delivering websites, web apps, mobile apps, and Web3/blockchain solutions for clients in India and worldwide. Meet our founder and our values.",
  alternates: { canonical: "/about" },
};

const culturePillars = [
  {
    title: "Technology-first",
    body: "We're engineers at heart. Decisions are driven by what's technically right for your product — not by what's quick or convenient.",
  },
  {
    title: "Web2 + Web3 fluency",
    body: "One team that speaks both worlds. We move naturally between traditional web apps and on-chain systems, so your stack stays coherent.",
  },
  {
    title: "Small teams, deep ownership",
    body: "Lean, senior teams own each project end to end — from architecture and design through deployment and long-term support.",
  },
  {
    title: "Learn in production",
    body: "Real users and real data are the only honest reviewers. We ship in tight loops and let production guide what we build next.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Lunar Global"
        title="We build the products that move businesses forward."
        description="Lunar Global Technologies is a full-service technology company delivering end-to-end digital products across Web2, Web3, mobile, and enterprise — for clients in India and around the world."
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
                To be the technology partner businesses trust to take any idea —
                Web2 or Web3, web or mobile — from concept to a launched, scalable
                product, with the craft of a studio and the reliability of an
                enterprise team.
              </p>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard className="h-full p-8 md:p-10" spotlightColor="rgba(20,168,207,0.16)">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-elevated/60">
                <Target className="h-6 w-6 text-violet-bright" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-semibold text-cloud">
                Our mission
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-mist">
                To design, develop, and deliver world-class digital products —
                websites, web apps, mobile apps, blockchain and DeFi platforms —
                and to stand behind every one of them long after launch with honest
                support and transparent partnership.
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
              eyebrow="Founder's message"
              title="We treat your product like it's our own."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-pretty leading-relaxed text-mist">
                I started Lunar Global Technologies to be the kind of technology
                partner I always wished existed — one that listens first, quotes
                honestly, builds with real craft, and is still there long after the
                product goes live.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-mist">
                Whether you&apos;re a startup chasing an MVP, an enterprise modernising
                a platform, or a Web3 project launching on-chain, our promise is the
                same: clear communication, dependable delivery, and a team that
                genuinely cares about your success.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href={site.founderLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.founder} on LinkedIn`}
                className="group mt-7 inline-flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-electric to-violet font-display text-base font-semibold text-ink">
                  {site.founder
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <div className="flex items-center gap-1.5 font-medium text-cloud transition-colors group-hover:text-electric">
                    {site.founder}
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                      className="h-3.5 w-3.5 text-mist transition-colors group-hover:text-electric"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46C22.4 7.74 24 10.06 24 14.2V24h-5v-8.7c0-2.07-.74-3.48-2.6-3.48-1.42 0-2.26.95-2.63 1.87-.14.33-.17.79-.17 1.25V24h-5s.07-14.5 0-16z" />
                    </svg>
                  </div>
                  <div className="text-sm text-mist">Founder &amp; CEO, Lunar Global Technologies</div>
                </div>
              </a>
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
