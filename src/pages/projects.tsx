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
import ContactComponent from "../components/ContactComponent/ContactComponent";
import projectList from "../utilityFunctions/utilityFunctions";
import ProjectListComponent from "../components/ProjectListComponent/ProjectListComponent";

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
            {projectList.map((projectObj) => {
              console.log("link", projectObj.link);
              return (
                <ProjectListComponent
                  key={projectObj.id}
                  projectName={projectObj.name}
                  description={projectObj.description}
                  projectLink={projectObj.link}
                  imgUrl={projectObj.image}
                />
              );
            })}

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
          <div className={styles.contactContainer}>
            <ContactComponent />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
