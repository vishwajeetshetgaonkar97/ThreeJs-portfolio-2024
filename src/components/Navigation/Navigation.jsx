import Image from 'next/image'
import styles from './Navigation.module.css'
import Link from "next/link";

import {  useState } from "react";

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    
<div className={`${styles.navBar} ${isOpen? styles.navBarActive:""}`}>


<Image
className={styles.logo}
        src="/logo.png"
        width={100}
        height={100}
        alt="logo image"
        
      onClick={() => {
        location.href = "/";
      }}
      />

      <div className={styles.linksBurgerContainer} onClick={()=>setIsOpen(!isOpen)}>
      <Image
className={`${isOpen? styles.closeIcon: styles.burgerIcon}`}
        src={isOpen? "/close.png": "/menu.png"}
        width={100}
        height={100}
        alt="logo image"
      />

      </div>

      <div className={`${styles.linksContainer}  ${isOpen? styles.linksContainerActive : ""}`}>
        <div> <Link className={styles.link} href="/" onClick={()=>setIsOpen(false)}>Home</Link></div>
        <div><Link className={styles.link} href="/projects" onClick={()=>setIsOpen(false)}>Projects</Link></div>
        <div><Link className={styles.link} href="/about" onClick={()=>setIsOpen(false)}>About</Link></div>
        <div><Link className={styles.link} href="/contact" onClick={()=>setIsOpen(false)}>Contact</Link></div>
      </div>
      </div>


  );
};

export default Navigation;
