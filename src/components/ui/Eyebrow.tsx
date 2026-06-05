import { cn } from "@/lib/utils";

/** Small label/pill used above section headings. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-haze backdrop-blur",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric" />
      </span>
      {children}
    </span>
  );
}
