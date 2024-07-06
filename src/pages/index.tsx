import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Suspense, useEffect, useRef, useState } from "react";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import GlobalLoader from "../components/GlobalLoader/GlobalLoader";
import CanvasComponent from "../components/CanvasComponent/CanvasComponent";

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentStage, setCurrentStage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    if (isMobile) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, 0, -1];
    } else {
      screenScale = [1.2, 1.2, 1.2];
      screenPosition = [0, 0, -1];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  useEffect(() => {
    setIsMobile(window.innerWidth < 868);
  }, []);
  console.log("window width", isMobile);

  return (
    <>
      <Head>
        <title>Vishwajeet Shetgaonkar</title>
        <meta name="description" content="Vishwajeet Shetgaonker Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Suspense fallback={<GlobalLoader />}>
        {/* {isMobile &&  <WipMobileModal setModal={setIsMobile}/>} */}
        <main className={isRotating ? "cursor-grabbing" : "cursor-grab"}>
          <Navigation />

          {/* {!isMobile && isLoading && <GlobalLoader />} */}

          <>
            <div className={styles.stageContainer}>
              {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <CanvasComponent
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              islandPosition={islandPosition}
              islandScale={islandScale}
            />
          </>

          {!isRotating && (
            <div className={styles.guidance_Icon_container}>
              <Image
                className={styles.GuideIcon}
                src={`/pressButton.png`}
                width={27}
                height={27}
                alt="guidence image"
              />
            </div>
          )}

          <Footer />
        </main>
      </Suspense>
    </>
  );
}
