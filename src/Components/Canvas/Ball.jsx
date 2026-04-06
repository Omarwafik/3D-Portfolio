import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import useIsMobile from "../Hooks/userIsMobile";

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={isMobile ? 0.5 : 1.75}
      rotationIntensity={isMobile ? 0.3 : 1}
      floatIntensity={isMobile ? 0.7 : 2}
    >
      <ambientLight intensity={isMobile ? 0.3 : 0.25} />
      <directionalLight position={[0, 0, 0.05]} intensity={isMobile ? 0.3 : 0.8} />
      <mesh castShadow receiveShadow scale={isMobile ? 1.8 : 2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const isMobile = useIsMobile();
  const [renderable, setRenderable] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isMobile) {
      timeoutRef.current = setTimeout(() => {
        setRenderable(false);
      }, 5000); 
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isMobile]);

  if (!renderable && isMobile) {
    return (
      <p className="text-white text-center mt-5">
3D Can't Load on your device Refreshing may make a change.      </p>
    );
  }

  return (
    <Canvas
      shadows={isMobile?false:true}
      frameloop="always"
      dpr={isMobile ? 0.5 : [1, 2]}
      gl={{
        preserveDrawingBuffer: false,
        antialias: !isMobile,
        powerPreference: isMobile ? "low-power" : "high-performance",
      }}
      onCreated={() => {
        if (isMobile) {
          clearTimeout(timeoutRef.current);
        }
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
