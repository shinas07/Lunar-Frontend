import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <Section id="tech" className="overflow-hidden">
      <SectionHeading
        eyebrow="Our toolkit"
        title="Technologies we master"
        description="A modern, battle-tested stack across web, mobile, blockchain, and cloud — chosen per project, not by habit."
        align="center"
        className="mx-auto items-center"
      />

      <div className="mt-14 flex flex-col gap-4">
        <Marquee duration="42s">
          {techStack.map((tech) => (
            <TechPill key={`a-${tech}`} label={tech} />
          ))}
        </Marquee>
        <Marquee duration="50s" reverse>
          {[...techStack].reverse().map((tech) => (
            <TechPill key={`b-${tech}`} label={tech} />
          ))}
        </Marquee>
      </div>
    </Section>
  );
}

function TechPill({ label }: { label: string }) {
  return (
    <span className="mx-1.5 flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-surface/70 px-5 py-2.5 transition-colors hover:border-electric/50 hover:bg-elevated">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-electric to-aqua" />
      <span className="font-mono text-sm text-haze">{label}</span>
    </span>
  );
}
