import React from "react";
import { Suspense } from "react";
import GlobalLoader from "../GlobalLoader/GlobalLoader";
import { Canvas, useThree } from "@react-three/fiber";
import {  useEffect, useRef, useState } from "react";
import { Sky } from "../../models/Sky";
import { Ship } from "../../models/Ship";
import { Bird } from "../../models/Bird";
import styles from './styles.module.css'

const CanvasComponent = ({
  isRotating = false,
  setIsRotating,
  setCurrentStage ,
  islandPosition,
  islandScale ,
  isOnlyBg=false,
}) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  const audioRef = useRef(null);


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set the volume to 0.5
    }
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

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
      <audio ref={audioRef} src="/sakura.mp3" autoPlay loop>
            Your browser does not support the
            <code>audio</code> element.
          </audio>

          <img
          className={styles.audioIcon}
            src={!isPlayingMusic ? '/soundoff.png' : `/soundon.png`}
            alt='jukebox'
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />

    </>
  );
};

export default CanvasComponent;
