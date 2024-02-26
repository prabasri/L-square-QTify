import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as RightArrow} from "../../Assets/RightArrow.svg";
import styles from "./Carousel.module.css";

export default function LeftButton() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  console.log(isEnd);

  return (
    <div className={styles.rightArrow}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}
