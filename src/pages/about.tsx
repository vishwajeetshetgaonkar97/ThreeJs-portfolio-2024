import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import styles from "@/styles/About.module.css";
import CanvasComponent from "@/components/CanvasComponent/CanvasComponent";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check screen size on mount
    window.addEventListener('resize', handleResize); // Update on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up
    };
  }, []);

  const showCompass = !isMobile; // Set showCompass based on screen size

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

        <div className={styles.canvas}>
          <CanvasComponent
            isRotating
            isOnlyBg
            setIsRotating={undefined}
            setCurrentStage={undefined}
            islandPosition={undefined}
            islandScale={undefined}
            showCompass={showCompass} 
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
                <img src="/spline.png" alt="grid Image 9" />
                <img src="/react native.png" alt="grid Image 6" />
                <img src="/mongo.png" alt="grid Image 6" />
              </div>
              <div className={styles.photoGridColumn}>
                <img src="/next.png" alt="grid Image 10" />
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

          <div className={`${styles.heading} ${styles.experienceHeading}`}>
            Career Adventure! ☠️
          </div>

          <div className={styles.experience}>
            <div className={styles.experienceCard}>
              <div className={styles.experienceCardHeading}>
                Freelancer (2023-present)
              </div>
              <div className={styles.experienceCardContent}>
                <ul>
                  <li>
                    Completed 8+ projects in UI/UX Design & Front End
                    Development.
                  </li>
                  <li>
                    Delivered innovative projects in the Sport, Environment,
                    Gaming, Entertainment, and Community App industries.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to integrate user
                    feedback and optimize usability.
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceCardHeading}>
                Sportvot (2020-2022)
              </div>
              <div className={styles.experienceCardContent}>
                <ul>
                  <li>
                    Led design and development of SaaS web applications for a
                    sport-tech startup.
                  </li>
                  <li>
                    Complete product redesign from scratch using Agile
                    methodology.
                  </li>
                  <li>
                    Integrated over 80+ APIs with a code base of over 1M+ lines.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${styles.heading} ${styles.experienceHeading}`}>
            Certificates & Achievements!🗡️
          </div>

          <div className={`${styles.experience} ${styles.achievements}`}>
            <div className={`${styles.experienceCard} ${styles.caCard}`} onClick={() => {
                window.open(
                  "https://www.linkedin.com/posts/vishwajeet-shetgaonkar_teamsportvot-activity-6885616379064549376-JOlE?utm_source=share&utm_medium=member_desktop"
                );
              }}>
              <Image width={500} height={500} className={styles.caImage} src="/sportvotPost.jpeg" alt="sportvot Vishwajeet Shetgaonkar"/>
              <div className={styles.experienceCardHeading}>
                LinkedIn Shoutout (Sportvot)
              </div>
            </div>

            <div className={`${styles.experienceCard} ${styles.caCard}`} onClick={() => {
                window.open(
                  "https://www.udemy.com/certificate/UC-fb8fe878-dd9b-43c5-ac33-e31f380703be/"
                );
              }}>
              <Image width={500} height={500} className={styles.caImage} src="/uiuxcertificate.jpg" alt="uiux Vishwajeet Shetgaonkar"/>
              <div className={styles.experienceCardHeading}>
                User Experience Design Essentials - Adobe XD UI UX Design (Udemy)
              </div>
            </div>

            <div className={`${styles.experienceCard} ${styles.caCard}`} onClick={() => {
                window.open(
                  "https://www.udemy.com/certificate/UC-87b57174-d098-4b84-886a-c6378fd9c2b2/"
                );
              }}>
              <Image width={500} height={500} className={styles.caImage} src="/reactjscertificate.jpg" alt="reactjs Vishwajeet Shetgaonkar"/>
              <div className={styles.experienceCardHeading}>
                React - The Complete Guide (incl Hooks, React Router, Redux) (Udemy)
              </div>
            </div>

            <div className={`${styles.experienceCard} ${styles.caCard}`} onClick={() => {
                window.open(
                  "https://www.linkedin.com/learning/certificates/3d9a804d6d4f84fc83ed5d0c643a94a5ee3acabc347814c8c9c3689e6c1427ff?u=2218586"
                );
              }}>
              <Image width={500} height={500} className={styles.caImage} src="/nextjsCertificate.jpeg" alt="nextjs Vishwajeet Shetgaonkar"/>
              <div className={styles.experienceCardHeading}>
                Learning NextJs (LinkedIn Learning)
              </div>
            </div>

            <div className={`${styles.experienceCard} ${styles.caCard}`} onClick={() => {
                window.open(
                  "https://www.coursera.org/account/accomplishments/verify/6FYL7L5UH9LK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
                );
              }}>
              <Image width={500} height={500} className={styles.caImage} src="/courseraCertificate.jpeg" alt="coursera Vishwajeet Shetgaonkar"/>
              <div className={styles.experienceCardHeading}>
                Front-End Web UI Frameworks and Tools (Coursera)
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
