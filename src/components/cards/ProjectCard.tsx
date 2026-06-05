import { ArrowUpRight, Lock } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Tilt } from "@/components/ui/Tilt";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

const accentMap = {
  electric: { glow: "rgba(77,166,255,0.16)", text: "text-electric", from: "from-electric/20" },
  violet: { glow: "rgba(139,92,246,0.16)", text: "text-violet-bright", from: "from-violet/20" },
  aqua: { glow: "rgba(56,224,208,0.14)", text: "text-aqua", from: "from-aqua/20" },
} as const;

const statusStyle: Record<Project["status"], string> = {
  "In Production": "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "In Development": "border-amber-400/30 bg-amber-400/10 text-amber-300",
  "Case Study": "border-electric/30 bg-electric/10 text-electric",
};

export function ProjectCard({ project }: { project: Project }) {
  const accent = accentMap[project.accent];

  return (
    <Tilt className="h-full" max={5}>
      <SpotlightCard spotlightColor={accent.glow} className="h-full">
      <div className="flex h-full flex-col p-7 md:p-9">
        {/* Visual band */}
        <div
          aria-hidden
          className={cn(
            "relative mb-7 h-40 overflow-hidden rounded-xl border border-line bg-gradient-to-br to-surface-2",
            accent.from
          )}
        >
          <div className="absolute inset-0 bg-dots opacity-40" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,var(--tw-gradient-from),transparent_70%)] blur-xl" />
          <span className="absolute bottom-4 left-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-haze">
            {project.sector}
          </span>
          <span className="absolute right-4 top-4 font-display text-3xl font-bold text-cloud/20">
            {project.year}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-widest",
              statusStyle[project.status]
            )}
          >
            {project.status}
          </span>
          {project.confidential && (
            <span className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-faint">
              <Lock className="h-3 w-3" /> Confidential
            </span>
          )}
        </div>

        <h3 className="mt-4 flex items-start justify-between gap-3 font-display text-2xl font-semibold text-cloud">
          {project.name}
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cloud" />
        </h3>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-mist">
          {project.summary}
        </p>

        {/* Metrics */}
        <div className="mt-auto grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line pt-px">
          {project.metrics.map((m) => (
            <div key={m.label} className="bg-surface/80 p-4 text-center">
              <div className={cn("font-display text-lg font-semibold", accent.text)}>
                {m.value}
              </div>
              <div className="mt-1 text-[0.7rem] leading-tight text-faint">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
      </SpotlightCard>
    </Tilt>
  );
}
