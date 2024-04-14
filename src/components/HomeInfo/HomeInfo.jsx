import styles from "./HomeInfo.module.css";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className={styles.currentStageCard}>
        <div className={styles.currentStageTitle}>
          Hello! 🏴‍☠️<br /> <div className={styles.subHead}>Explore me Treasure Isle!</div>
       I’m <span>Vishwajeet Shetgaonker</span>, <br />a Toronto-based
          Designer and Developer.
        </div>
      </div>
    );

  if (currentStage === 4) {
    return (
      <div className={styles.currentStageCard}>
        <div className={styles.currentStageCardContent}>
          🦜 <br />
          Crafting User-Centric Skills Across Industries
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles["cssbuttons-io-button"]} onClick={() => {
              location.href = "/about";
            }}>
            learn more
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
  }

  if (currentStage === 3) {
    return (
      <div className={styles.currentStageCard}>
        <div className={styles.currentStageCardContent}>
          🧭 <br />
          Explore my portfolio to witness my implementation skills.
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles["cssbuttons-io-button"]} onClick={() => {
              location.href = "/projects";
            }}>
            explore now
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
  }

  if (currentStage === 2) {
    return (
      <div className={styles.currentStageCard}>
        <div className={styles.currentStageCardContent}>
          💰 <br />
          Need a project done or looking for a Designer/Dev? <br /> i'm just a
          message away.
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles["cssbuttons-io-button"]} onClick={() => {
              location.href = "/contact";
            }}>
            Lets Talk
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
  }

  return null;
};

export default HomeInfo;
