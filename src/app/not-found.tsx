import { Starfield } from "@/components/ui/Starfield";
import { Button } from "@/components/ui/Button";
import { Moon } from "@/components/ui/Moon";

export default function NotFound() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Starfield />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(77,166,255,0.16),transparent_55%)]"
      />
      <Moon className="absolute right-[8%] top-[14%] w-40 opacity-70 md:w-56" />

      <div className="relative z-10 flex flex-col items-center">
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-electric">
          Error 404
        </p>
        <h1 className="mt-5 font-display text-7xl font-semibold text-cloud sm:text-8xl">
          Lost in orbit.
        </h1>
        <p className="mt-5 max-w-md text-pretty text-lg text-mist">
          The page you&apos;re looking for has drifted beyond our reach. Let&apos;s
          get you back to solid ground.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">Return home</Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
