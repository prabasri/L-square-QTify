import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../Assets/hero_headphones.png";

export default function Hero() {
  return (
      <div className={styles.hero}>
        <div>
            <h1 style={{margin:"10px"}}>100 Thousand Songs, ad-free</h1>
            <h1 style={{margin:"10px"}}>Over thousands podcast episodes</h1>
        </div>
        <img src={HeroImage} alt="hero" width={212}/>
      </div>
  )
}