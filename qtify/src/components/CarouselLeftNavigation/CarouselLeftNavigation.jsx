import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as LeftArrow} from "../../Assets/LeftArrow.svg";
import styles from "./LeftNavigation.module.css";

export default function LeftButton() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, []);

  console.log(isBeginning);

  return (
    <div className={styles.leftArrow}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}
