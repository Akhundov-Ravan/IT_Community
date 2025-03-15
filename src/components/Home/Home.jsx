import React from "react";
import styles from "./Home.module.css";
import video from "../../assets/hologram.mp4";

const Home = () => {
  return (
    
    <div className={styles.vdContainer}>
      <video src={video} autoPlay loop muted></video>

      <div className={styles.container}>
        <h1 className={styles.wlc}>
          AZƏRBAYCANIN <span></span>{" "}
        </h1>
        <h1 className={styles.title}>
          İNFORMASİYA TEXNOLOGİYALARI <span></span>{" "}
        </h1>
        <h1 className={styles.title}>
          MÜTƏXƏSSİSLƏRİ <span></span>{" "}
        </h1>
      </div>     
    </div>
  );
};

export default Home;
