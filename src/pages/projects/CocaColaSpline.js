import React from "react";
import styles from "./styles.module.css";
import CanvasComponent from "@/components/CanvasComponent/CanvasComponent";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Image from "next/image";

const SpotFind = (props) => {
  return (
    <>
      <Head>
        <title>Vishwajeet Shetgaonkar</title>
        <meta name="description" content="Vishwajeet Shetgaonker Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Navigation isProject />
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
            <div className={styles.headingInfoContainer}>
              <div className={styles.heading}>3D Coca-Cola Website Concept</div>
              <div className={styles.subHeading}>
                A 3D Coca-cola Website Concept <span>Designed</span> and <span>Developed</span> to create a modern and engaging digital experience that leverages trending 3D immersive technologies. 
              </div>
              <Image
                width={220}
                height={100}
                src="/topCocaCola.png"
                alt="coca cola Vish"
                className={`${styles.toolsImage} ${styles.ccToolsImage}`}
              />
                  <div className={styles.buttonContainer}>
          <button className={styles["cssbuttons-io-button"]} onClick={() => {
              window.open("https://vish-3d-coca-cola.vercel.app/");
            }}>
            view Project
            <div className={styles.icon}>
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
            </div>
            <Image
              className={styles.topImage}
              width={600}
              height={600}
              src="/3dCocaCola.png"
              alt="vish coca cola"
            />
          </div>
          <div className={styles.mockupContainer}>
            <Image
              className={styles.mockupImage}
              width={1280}
              height={720}
              src="/midCocaCola.png"
              alt="coca cola vish"
            />
          </div>

          <div className={styles.bottomInfoContainer}>
            <Image
              className={styles.bottomImage}
              height={400}
              width={500}
              src="/bottomCocaCola.png"
              alt="bottomCocaCola "
            />

            <div className={styles.bottomInfoDescription}>
        
            My goal was to create an immersive 3D experience website using Spline. This project required me to delve deep into various concepts and events within Spline, such as transitions, scrolls, drag-and-drop mechanisms, and gravity simulations. I went through multiple iterations, constantly refining and improving the design. The process involved a lot of trial and error.

Since this was a side project that I worked on occasionally, it took time to sort things out and conceptualize the various elements. I often explored different approaches that I felt could be improved and tested them out. This iterative process not only helped me refine the project but also significantly enhanced my understanding of design principles and the Spline tool, which is similar to Adobe Substance.    </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default SpotFind;
