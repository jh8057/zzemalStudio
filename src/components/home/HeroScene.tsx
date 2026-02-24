"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh, Group } from "three";

function Ring({ position, scale = 1, speed = 0.3 }: { position: [number, number, number]; scale?: number; speed?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed;
      ref.current.rotation.z += delta * speed * 0.5;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={0.8} rotationIntensity={0}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.02, 16, 64]} />
        <meshBasicMaterial color="#c8b8a0" transparent opacity={0.35} />
      </mesh>
    </Float>
  );
}

function Dot({ position, size = 0.03 }: { position: [number, number, number]; size?: number }) {
  return (
    <Float speed={2} floatIntensity={1.2} rotationIntensity={0}>
      <mesh position={position}>
        <sphereGeometry args={[size, 8, 8]} />
        <meshBasicMaterial color="#8b7355" transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <Ring position={[0, 0, 0]} scale={1.8} speed={0.2} />
      <Ring position={[0.3, 0.2, -1]} scale={1.2} speed={0.35} />
      <Ring position={[-0.2, -0.1, -0.5]} scale={0.7} speed={0.25} />
      <Dot position={[-2.5, 1.2, -1]} size={0.04} />
      <Dot position={[2.8, -0.8, -2]} size={0.03} />
      <Dot position={[-1.5, -1.5, -0.5]} size={0.025} />
      <Dot position={[1.8, 1.5, -1.5]} size={0.035} />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ powerPreference: "high-performance", antialias: false, stencil: false, depth: false }}
      className="!absolute inset-0"
    >
      <SceneContent />
    </Canvas>
  );
}
