import Head from "next/head";
import { Canvas, useThree } from "@react-three/fiber";
import styles from "@/styles/About.module.css";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader/Loader";
import Navigation from "../components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export default function About() {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [1.2, 1.2, 1.2];
    screenPosition = [0, 0, -1];

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
          <div className={styles.heading}>
            Hello! 🏴‍☠️
            <br /> I’m <span>Vishwajeet Shetgaonker</span>,
          </div>
          <div className={styles.description}>
            Results-driven Designer/Developer with a strong background in React
            JS, Next.js, CSS, Figma, and Adobe XD. Experienced in designing and
            developing high-performance web applications with a focus on
            scalability and user-centric design. Skilled in project management,
            debugging, and problem-solving with a track record of delivering
            projects within tight deadlines. <br />
            🦜🗡️☠️🧭💰
          </div>
          <div>
            <div className={styles.photoGrid}>
              <div className={styles.photoGridColumn}>
                <img src="./images/skills/ReactJS.jpg" alt="grid Image 5" />

                <img src="./images/skills/js.jpeg" alt="grid Image 3" />
                <img
                  src="./images/skills/react native.png"
                  alt="grid Image 6"
                />
                <img src="./images/skills/mongo.png" alt="grid Image 6" />
              </div>

              <div className={styles.photoGridColumn}>
                <img src="./images/skills/next.png" alt="grid Image 10" />

                {/* <img src="./images/skills/html.png" alt="grid Image 1"/> */}

                <img src="./images/skills/bootstrap.png" alt="grid Image 7" />

                <img src="./images/skills/mui.png" alt="grid Image 8" />

                <img src="./images/skills/photoshop.jpg" alt="grid Image 12" />
              </div>

              <div className={styles.photoGridColumn}>
                <img src="./images/skills/figma.jpg" alt="grid Image 10" />
                <img src="./images/skills/xd.png" alt="grid Image 9" />

                <img src="./images/skills/ills.png" alt="grid Image 11" />
                <img src="./images/skills/express.jpg" alt="grid Image 8" />
              </div>

              <div className={styles.photoGridColumn}>
                <img src="./images/skills/css.jpg" alt="grid Image 2" />
                <img src="./images/skills/node.png" alt="grid Image 12" />

                <img src="./images/skills/html.png" alt="grid Image 8" />
              </div>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </main>
    </>
  );
}
