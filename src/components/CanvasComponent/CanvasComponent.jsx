import React from "react";
import { Suspense } from "react";
import GlobalLoader from "../GlobalLoader/GlobalLoader";
import { Canvas, useThree } from "@react-three/fiber";
import { Sky } from "../../models/Sky";
import { Ship } from "../../models/Ship";
import { Bird } from "../../models/Bird";

const CanvasComponent = ({
  isRotating = false,
  setIsRotating,
  setCurrentStage ,
  islandPosition,
  islandScale ,
  isOnlyBg=false,
}) => {
  return (
    <>
      <Suspense fallback={<GlobalLoader />}>
        <Canvas>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 5, 10]} intensity={1} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
          />
          <hemisphereLight groundColor="#000000" intensity={1} />

          <Sky isRotating={isRotating} />
          {/* <NightSky isRotating={isRotating} /> */}

     { !isOnlyBg &&    <Ship
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            scale={islandScale}
          />}

          <Bird />

          {/* <Island /> */}
        </Canvas>
      </Suspense>
    </>
  );
};

export default CanvasComponent;
