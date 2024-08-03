import React from "react";
import styles from "./styles.module.css";
import CanvasComponent from "@/components/CanvasComponent/CanvasComponent";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Image from "next/image";
import ContactComponent from "../../components/ContactComponent/ContactComponent";

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
              <div className={styles.heading}>Spot-Find</div>
              <div className={styles.subHeading}>
                A music discovery tool that I <span>Designed</span> and helped{" "}
                <span>Develop</span> to assist you in times where you just can't
                seem to find something new to listen to
              </div>
              <Image
                width={220}
                height={100}
                src="/spotFindTools.png"
                alt="spotfindarva tools"
                className={`${styles.toolsImage} ${styles.sfToolsImage}`}
              />
                  <div className={styles.buttonContainer}>
          <button className={styles["cssbuttons-io-button"]} onClick={() => {
              window.open("https://www.producthunt.com/products/spotfind");
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
              src="/spotFindIntroImage.png"
              alt="spotFind tools"
            />
          </div>
          <div className={styles.mockupContainer}>
            <Image
              className={styles.mockupImage}
              width={1280}
              height={720}
              src="/spotFindMockup.png"
              alt="spotFind tools"
            />
          </div>

          <div className={styles.bottomInfoContainer}>
            <Image
              className={styles.bottomImage}
              height={400}
              width={500}
              src="/spotFindMockup2.png"
              alt="spotFind tools"
            />

            <div className={styles.bottomInfoDescription}>
              My friends and I started a fun side project to solve the challenge
              of finding music using the Spotify API for random song data. With
              minimal technical expertise, we first validated the concept among
              friends. I led the UI/UX research, inspired by Tinder's swipe
              left/right features. The front-end development was shared between
              me and another team member, while the backend was managed by
              someone else. Our approach included regular brainstorming, quick
              iterations, and frequent testing. After development, we gathered
              feedback and launched on Product Hunt, receiving a positive
              reception.
            </div>
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

export default SpotFind;
