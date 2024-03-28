import Image from 'next/image'
import styles from './Navigation.module.css'
import Link from "next/link";

const Navigation = () => {


  return (
    
<div className={styles.navBar}>


<Image
className={styles.logo}
        src="/logo.png"
        width={100}
        height={100}
        alt="logo image"
      />

      <div className={styles.linksContainer}>
        <div> <Link href="/">Home</Link></div>
        <div><Link href="/projects">Projects</Link></div>
        <div><Link href="/about">About</Link></div>
        <div><Link href="/contact">Contact</Link></div>

      </div>
      </div>


  );
};

export default Navigation;
