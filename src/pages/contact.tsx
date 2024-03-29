import Head from "next/head";
import { Canvas, useThree } from "@react-three/fiber";
import styles from "@/styles/Contact.module.css";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader/Loader";
import Navigation from "../components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export default function Contact() {
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
          <div className={styles.heading}>Hello! 🏴‍☠️</div>
          <div>Let’s Bring Your Vision to Life!</div>
          <div>
            Excited to collaborate and bring your ideas to life. Let's chat and
            turn your vision into reality!
          </div>

          <div
            className={styles.email}
            onClick={() => {
              location.href = "mailto:xyz@abc.com";
            }}
          >
            Vshetgaonkar123@Gmail.com
          </div>

          <div className={styles.Icons}>
            <a
              href="https://github.com/vishwajeetshetgaonkar97"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.imgIcons}
                alt=""
                src="/socialMediaIcons/github.png"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vishwajeet-shetgaonkar-42529618b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.imgIcons}
                alt=""
                src="/socialMediaIcons/linkedin.png"
              />
            </a>
            <a
              href="https://twitter.com/vshetgaonkar97"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.imgIcons}
                alt=""
                src="/socialMediaIcons/twitter.png"
              />
            </a>

            <a
              href="https://dribbble.com/Shetgaonkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.imgIcons}
                alt=""
                src="/socialMediaIcons/dribble.png"
              />
            </a>
          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}
