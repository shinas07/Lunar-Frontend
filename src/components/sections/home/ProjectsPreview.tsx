import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/lib/data";

export function ProjectsPreview() {
  return (
    <Section id="projects">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Selected work"
          title="Systems running where it matters"
          description="A look at platforms we've engineered across blockchain, telecom, enterprise, and data."
          className="max-w-2xl"
        />
        <Reveal delay={0.2} className="hidden md:block">
          <Button href="/projects" variant="secondary">
            View all projects
          </Button>
        </Reveal>
      </div>

      <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <RevealItem key={project.slug} className="h-full">
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-10 md:hidden">
        <Button href="/projects" variant="secondary" className="w-full">
          View all projects
        </Button>
      </Reveal>
    </Section>
  );
}
