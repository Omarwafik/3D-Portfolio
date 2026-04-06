import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense} from "react";
import CanvasLoader from '../Loader';
import { Canvas } from "@react-three/fiber";
// import useIsMobile from "../Hooks/userIsMobile";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={ 6} groundColor="black" />
      <pointLight intensity={ 0.4} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={ 0.60}
        position={[-1, -2.7, -1.5]}
        rotation={[0, -0.4, -0.05]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
 
  return (
    <>
      <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov:  25 }}
      dpr={ [0.5, 1.5]}
      gl={{
        preserveDrawingBuffer: false,
        antialias:true,
        
      }}
      >
        <Suspense fallback={ <CanvasLoader /> }>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            />
          <Computers  />
        </Suspense>
        <Preload all />
      </Canvas>

   
        </>
      
      );
    };

export default ComputersCanvas;
