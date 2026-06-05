import { Marquee } from "@/components/ui/Marquee";
import { industries } from "@/lib/data";

export function TrustBar() {
  return (
    <div className="relative border-y border-line bg-ink-2/60 py-7">
      <p className="container-px mx-auto mb-6 max-w-7xl text-center font-mono text-xs uppercase tracking-[0.22em] text-faint">
        Trusted by startups, enterprises &amp; Web3 teams worldwide
      </p>
      <Marquee duration="38s">
        {industries.map((name) => (
          <span
            key={name}
            className="mx-2 flex shrink-0 items-center gap-3 text-lg font-medium text-mist transition-colors hover:text-cloud sm:text-xl"
          >
            {name}
            <span className="h-1 w-1 rounded-full bg-electric/50" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
