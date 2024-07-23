import React from "react";

import styles from "./styles.module.css";
const ContactComponent = (props) => {
  return (
    <>
      <div className={styles.main_container}>
        <div>Let’s Bring Your Vision to Life!</div>
        <div>
          Excited to collaborate and bring your ideas to life. Let's chat and
          turn your vision into reality!
        </div>

        <div
          className={styles.email}
          onClick={() => {
            location.href = "mailto:hello@vish.world";
          }}
        >
          hello@vish.world
        </div>

        <div className={styles.Icons}>
          <a
            href="https://github.com/vishwajeetshetgaonkar97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.imgIcons} alt="" src="/github.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishwajeet-shetgaonkar-42529618b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.imgIcons} alt="" src="/linkedin.png" />
          </a>
          <a
            href="https://twitter.com/vshetgaonkar97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.imgIcons} alt="" src="/twitter.png" />
          </a>

          <a
            href="https://dribbble.com/Shetgaonkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.imgIcons} alt="" src="/dribble.png" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
