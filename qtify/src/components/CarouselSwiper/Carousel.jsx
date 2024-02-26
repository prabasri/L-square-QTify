import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import "swiper/css";
import CarouselLeftNavigation from "../CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "../CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, 1000); // Run transition to the slide with index number, duration equal to 'speed' parameter. index - number - Index number of slide. speed - number - Transition duration (in ms).
  }, [data]);

  return <></>;
}

export default function Carousel ({data, renderComponent}) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{padding: "0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={40}
        allowTouchMove   // for dragging functionality
      >
        <Controls data={data}/> {/* Go to the initial slide automatically */}
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>
        {data.map((ele) => (
          <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}