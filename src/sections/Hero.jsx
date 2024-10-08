import { PerspectiveCamera } from "@react-three/drei";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Abishek <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Learning Building Projects
        </p>
        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <Suspense fallback={null}></Suspense>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              scale={0.05}
              position={[0, 0, 0]}
              wrotation={[0, -Math.PI / 2, 0]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
