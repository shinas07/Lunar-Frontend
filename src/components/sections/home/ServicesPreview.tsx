import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/lib/data";

export function ServicesPreview() {
  return (
    <Section id="services">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="What we do"
          title="Capabilities engineered for the frontier"
          description="Six disciplines, one standard of rigor. We design, build, and operate the systems our clients depend on."
          className="max-w-2xl"
        />
        <Reveal delay={0.2} className="hidden md:block">
          <Button href="/services" variant="secondary">
            All services
          </Button>
        </Reveal>
      </div>

      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <RevealItem key={service.slug} className="h-full">
            <ServiceCard service={service} href={`/services#${service.slug}`} />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-10 md:hidden">
        <Button href="/services" variant="secondary" className="w-full">
          All services
        </Button>
      </Reveal>
    </Section>
  );
}
