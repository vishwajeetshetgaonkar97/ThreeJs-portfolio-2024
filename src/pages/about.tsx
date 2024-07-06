import Head from "next/head";
import { Canvas, useThree } from "@react-three/fiber";
import styles from "@/styles/About.module.css";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader/Loader";
import Navigation from "../components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import GlobalLoader from '../components/GlobalLoader/GlobalLoader'
import CanvasComponent from "@/components/CanvasComponent/CanvasComponent";


export default function About() {
  const [isLoading, setIsLoading] = useState(true);

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
                <img src="/ReactJS.jpg" alt="grid Image 5" />

                <img src="/js.jpeg" alt="grid Image 3" />
                <img src="/react native.png" alt="grid Image 6" />
                <img src="/mongo.png" alt="grid Image 6" />
              </div>

              <div className={styles.photoGridColumn}>
                <img src="/next.png" alt="grid Image 10" />

                {/* <img src="/html.png" alt="grid Image 1"/> */}

                <img src="/bootstrap.png" alt="grid Image 7" />

                <img src="/mui.png" alt="grid Image 8" />

                <img src="/photoshop.jpg" alt="grid Image 12" />
              </div>

              <div className={styles.photoGridColumn}>
                <img src="/figma.jpg" alt="grid Image 10" />
                <img src="/xd.png" alt="grid Image 9" />

                <img src="/ills.png" alt="grid Image 11" />
                <img src="/express.jpg" alt="grid Image 8" />
              </div>

              <div className={styles.photoGridColumn}>
                <img src="/css.jpg" alt="grid Image 2" />
                <img src="/node.png" alt="grid Image 12" />

                <img src="/html.png" alt="grid Image 8" />
              </div>
            </div>
          </div>

          <div className={styles.experience}>
          <div className={`${styles.heading} ${styles.experienceHeading}`}>
          Career Adventure! ☠️
          </div>
            <div className={styles.experienceCard}>
              <div className={styles.experienceCardHeading}>Freelancer (2023-presemt)</div>
              <div  className={styles.experienceCardContent}>
                <ul>
                  <li>
                    Completed 5+ projects in UI/UX Design & Front End
                    Development.
                  </li>
                  <li>Expertise in React JS, JavaScript, Figma, and CSS.</li>
                  <li>
                    Collaborated with cross-functional teams to integrate user
                    feedback and optimize usability.
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceCardHeading}>Sportvot (2020-2022)</div>
              <div  className={styles.experienceCardContent}>
                <ul>
                  <li>
                  Led design and development of Saas web applications for a sport-tech Startup.
                  </li>
                  <li>Complete product redesign from scratch  using Agile methodology.</li>
                  <li>
                  Integrated over 80+ APIs with code base of over 1M+ line. 
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
