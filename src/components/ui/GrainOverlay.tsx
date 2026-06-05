/**
 * Full-screen film-grain overlay for tactile, premium depth. Static SVG
 * fractal noise — zero JS, GPU-cheap, and pointer-transparent.
 */
const noise = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>
    <filter id='n'>
      <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>
      <feColorMatrix type='saturate' values='0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#n)'/>
  </svg>`
);

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] opacity-[0.035] mix-blend-soft-light"
      style={{
        backgroundImage: `url("data:image/svg+xml,${noise}")`,
        backgroundSize: "160px 160px",
      }}
    />
  );
}
