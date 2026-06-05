"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line, useTexture } from "@react-three/drei";
import * as THREE from "three";

const RADIUS = 1.5;

/** Deterministic PRNG (mulberry32) — stable across renders & SSR. */
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

/** Evenly distribute N points on a sphere (Fibonacci lattice). */
function fibonacciSphere(samples: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points.push(
      new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius)
    );
  }
  return points;
}

type ArcData = {
  curve: THREE.QuadraticBezierCurve3;
  points: THREE.Vector3[];
  color: string;
  speed: number;
  offset: number;
};

function buildArcs(): ArcData[] {
  const nodes = fibonacciSphere(950, RADIUS);
  const rng = mulberry32(20240711);
  const palette = ["#00c2ff", "#4fd3ec", "#38e0d0"];
  const arcs: ArcData[] = [];
  for (let i = 0; i < 10; i++) {
    const a = nodes[Math.floor(rng() * nodes.length)];
    const b = nodes[Math.floor(rng() * nodes.length)];
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const lift = 1 + 0.5 * (a.distanceTo(b) / (RADIUS * 2));
    mid.normalize().multiplyScalar(RADIUS * lift);
    const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
    arcs.push({
      curve,
      points: curve.getPoints(60),
      color: palette[i % palette.length],
      speed: 0.16 + rng() * 0.2,
      offset: rng(),
    });
  }
  return arcs;
}

/** A glowing dot of light travelling along an arc — the "data in transit". */
function Pulse({ curve, color, speed, offset }: ArcData) {
  const ref = useRef<THREE.Mesh>(null);
  const v = useMemo(() => new THREE.Vector3(), []);
  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * speed + offset) % 1;
    curve.getPoint(t, v);
    ref.current.position.copy(v);
    const s = 0.6 + Math.sin(t * Math.PI) * 0.8; // fade in/out along the path
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.022, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function Arcs() {
  const arcs = useMemo(() => buildArcs(), []);
  return (
    <>
      {arcs.map((arc, i) => (
        <group key={i}>
          <Line points={arc.points} color={arc.color} lineWidth={1.1} transparent opacity={0.5} />
          <Pulse {...arc} />
        </group>
      ))}
    </>
  );
}

/** Night-lights earth with a glossy sheen — the surface beneath the arcs. */
function Earth() {
  const [nightMap, bumpMap] = useTexture([
    "/textures/earth-night.jpg",
    "/textures/earth-topology.png",
  ]);
  return (
    <mesh>
      <sphereGeometry args={[RADIUS, 128, 128]} />
      <meshStandardMaterial
        map={nightMap}
        map-colorSpace={THREE.SRGBColorSpace}
        map-anisotropy={8}
        emissiveMap={nightMap}
        emissive={new THREE.Color("#cfe0ff")}
        emissiveIntensity={1.35}
        bumpMap={bumpMap}
        bumpScale={0.04}
        roughness={0.58}
        metalness={0.22}
      />
    </mesh>
  );
}

function GlobeGroup() {
  return (
    <group rotation={[0.32, 0, 0.16]}>
      <Earth />
      <Arcs />
    </group>
  );
}

export default function GlobeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.6], fov: 30 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.45} />
      {/* Key light — the bright spot gives the glassy, shiny highlight */}
      <directionalLight position={[5, 3, 5]} intensity={2.2} color="#eaf2ff" />
      <pointLight position={[-5, -2, -4]} intensity={16} color="#1f9fd0" />
      <Suspense fallback={null}>
        <GlobeGroup />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.45}
        rotateSpeed={0.4}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.6}
      />
    </Canvas>
  );
}
