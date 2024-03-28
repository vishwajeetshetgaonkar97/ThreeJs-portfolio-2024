import { Html } from "@react-three/drei";
import { Canvas, useThree  } from "@react-three/fiber";
import { useRef } from "react";
import Image from 'next/image'
import styles from './Loader.module.css';


const Loader = () => {
  const { size } = useThree();
  const screenRef = useRef();

  return (
    <Html className={styles.loaderContainer} center position={[0, 0, 0]} style={{ width: size.width, height: size.height }} prepend zIndexRange={[100, 0]} ref={screenRef}>

<div className={styles["traffic-loader"]}></div>
    </Html>
  );
};

export default Loader;
