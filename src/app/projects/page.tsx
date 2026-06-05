import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { PageHeader } from "@/components/sections/shared/PageHeader";
import { CTA } from "@/components/sections/shared/CTA";
import { projects } from "@/lib/data";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work from Lunar across blockchain, telecommunications, enterprise, and data platforms — engineered for correctness, security, and scale.",
  alternates: { canonical: "/projects" },
};

const sectors = ["All", "Blockchain", "Telecommunications", "Government & Enterprise", "Data Platforms"];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Systems running where it matters most."
        description="A selection of platforms we've engineered. Some details are anonymized to respect the sensitivity of the work."
      />

      <Section className="pt-10">
        {/* Sector legend (static, decorative grouping) */}
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {sectors.map((s, i) => (
              <span
                key={s}
                className={
                  "rounded-full border px-4 py-1.5 text-sm " +
                  (i === 0
                    ? "border-electric/40 bg-electric/10 text-electric"
                    : "border-line bg-surface/60 text-mist")
                }
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <RevealItem key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Future case studies */}
        <Reveal className="mt-5">
          <div className="border-gradient flex flex-col items-start gap-4 rounded-2xl p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-elevated/60">
                <Sparkles className="h-6 w-6 text-electric" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-cloud">
                  More case studies on the way
                </h3>
                <p className="mt-1 max-w-xl text-pretty text-sm leading-relaxed text-mist">
                  We&apos;re actively building telecom intelligence and next-generation
                  blockchain platforms. Detailed case studies will be published as
                  they move into production.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTA
        title="Your platform could be next."
        description="Bring us the system you can't afford to get wrong. We'll engineer it like it's our own."
      />
    </>
  );
}
