import { Html } from "@react-three/drei";
import { Canvas, useThree  } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import Image from 'next/image'
import styles from './Loader.module.css';


const Loader = () => {

  return (
    <div className={styles.loaderContainer}>

<div className={styles["traffic-loader"]}></div>
    </div>
  );
};

export default Loader;
