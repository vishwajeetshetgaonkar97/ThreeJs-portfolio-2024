import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      Copyright © 2024 Vishwajeet Shetgaonkar | All rights reserved
    </div>
  );
};

export default Footer;
