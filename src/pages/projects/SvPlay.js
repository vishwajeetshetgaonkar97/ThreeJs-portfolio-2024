import React from "react";
import styles from "./styles.module.css";
import CanvasComponent from "@/components/CanvasComponent/CanvasComponent";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Image from "next/image";
import ContactComponent from "../../components/ContactComponent/ContactComponent";

const SvPlay = (props) => {
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
              <div className={styles.heading}>SV-Play</div>
              <div className={styles.subHeading}>
                A turf booking app tailored which i <span>Designed </span>
                for users in their locality with the capability to share it on
                multiple platforms
              </div>
              <Image
                width={220}
                height={100}
                src="/svPlayTools.png"
                alt="svPlay tools"
                className={`${styles.toolsImage} ${styles.svToolsImage}`}
              />
            </div>
            <Image
              className={styles.topImage}
              width={600}
              height={600}
              src="/svPlayIntroImage.png"
              alt="svPlay tools"
            />
          </div>
          <div className={styles.mockupContainer}>
            <Image
              className={styles.mockupImage}
              width={1280}
              height={720}
              src="/svPlayMockup.png"
              alt="svPlay tools"
            />
          </div>

          <div className={styles.bottomInfoContainer}>
            <Image
              className={styles.bottomImage}
              height={400}
              width={500}
              src="/svPlayMockup2.png"
              alt="svPlay tools"
            />

            <div className={styles.bottomInfoDescription}>
              The goal of this project was to develop a user-friendly
              application for booking local sports fields and sharing
              experiences on social media platforms. To begin, I conducted a
              thorough analysis of similar applications, evaluating their
              functionalities and interfaces. This analysis informed the
              selection of color schemes and layouts for our app's design. Using
              this information, I created a detailed high-fidelity prototype to
              visualize the user experience. After extensive testing and
              feedback collection, I refined the prototype to improve usability
              and address user preferences. Additionally, I integrated features
              to future-proof the app, anticipating updates to maintain
              relevance. As the design phase concluded, the finalized designs
              were passed to the development team for implementation.
              Throughout, our strategy emphasized iterative improvements and
              thorough testing to exceed user expectations. This approach aimed
              to create an application that not only streamlines booking but
              also sets industry standards for user experience
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

export default SvPlay;
