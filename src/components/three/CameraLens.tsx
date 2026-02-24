"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import type { Mesh } from "three";

export default function CameraLens() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.08;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={2.2}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshTransmissionMaterial
        backside
        samples={6}
        thickness={0.6}
        chromaticAberration={0.04}
        anisotropy={0.1}
        distortion={0.08}
        distortionScale={0.15}
        temporalDistortion={0.03}
        color="#e8e5e0"
        roughness={0.02}
        transmission={0.96}
        ior={1.5}
      />
    </mesh>
  );
}
