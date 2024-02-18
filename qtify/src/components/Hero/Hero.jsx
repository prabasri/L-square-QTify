import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../Assets/hero_headphones.png";

export default function Hero() {
  return (
    <div style={{backgroundColor: "#121212"}}>
      <div className={styles.heroContent}>
        <div className={styles.textDiv}>
            <p className={styles.text}>100 Thousand Songs, ad-free</p>
            <p className={styles.text}>Over thousands podcast episodes</p>
        </div>
        <img src={HeroImage} alt="hero" className={styles.heroImage}/>
      </div>
    </div>
  )
}