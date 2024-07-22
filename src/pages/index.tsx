import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Suspense, useEffect, useState } from "react";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import GlobalLoader from "../components/GlobalLoader/GlobalLoader";
import CanvasComponent from "../components/CanvasComponent/CanvasComponent";

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    if (isMobile) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, 0, -1];
    } else {
      screenScale = [1.2, 1.2, 1.2];
      screenPosition = [0, 30, -1];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  useEffect(() => {
    setIsMobile(window.innerWidth < 868);
  }, []);

  // Function to handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
     <Head>
        <title>Vishwajeet Shetgaonkar</title>
        <meta name="description" content="Vishwajeet Shetgaonkar, a skilled UI/UX Designer and Front End Developer specializing in ReactJS and the MERN stack. Explore my portfolio and projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Vishwajeet Shetgaonkar, UI/UX Designer, Front End Developer, ReactJS Specialist, MERN Stack Developer" />
        <link rel="icon" href="/vishLogo.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vish.world/" />
        <meta property="og:title" content="Vishwajeet Shetgaonkar - UI/UX Designer & ReactJS Specialist" />
        <meta property="og:description" content="Vishwajeet Shetgaonkar, a skilled UI/UX Designer and Front End Developer specializing in ReactJS and the MERN stack. Explore my portfolio and projects." />
        <meta property="og:image" content="https://vish.world/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://twitter.com/vshetgaonkar97" />
        <meta property="twitter:title" content="Vishwajeet Shetgaonkar - UI/UX Designer & ReactJS Specialist" />
        <meta property="twitter:description" content="Vishwajeet Shetgaonkar, a skilled UI/UX Designer and Front End Developer specializing in ReactJS and the MERN stack. Explore my portfolio and projects." />
        <meta property="twitter:image" content="https://vish.world/logo.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Vishwajeet Shetgaonkar",
            "jobTitle": "UI/UX Designer & Front End Developer",
            "url": "https://vish.world",
            "sameAs": [
              "https://www.linkedin.com/in/vishwajeet-shetgaonkar",
              "https://github.com/vishwajeetshetgaonkar97",
              "https://twitter.com/vshetgaonkar97"
            ],
            "image": "https://vish.world/logo.png",
            "description": "Vishwajeet Shetgaonkar, a skilled UI/UX Designer and Front End Developer specializing in ReactJS and the MERN stack. Explore my portfolio and projects.",
          })}
        </script>
      </Head>
    
      <Suspense fallback={<GlobalLoader />}>
        <main className={isRotating ? "cursor-grabbing" : "cursor-grab"}>
          <Navigation />
          <div className={styles.canvas}>
            <div className={styles.stageContainer}>
              {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <CanvasComponent
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              islandPosition={islandPosition}
              islandScale={islandScale}
              onLoadComplete={handleLoadingComplete} 
            />
          </div>

          {!isRotating && (
            <div className={styles.guidance_Icon_container}>
              <Image
                className={styles.GuideIcon}
                src={`/dragHand.png`}
                width={27}
                height={27}
                alt="guidence image"
              />
              <div className={styles.GuideText}>Drag to Explore</div>
            </div>
          )}
          <Footer />
        </main>
      </Suspense>
      {isLoading && <GlobalLoader />} {/* Show loader if isLoading is true */}
    </>
  );
}

