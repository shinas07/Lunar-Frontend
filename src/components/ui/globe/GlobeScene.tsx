"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import * as THREE from "three";

const RADIUS = 1.6;

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

function Nodes() {
  const points = useMemo(() => fibonacciSphere(700, RADIUS), []);
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(points);
    return g;
  }, [points]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.022}
        color="#7cc0ff"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Arc({ start, end, color }: { start: THREE.Vector3; end: THREE.Vector3; color: string }) {
  const points = useMemo(() => {
    const mid = start.clone().add(end).multiplyScalar(0.5);
    const lift = 1 + 0.45 * (start.distanceTo(end) / (RADIUS * 2));
    mid.normalize().multiplyScalar(RADIUS * lift);
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return curve.getPoints(50);
  }, [start, end]);

  return <Line points={points} color={color} lineWidth={1.1} transparent opacity={0.55} />;
}

function Arcs() {
  const nodes = useMemo(() => fibonacciSphere(700, RADIUS), []);
  const arcs = useMemo(() => {
    const rng = mulberry32(20240711);
    const pairs: { start: THREE.Vector3; end: THREE.Vector3; color: string }[] = [];
    const palette = ["#4da6ff", "#a98bff", "#38e0d0"];
    for (let i = 0; i < 7; i++) {
      const a = nodes[Math.floor(rng() * nodes.length)];
      const b = nodes[Math.floor(rng() * nodes.length)];
      pairs.push({ start: a, end: b, color: palette[i % palette.length] });
    }
    return pairs;
  }, [nodes]);

  return (
    <>
      {arcs.map((arc, i) => (
        <Arc key={i} {...arc} />
      ))}
    </>
  );
}

function Markers() {
  const markers = useMemo(() => {
    const all = fibonacciSphere(700, RADIUS);
    const rng = mulberry32(81735);
    return Array.from({ length: 9 }, () => all[Math.floor(rng() * all.length)]);
  }, []);

  return (
    <>
      {markers.map((m, i) => (
        <mesh key={i} position={m}>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </>
  );
}

function Globe() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.06;
  });

  return (
    <group ref={group} rotation={[0.35, 0, 0.18]}>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[RADIUS * 0.985, 48, 48]} />
        <meshStandardMaterial
          color="#070b16"
          emissive="#0a1733"
          emissiveIntensity={0.4}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
      {/* Wireframe shell */}
      <mesh>
        <sphereGeometry args={[RADIUS * 0.99, 24, 24]} />
        <meshBasicMaterial color="#1f3a66" wireframe transparent opacity={0.35} />
      </mesh>
      <Nodes />
      <Arcs />
      <Markers />
      {/* Atmosphere */}
      <mesh scale={1.18}>
        <sphereGeometry args={[RADIUS, 48, 48]} />
        <meshBasicMaterial color="#4da6ff" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

export default function GlobeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 3, 5]} intensity={40} color="#4da6ff" />
      <pointLight position={[-5, -2, -5]} intensity={25} color="#8b5cf6" />
      <Globe />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        rotateSpeed={0.4}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.6}
      />
    </Canvas>
  );
}
