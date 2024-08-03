import React from "react"
import styles from "./styles.module.css";

const ProjectListComponent = ({projectName="",description="",projectLink="/",imgUrl=""}) => {
   
    return (
        <div
        className={styles.cardWrapper}
        onClick={() => {
          location.href = projectLink;
        }}
      >
        <img src={imgUrl} alt="coca cola" />
        <div className={styles.cardWrapperHeading}>{projectName}</div>
        <div className={styles.cardWrapperDescription}>
       {description}
        </div>
      </div>
    )
}

export default ProjectListComponent
