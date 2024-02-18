import React from "react";
import LogoImage from '../../Assets/logo.png';

export default function Logo() {
  return <img className={StyleSheet.Logo} src={LogoImage} alt="qtify-logo" width={67} height={34} />
}