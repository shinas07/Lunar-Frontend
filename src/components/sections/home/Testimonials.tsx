import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Client love"
        title="What our clients say"
        description="We measure success by the products we ship and the relationships we keep."
        align="center"
        className="mx-auto items-center"
      />

      <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <RevealItem key={t.name} className="h-full">
            <SpotlightCard className="flex h-full flex-col p-7 md:p-8">
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="mt-5 flex-1 text-pretty leading-relaxed text-haze">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span
                  aria-hidden
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-electric to-violet font-display text-sm font-semibold text-ink"
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span className="flex flex-col">
                  <span className="font-medium text-cloud">{t.name}</span>
                  <span className="text-sm text-mist">{t.role}</span>
                </span>
              </footer>
            </SpotlightCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
