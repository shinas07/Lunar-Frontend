import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GlowDivider } from "@/components/ui/Backdrop";
import { PageHeader } from "@/components/sections/shared/PageHeader";
import { Process } from "@/components/sections/home/Process";
import { CTA } from "@/components/sections/shared/CTA";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, Web3 & blockchain, mobile apps, product development, crypto solutions, and maintenance — full-service technology by Lunar Global Technologies.",
  alternates: { canonical: "/services" },
};

const accentText = {
  electric: "text-electric",
  violet: "text-violet-bright",
  aqua: "text-aqua",
} as const;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to build and grow."
        description="Six full-service disciplines across Web2, Web3, and mobile — from first website to on-chain platform, all under one roof."
      />

      <Section className="pt-10">
        <div className="flex flex-col gap-20 md:gap-28">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reversed = i % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28"
              >
                <div
                  className={cn(
                    "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                    reversed && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  {/* Copy */}
                  <Reveal direction={reversed ? "left" : "right"}>
                    <span className="font-mono text-sm text-faint">
                      {String(i + 1).padStart(2, "0")} / Service
                    </span>
                    <div className="mt-5 flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-elevated/60">
                        <Icon className={cn("h-7 w-7", accentText[service.accent])} />
                      </span>
                      <h2 className="font-display text-3xl font-semibold text-cloud sm:text-4xl">
                        {service.title}
                      </h2>
                    </div>
                    <p className={cn("mt-5 text-lg font-medium", accentText[service.accent])}>
                      {service.tagline}
                    </p>
                    <p className="mt-4 max-w-xl text-pretty leading-relaxed text-mist">
                      {service.description}
                    </p>
                  </Reveal>

                  {/* Capabilities card */}
                  <Reveal direction={reversed ? "right" : "left"} delay={0.1}>
                    <SpotlightCard
                      className="p-8"
                      spotlightColor={
                        service.accent === "violet"
                          ? "rgba(20,168,207,0.16)"
                          : service.accent === "aqua"
                          ? "rgba(56,224,208,0.14)"
                          : "rgba(0,194,255,0.16)"
                      }
                    >
                      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                        Core capabilities
                      </h3>
                      <ul className="mt-6 flex flex-col gap-4">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-3">
                            <span
                              className={cn(
                                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line bg-surface",
                                accentText[service.accent]
                              )}
                            >
                              <Check className="h-3 w-3" />
                            </span>
                            <span className="text-sm leading-relaxed text-haze">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </SpotlightCard>
                  </Reveal>
                </div>
                {i < services.length - 1 && <GlowDivider className="mt-20 md:mt-28" />}
              </div>
            );
          })}
        </div>
      </Section>

      <div className="border-t border-line">
        <Process />
      </div>

      <CTA
        title="Not sure which capability you need?"
        description="Most engagements start with a short discovery call. Tell us the problem and we'll map the right approach."
      />
    </>
  );
}
