import { Html } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./WipMobileModal.module.css";

const WipMobileModal = ({setModal}) => {
  return (
    <div className={styles.wipMobileModalContainer}>
      <Image
        className={styles.image}
        src="/pirate.png"
        width={1000}
        height={400}
        alt="logo image"
      />
      <div  className={styles.infoContainer}>
      <div className={styles.infoContainerHeading}>Oops! </div>
      <span className={styles.info}>mobile view is currently under development.</span>

      <button className={styles["cssbuttons-io-button"]} onClick={() => {
              setModal(false)
            }}>
            Dive In!
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
  );
};

export default WipMobileModal;
