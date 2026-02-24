"use client";

import { Float } from "@react-three/drei";

function Particle({
  position,
  size = 0.06,
  speed = 1,
}: {
  position: [number, number, number];
  size?: number;
  speed?: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0} floatIntensity={1.5}>
      <mesh position={position}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color="#8b7355"
          emissive="#8b7355"
          emissiveIntensity={0.5}
          toneMapped={false}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingShapes() {
  return (
    <group>
      <Particle position={[-3, 1.5, -2]} size={0.04} speed={0.8} />
      <Particle position={[3.5, -1, -3]} size={0.05} speed={1.2} />
      <Particle position={[-2, -2, -1]} size={0.03} speed={1} />
    </group>
  );
}
