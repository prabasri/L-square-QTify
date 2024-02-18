import React from "react";
import LogoImage from '../../Assets/logo.png';
import styles from "./Logo.module.css"

export default function Logo() {
  return (
    <div className={styles.Logo} >
      <img src={LogoImage} alt="qtify-logo" width={67} />
    </div>
  );
}