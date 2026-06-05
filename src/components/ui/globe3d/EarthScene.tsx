"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const RADIUS = 2;

/* ------------------------------------------------------------------ */
/*  Earth — night-lights texture, glossy sheen, parallax tilt          */
/* ------------------------------------------------------------------ */
function Earth() {
  const group = useRef<THREE.Group>(null);
  const earth = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const [nightMap, bumpMap] = useTexture([
    "/textures/earth-night.jpg",
    "/textures/earth-topology.png",
  ]);

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
    if (earth.current) earth.current.rotation.y += d * 0.05;
    if (group.current) {
      const ty = pointer.current.x * 0.35;
      const tx = -pointer.current.y * 0.22;
      group.current.rotation.y += (ty - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (tx - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={group} rotation={[0.3, 0, 0.1]}>
      <mesh ref={earth}>
        <sphereGeometry args={[RADIUS, 128, 128]} />
        <meshStandardMaterial
          map={nightMap}
          map-colorSpace={THREE.SRGBColorSpace}
          map-anisotropy={8}
          emissiveMap={nightMap}
          emissive={new THREE.Color("#cfe0ff")}
          emissiveIntensity={1.35}
          bumpMap={bumpMap}
          bumpScale={0.05}
          roughness={0.58}
          metalness={0.22}
        />
      </mesh>
    </group>
  );
}

export default function EarthScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 11], fov: 32 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      {/* Soft fill so the unlit side keeps its city-light glow */}
      <ambientLight intensity={0.45} />
      {/* Key light — the bright spot gives the glassy, shiny highlight */}
      <directionalLight position={[5, 3, 5]} intensity={2.4} color="#eaf2ff" />
      {/* Cool rim from below for depth */}
      <pointLight position={[-6, -1, 2]} intensity={26} color="#1f9fd0" />
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
  );
}
