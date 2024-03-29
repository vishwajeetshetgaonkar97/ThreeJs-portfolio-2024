import Head from "next/head";
import { Canvas, useThree } from "@react-three/fiber";
import styles from "@/styles/Projects.module.css";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader/Loader";
import Navigation from "../components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export default function Projects() {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [1.2, 1.2, 1.2];
    screenPosition = [0, 0, -1];

    return [screenScale, screenPosition];
  };

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

        <Canvas className={styles.canvas}>
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
            <hemisphereLight groundColor="#000000" intensity={1} />

            <Sky isRotating={true} />
            <Bird />
          </Suspense>
        </Canvas>

        <div className={styles.main_container}>
          <div className={styles.headingContainer}>
          <div className={styles.heading}>Hello! 🏴‍☠️<br/></div>
          <div className={styles.subHeading}>Checkout Few of my Side Hustle Projects!💰<br/></div>
          </div>
          

          <div className={styles.cardsContainer}>
            
            <div className={styles.cardWrapper} onClick={() => {
              window.open( "https://dribbble.com/shots/18927410-Sport-OTT-Dashboard?utm_source=Clipboard_Shot&utm_campaign=Shetgaonkar&utm_content=Sport%20OTT%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Shetgaonkar&utm_content=Sport%20OTT%20Dashboard&utm_medium=Social_Share");
            }}>
              <img src="/DashboardDesign.png" alt="dashboard" />
              <div className={styles.cardWrapperHeading}>Cloud Studio Dashboard</div>
              <div className={styles.cardWrapperDescription}>
                A dashboard prototype was developed to oversee the end-to-end
                functionality of a sport-tech SaaS product.
              </div>
            </div>

            <div className={styles.cardWrapper} onClick={() => {
              window.open( "https://www.producthunt.com/products/spotfind");
            }}>
              <img src="/Spot-find.png" alt="dashboard" />
              <div className={styles.cardWrapperHeading}>Spot-Find</div>
              <div className={styles.cardWrapperDescription}>
              SpotFind is a music discovery tool to help you in times where you just can't seem to find something new to listen to.
              </div>
            </div>

            <div className={styles.cardWrapper} onClick={() => {
              window.open( "https://github.com/vishwajeetshetgaonkar97/CSS-F1r");
            }}>
              <img src="/f1.jpg" alt="dashboard" />
              <div className={styles.cardWrapperHeading}>CSS F1 Car</div>
              <div className={styles.cardWrapperDescription}>
              A pure CSS representation of a Formula 1 car to explore different forms and properties, which helps in reducing unnecessary use of plugins and packages for better optimization.
              </div>
            </div>

            <div className={styles.cardWrapper} onClick={() => {
              window.open( "https://github.com/vishwajeetshetgaonkar97/CSS-Santa");
            }}>
              <img src="/santa.jpg" alt="dashboard" />
              <div className={styles.cardWrapperHeading}>CSS Santa Claus</div>
              <div className={styles.cardWrapperDescription}>
              A pure CSS representation of a snowy landscape with Santa Claus to explore and learn different properties of css, which helps in reducing unnecessary use of plugins and packages for better optimization.
              </div>
            </div>

            <div className={styles.cardWrapper} onClick={() => {
              window.open( "https://dribbble.com/shots/23478262-Restaurant-Logo");
            }}>
              <img src="/restaurantLogo.png" alt="dashboard" />
              <div className={styles.cardWrapperHeading}>Flavor Heaven Logo</div>
              <div className={styles.cardWrapperDescription}>
              Create a logo for a retro-style restaurant imbued with a vintage feel, vibrant and nostalgic vibe, aiming to evoke feelings of nostalgia, freedom, and the recollection of good old times.
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
