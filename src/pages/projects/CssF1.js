import React from "react";
import styles from "./styles.module.css";
import CanvasComponent from "@/components/CanvasComponent/CanvasComponent";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Image from "next/image";
import ContactComponent from "../../components/ContactComponent/ContactComponent";

const CssF1 = (props) => {
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
              <div className={styles.heading}>CSS F1 Car</div>
              <div className={styles.subHeading}>
              A pure CSS representation of a Formula 1 car which i  <span>Developed</span> to explore different forms and properties. 
              </div>
              <Image
                width={220}
                height={100}
                src="/topCssF1.png"
                alt="f1 Vish"
                className={`${styles.toolsImage} ${styles.f1ToolsImage}`}
              />
                  <div className={styles.buttonContainer}>
          <button className={styles["cssbuttons-io-button"]} onClick={() => {
              window.open("https://codepen.io/vshetgaonkar/pen/WNbjOzB");
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
              src="/cssF1.png"
              alt="vish f1"
            />
          </div>
          <div className={styles.mockupContainer}>
            <Image
              className={styles.mockupImage}
              width={1280}
              height={720}
              src="/cssF1Mockup.png"
              alt="f1 vish"
            />
          </div>

          <div className={styles.bottomInfoContainer}>
            <Image
              className={styles.bottomImage}
              height={400}
              width={500}
              src="/cssF1Bottom.png"
              alt="bottomCocaCola "
            />

            <div className={styles.bottomInfoDescription}>
        
            A pure CSS representation of a Formula 1 car to explore different CSS forms and properties, which helps in reducing unnecessary use of plugins and packages for better optimization.</div>
          </div>
          <div className={styles.contactContainer}>
            <ContactComponent />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default CssF1;
