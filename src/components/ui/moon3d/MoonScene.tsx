"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Deterministic PRNG (mulberry32) — stable craters across renders    */
/* ------------------------------------------------------------------ */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ------------------------------------------------------------------ */
/*  Procedural moon textures (color + bump) drawn to a 2D canvas       */
/*  — no external image assets, generated once.                        */
/* ------------------------------------------------------------------ */
function makeMoonTextures() {
  const size = 1024;
  const rng = mulberry32(73331);

  const color = document.createElement("canvas");
  color.width = color.height = size;
  const cctx = color.getContext("2d")!;

  const bump = document.createElement("canvas");
  bump.width = bump.height = size;
  const bctx = bump.getContext("2d")!;

  // Base color — cool charcoal blue with a soft vertical gradient.
  const grad = cctx.createLinearGradient(0, 0, 0, size);
  grad.addColorStop(0, "#3a4a6b");
  grad.addColorStop(0.5, "#202b47");
  grad.addColorStop(1, "#121a30");
  cctx.fillStyle = grad;
  cctx.fillRect(0, 0, size, size);

  // Base bump — mid grey.
  bctx.fillStyle = "#808080";
  bctx.fillRect(0, 0, size, size);

  // Fine speckle (mare/regolith variation).
  for (let i = 0; i < 5200; i++) {
    const x = rng() * size;
    const y = rng() * size;
    const r = rng() * 1.6 + 0.3;
    const shade = rng() > 0.5 ? 255 : 0;
    cctx.fillStyle = `rgba(${shade},${shade},${shade},0.04)`;
    cctx.beginPath();
    cctx.arc(x, y, r, 0, Math.PI * 2);
    cctx.fill();
  }

  // Craters — darker basin, bright sunlit rim. Drawn to both maps.
  const craters = 46;
  for (let i = 0; i < craters; i++) {
    const x = rng() * size;
    const y = rng() * size;
    const radius = rng() * 46 + 8;

    // Color: dark basin
    const cg = cctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
    cg.addColorStop(0, "rgba(8,12,24,0.55)");
    cg.addColorStop(0.7, "rgba(20,28,48,0.25)");
    cg.addColorStop(1, "rgba(150,180,230,0.10)");
    cctx.fillStyle = cg;
    cctx.beginPath();
    cctx.arc(x, y, radius, 0, Math.PI * 2);
    cctx.fill();

    // Bump: dark center + light rim => relief
    const bg = bctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
    bg.addColorStop(0, "rgba(40,40,40,0.9)");
    bg.addColorStop(0.78, "rgba(128,128,128,0.0)");
    bg.addColorStop(0.9, "rgba(235,235,235,0.85)");
    bg.addColorStop(1, "rgba(128,128,128,0.0)");
    bctx.fillStyle = bg;
    bctx.beginPath();
    bctx.arc(x, y, radius * 1.05, 0, Math.PI * 2);
    bctx.fill();
  }

  const colorTex = new THREE.CanvasTexture(color);
  const bumpTex = new THREE.CanvasTexture(bump);
  colorTex.colorSpace = THREE.SRGBColorSpace;
  colorTex.anisotropy = 4;
  return { colorTex, bumpTex };
}

/* ------------------------------------------------------------------ */
/*  Fresnel atmosphere shell                                           */
/* ------------------------------------------------------------------ */
function Atmosphere({ color, power = 3, intensity = 1.1 }: { color: string; power?: number; intensity?: number }) {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false,
        uniforms: {
          uColor: { value: new THREE.Color(color) },
          uPower: { value: power },
          uIntensity: { value: intensity },
        },
        vertexShader: /* glsl */ `
          varying vec3 vNormal;
          varying vec3 vEye;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vEye = normalize(-mv.xyz);
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: /* glsl */ `
          uniform vec3 uColor;
          uniform float uPower;
          uniform float uIntensity;
          varying vec3 vNormal;
          varying vec3 vEye;
          void main() {
            float fres = pow(1.0 - max(dot(vNormal, vEye), 0.0), uPower);
            gl_FragColor = vec4(uColor, fres * uIntensity);
          }
        `,
      }),
    [color, power, intensity]
  );

  return (
    <mesh scale={1.16}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/*  Moon body + pointer parallax                                       */
/* ------------------------------------------------------------------ */
function Moon() {
  const group = useRef<THREE.Group>(null);
  const moon = useRef<THREE.Mesh>(null);
  // Track the pointer across the whole window (canvas is pointer-events-none).
  const pointer = useRef({ x: 0, y: 0 });
  const { colorTex, bumpTex } = useMemo(() => makeMoonTextures(), []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    const d = Math.min(delta, 0.05);
    if (moon.current) moon.current.rotation.y += d * 0.05;
    if (group.current) {
      // ease the whole group toward the pointer for a tactile parallax tilt
      const targetY = pointer.current.x * 0.4;
      const targetX = -pointer.current.y * 0.28;
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={moon}>
        <sphereGeometry args={[1.5, 128, 128]} />
        <meshStandardMaterial
          map={colorTex}
          bumpMap={bumpTex}
          bumpScale={0.06}
          metalness={0.05}
          roughness={0.92}
        />
      </mesh>
      <Atmosphere color="#4da6ff" power={3} intensity={1.15} />
      <Atmosphere color="#8b5cf6" power={6} intensity={0.5} />
    </group>
  );
}

export default function MoonScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 34 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.35} />
      {/* Key light — warm-cool sunlight from upper right */}
      <directionalLight position={[4, 3, 5]} intensity={2.4} color="#dfe9ff" />
      {/* Accent rim lights */}
      <pointLight position={[-5, -1, 2]} intensity={28} color="#8b5cf6" />
      <pointLight position={[5, 2, 3]} intensity={18} color="#4da6ff" />

      <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.55}>
        <Moon />
      </Float>
    </Canvas>
  );
}
