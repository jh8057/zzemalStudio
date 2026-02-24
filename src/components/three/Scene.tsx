"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import CameraLens from "./CameraLens";
import FloatingShapes from "./FloatingShapes";
import type { Group } from "three";

function MouseParallax({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<Group>(null);
  const { size } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / size.width - 0.5) * 2;
      mouse.current.y = -(e.clientY / size.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y +=
        (mouse.current.x * 0.05 - groupRef.current.rotation.y) * 0.03;
      groupRef.current.rotation.x +=
        (mouse.current.y * 0.03 - groupRef.current.rotation.x) * 0.03;
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

function SceneContent({ lite }: { lite: boolean }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        color="#faf9f7"
      />
      <pointLight
        position={[-4, 3, 2]}
        intensity={6}
        color="#e8e5e0"
        distance={20}
        decay={2}
      />
      <MouseParallax>
        <CameraLens />
        {!lite && <FloatingShapes />}
      </MouseParallax>
      <Environment preset="apartment" />
      <fog attach="fog" args={["#faf9f7", 6, 18]} />
    </>
  );
}

function isLowEndDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const cores = navigator.hardwareConcurrency;
  if (cores && cores <= 4) return true;
  if (/Android/i.test(navigator.userAgent) && window.innerWidth < 768)
    return true;
  return false;
}

export default function Scene() {
  const [state, setState] = useState<"loading" | "lite" | "full">("loading");

  useEffect(() => {
    const isMobile =
      window.innerWidth < 768 ||
      /Android|iPhone|iPad/i.test(navigator.userAgent);
    const lowEnd = isLowEndDevice();

    if (isMobile && lowEnd) {
      setState("lite");
    } else {
      setState(isMobile ? "lite" : "full");
    }
  }, []);

  if (state === "loading") return null;

  const lite = state === "lite";

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={lite ? [1, 1] : [1, 2]}
      gl={{
        powerPreference: "high-performance",
        antialias: !lite,
        stencil: false,
        depth: true,
      }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <SceneContent lite={lite} />
      </Suspense>
    </Canvas>
  );
}
