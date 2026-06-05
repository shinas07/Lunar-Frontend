import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/data";

const accentMap = {
  electric: { text: "text-electric", glow: "rgba(77,166,255,0.16)", ring: "group-hover:border-electric/40" },
  violet: { text: "text-violet-bright", glow: "rgba(139,92,246,0.16)", ring: "group-hover:border-violet/40" },
  aqua: { text: "text-aqua", glow: "rgba(56,224,208,0.14)", ring: "group-hover:border-aqua/40" },
} as const;

export function ServiceCard({
  service,
  href = "/services",
  showCapabilities = false,
}: {
  service: Service;
  href?: string;
  showCapabilities?: boolean;
}) {
  const Icon = service.icon;
  const accent = accentMap[service.accent];

  return (
    <SpotlightCard spotlightColor={accent.glow} className="h-full">
      <Link href={href} className="flex h-full flex-col p-7 md:p-8">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-elevated/60 transition-colors",
              accent.ring
            )}
          >
            <Icon className={cn("h-6 w-6", accent.text)} />
          </span>
          <ArrowUpRight className="h-5 w-5 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cloud" />
        </div>

        <h3 className="mt-6 font-display text-xl font-semibold text-cloud">
          {service.title}
        </h3>
        <p className={cn("mt-1 text-sm font-medium", accent.text)}>
          {service.tagline}
        </p>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-mist">
          {service.description}
        </p>

        {showCapabilities && (
          <ul className="mt-6 flex flex-col gap-2 border-t border-line pt-5">
            {service.capabilities.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm text-haze">
                <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", `bg-current ${accent.text}`)} />
                {c}
              </li>
            ))}
          </ul>
        )}
      </Link>
    </SpotlightCard>
  );
}
