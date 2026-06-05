"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Star = {
  x: number;
  y: number;
  z: number; // depth 0..1 for parallax
  r: number;
  baseAlpha: number;
  twinkle: number;
};

type ShootingStar = {
  x: number;
  y: number;
  len: number;
  speed: number;
  angle: number;
  life: number;
  maxLife: number;
};

/**
 * Lightweight canvas starfield. Renders a parallax star field that
 * drifts and reacts subtly to the pointer, with occasional shooting
 * stars. DPR-aware, pauses off-screen, and respects reduced motion.
 */
export function Starfield({
  className,
  density = 0.00016,
  shooting = true,
}: {
  className?: string;
  density?: number;
  shooting?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let shooters: ShootingStar[] = [];
    let raf = 0;
    let running = true;
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    const palette = ["#ffffff", "#bcd6ff", "#cdbcff", "#8fc6ff"];

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(Math.floor(width * height * density), 320);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        r: Math.random() * 1.3 + 0.2,
        baseAlpha: Math.random() * 0.6 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      }));
    };

    const spawnShooter = () => {
      if (!shooting || reduced) return;
      const fromLeft = Math.random() > 0.5;
      shooters.push({
        x: fromLeft ? -40 : width + 40,
        y: Math.random() * height * 0.5,
        len: Math.random() * 120 + 80,
        speed: Math.random() * 6 + 6,
        angle: fromLeft ? Math.PI / 6 : Math.PI - Math.PI / 6,
        life: 0,
        maxLife: 90,
      });
    };

    let lastShooter = 0;
    let t = 0;

    const draw = (now: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      t += 0.016;

      // Ease pointer
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      const px = (pointer.x - 0.5) * 2;
      const py = (pointer.y - 0.5) * 2;

      for (const s of stars) {
        const drift = reduced ? 0 : t * (0.06 + s.z * 0.18);
        const offX = px * s.z * 18;
        const offY = py * s.z * 18;
        let x = (s.x + drift * 6 + offX) % width;
        if (x < 0) x += width;
        const y = (s.y + offY) % height;

        const tw = reduced ? s.baseAlpha : s.baseAlpha + Math.sin(t * 1.6 + s.twinkle) * 0.25;
        ctx.globalAlpha = Math.max(0.05, Math.min(1, tw));
        ctx.beginPath();
        ctx.arc(x, y, s.r * (0.6 + s.z), 0, Math.PI * 2);
        ctx.fillStyle = palette[(s.r * 10) % palette.length | 0];
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Shooting stars
      if (now - lastShooter > 2600 && Math.random() > 0.7) {
        spawnShooter();
        lastShooter = now;
      }
      shooters = shooters.filter((sh) => sh.life < sh.maxLife);
      for (const sh of shooters) {
        sh.life += 1;
        sh.x += Math.cos(sh.angle) * sh.speed;
        sh.y += Math.sin(sh.angle) * sh.speed;
        const tailX = sh.x - Math.cos(sh.angle) * sh.len;
        const tailY = sh.y - Math.sin(sh.angle) * sh.len;
        const grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
        const a = 1 - sh.life / sh.maxLife;
        grad.addColorStop(0, `rgba(180,214,255,${a})`);
        grad.addColorStop(1, "rgba(180,214,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    const onPointer = (e: PointerEvent) => {
      pointer.tx = e.clientX / window.innerWidth;
      pointer.ty = e.clientY / window.innerHeight;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) {
          raf = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    io.observe(canvas);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      io.disconnect();
    };
  }, [density, shooting]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}
