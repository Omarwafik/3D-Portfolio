import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import useIsMobile from "../Hooks/userIsMobile";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 1.6 : 2.3}
      position-y={-0.5}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
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
3D Can't Load on your device Refreshing may make a change.            </p>
          );
        }
  return (
    <Canvas
    shadows={false}
      frameloop="demand"
      dpr={isMobile ? 0.7 : [1, 2]}
      camera={{
        fov: isMobile ? 30 : 45,
        near: 0.1,
        far: 200,
        position: [-4, 5, 6],
      }}
      gl={{ preserveDrawingBuffer: false, antialias: isMobile?false:true ,powerPreference:isMobile?"low-power":"high-performance"}}
       onCreated={() => {
            if (isMobile) {
              clearTimeout(timeoutRef.current);
            }
          }} 
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
