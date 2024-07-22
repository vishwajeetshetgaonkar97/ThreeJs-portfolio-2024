import Head from "next/head";
import { Canvas, useThree } from "@react-three/fiber";
import styles from "@/styles/Projects.module.css";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader/Loader";
import Navigation from "../components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import GlobalLoader from "../components/GlobalLoader/GlobalLoader";
import CanvasComponent from "@/components/CanvasComponent/CanvasComponent";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [1.2, 1.2, 1.2];
    screenPosition = [0, 0, -1];

    return [screenScale, screenPosition];
  };
  console.log("proj", isLoading);
  return (
    <>
      <Head>
        <title>Vishwajeet Shetgaonkar</title>
        <meta name="description" content="Vishwajeet Shetgaonker Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Navigation />
        {/* {  isLoading &&  <GlobalLoader/>} */}
        <div className={styles.canvas}>
          <CanvasComponent
            isRotating
            isOnlyBg
            setIsRotating={undefined}
            setCurrentStage={undefined}
            islandPosition={undefined}
            islandScale={undefined}
          />
        </div>

        <div className={styles.main_container}>
          <div className={styles.headingContainer}>
            <div className={styles.heading}>
              Hello! 🏴‍☠️
              <br />
            </div>
            <div className={styles.subHeading}>
              Checkout Few of my Side Hustle Projects!💰
              <br />
            </div>
          </div>

          <div className={styles.cardsContainer}>
          <div
              className={styles.cardWrapper}
              onClick={() => {
                location.href = "/projects/CocaColaSpline";
              }}
            >
              <img src="/3dCOcaCola.png" alt="coca cola" />
              <div className={styles.cardWrapperHeading}>3D Coca-Cola Website Concept</div>
              <div className={styles.cardWrapperDescription}>
              A modern and engaging digital experience that leverages trending 3D immersive technologies.
              </div>
            </div>

            <div
              className={styles.cardWrapper}
              onClick={() => {
                location.href = "/projects/SarvaDashboard";
              }}
            >
              <img src="/sarvaIntroImage.png" alt="sarve" />
              <div className={styles.cardWrapperHeading}>Sarva Dashboard</div>
              <div className={styles.cardWrapperDescription}>
                A dashboard for displaying air quality conditions for buildings
                and surrounding areas on a map, along with additional relevant
                information.
              </div>
            </div>

            <div
              className={styles.cardWrapper}
              onClick={() => {
                location.href = "/projects/SpotFind";
                // window.open("https://www.producthunt.com/products/spotfind");
              }}
            >
              <img src="/spotFindIntroImage.png" alt="dashboard" />
              <div className={styles.cardWrapperHeading}>Spot-Find</div>
              <div className={styles.cardWrapperDescription}>
                SpotFind is a music discovery tool to help you in times where
                you just can't seem to find something new to listen to.
              </div>
            </div>

            <div
              className={styles.cardWrapper}
              onClick={() => {
                location.href = "/projects/SvPlay";
              }}
            >
              <img src="/svPlayIntroImage.png" alt="dashboard" />
              <div className={styles.cardWrapperHeading}>SV-Play</div>
              <div className={styles.cardWrapperDescription}>
                A turf booking app for users in their locality with the
                capability to share it on multiple platforms
              </div>
            </div>

            <div
              className={styles.cardWrapper}
              onClick={() => {
                window.open(
                  "https://github.com/vishwajeetshetgaonkar97/CSS-F1"
                );
              }}
            >
              <img src="/f1.png" alt="dashboard" />
              <div className={styles.cardWrapperHeading}>CSS F1 Car</div>
              <div className={styles.cardWrapperDescription}>
                A pure CSS representation of a Formula 1 car to explore
                different forms and properties, which helps in reducing
                unnecessary use of plugins and packages for better optimization.
              </div>
            </div>

            {/* <div
              className={styles.cardWrapper}
              onClick={() => {
                window.open(
                  "https://github.com/vishwajeetshetgaonkar97/CSS-Santa"
                );
              }}
            >
              <img src="/santa.png" alt="dashboard" />
              <div className={styles.cardWrapperHeading}>CSS Santa Claus</div>
              <div className={styles.cardWrapperDescription}>
                A pure CSS representation of a snowy landscape with Santa Claus
                to explore and learn different properties of css, which helps in
                reducing unnecessary use of plugins and packages for better
                optimization.
              </div>
            </div>

            <div
              className={styles.cardWrapper}
              onClick={() => {
                window.open(
                  "https://dribbble.com/shots/23478262-Restaurant-Logo"
                );
              }}
            >
              <img src="/restaurantLogo.png" alt="dashboard" />
              <div className={styles.cardWrapperHeading}>
                Flavor Heaven Logo
              </div>
              <div className={styles.cardWrapperDescription}>
                Create a logo for a retro-style restaurant imbued with a vintage
                feel, vibrant and nostalgic vibe, aiming to evoke feelings of
                nostalgia, freedom, and the recollection of good old times.
              </div>
            </div> */}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
