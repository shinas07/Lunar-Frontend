import { SectionHeading } from "@/components/ui/SectionHeading";
import { MovingCards } from "@/components/ui/MovingCards";
import { principles } from "@/lib/data";

export function Principles() {
  return (
    <section id="principles" className="relative py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Engineering principles"
          title="The convictions behind the code"
          description="Six beliefs that shape how every Lunar engineer makes decisions."
          align="center"
          className="mx-auto items-center"
        />
      </div>

      <div className="mt-16 flex flex-col gap-5">
        <MovingCards items={principles} duration="64s" />
        <MovingCards items={[...principles].reverse()} reverse duration="72s" />
      </div>
    </section>
  );
}
