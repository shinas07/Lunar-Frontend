import { cn } from "@/lib/utils";

/** Consistent vertical rhythm + centered max-width container. */
export function Section({
  children,
  className,
  id,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "tight" | "wide";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        size === "tight" ? "py-16 md:py-20" : "py-24 md:py-32",
        className
      )}
    >
      <div
        className={cn(
          "container-px mx-auto",
          size === "wide" ? "max-w-[88rem]" : "max-w-7xl"
        )}
      >
        {children}
      </div>
    </section>
  );
}
