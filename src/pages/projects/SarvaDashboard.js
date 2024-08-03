import React from "react";
import styles from "./styles.module.css";
import CanvasComponent from "@/components/CanvasComponent/CanvasComponent";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Image from "next/image";
import ContactComponent from "../../components/ContactComponent/ContactComponent";

const SarvaDashboard = (props) => {
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
              <div className={styles.heading}>SarvaDashboard</div>
              <div className={styles.subHeading}>
                This is a client-facing dashboard that I <span>Developed</span>{" "}
                for displaying air quality conditions for buildings and
                surrounding areas on a map, along with additional relevant
                information.
              </div>
              <Image
                width={220}
                height={100}
                src="/sarvaTools.png"
                alt="sarva tools"
                className={styles.toolsImage}
              />
            </div>
            <Image
              className={styles.topImage}
              width={600}
              height={600}
              src="/sarvaIntroImage.png"
              alt="sarva tools"
            />
          </div>
          <div className={styles.mockupContainer}>
            <Image
              className={styles.mockupImage}
              width={1280}
              height={720}
              src="/sarvaMockup.png"
              alt="sarva tools"
            />
          </div>

          <div className={styles.bottomInfoContainer}>
            <Image
              className={styles.bottomImage}
              height={400}
              width={600}
              src="/sarvaMockup2.png"
              alt="sarva tools"
            />

            <div className={styles.bottomInfoDescription}>
              This freelance project involved developing a client-facing
              dashboard for a startup focused on air quality monitoring. After
              an initial meeting to establish requirements, development began
              immediately, with continuous collaboration with the design and
              operations teams to ensure alignment with project goals. The
              dashboard was designed to display all installed devices in client
              buildings and surrounding areas, providing graphical and textual
              air quality data. Core development took one week, followed by
              adjustments based on feedback. After finalizing development, the
              dashboard underwent thorough testing before deployment. The
              strategy emphasized understanding requirements, agile development,
              team collaboration, and rigorous testing to deliver a
              user-friendly, visually appealing dashboard that met the client's
              air quality monitoring needs.
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

export default SarvaDashboard;
