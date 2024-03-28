import Head from "next/head";
import { Canvas, useThree  } from "@react-three/fiber";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Sky } from "../models/Sky";
import {NightSky} from '../models/NightSky'
import { Ship } from "../models/Ship";
import { Bird} from "../models/Bird";
import {Island} from '../models/Island';
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from '../components/Loader/Loader'
import HomeInfo from '../components/HomeInfo/HomeInfo'
import Navigation from '../components/Navigation/Navigation'


export default function Home() {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
      screenScale = [1.2,1.2,1.2];
      screenPosition = [0,0, -1];
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <>
      <Head>
        <title>Vishwajeet Shetgaonkar</title>
        <meta name="description" content="Vishwajeet Shetgaonker Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={isRotating ? "cursor-grabbing" : "cursor-grab"}>

     <Navigation/>

      <div className={styles.stageContainer}>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

        <Canvas >
        <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={1} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 5, 10]} intensity={1} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
            />
            <hemisphereLight
              groundColor="#000000"
              intensity={1}
            />
          

          <Sky isRotating={isRotating} />
          {/* <NightSky isRotating={isRotating} /> */}

          <Ship   isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          position={islandPosition}
          scale={islandScale}/>

          

          <Bird/>

    
          {/* <Island /> */}
          </Suspense>
        </Canvas>

{!isRotating && <div className={styles.guidance_Icon_container}>
  
<Image
className={styles.GuideIcon}
        src="/press-button.png"
        width={27}
        height={27}
        alt="guidence image"
      />
  
  </div>}
       
      </main>
    </>
  );
}
