import { Html } from "@react-three/drei";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Loader.module.css";

const Loader = () => {


  return (
    <div className={styles.loaderContainer}>
      <span>Welcome to my world! </span>
      I'm Vishwajeet Shetgaonker, a Toronto-based Designer and Developer.
      <div className={styles.loader}>
        <div className={styles.inner_loader}></div>
      </div>
    </div>
  );
};

export default Loader;