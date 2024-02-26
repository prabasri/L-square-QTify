import React, {useState} from "react";
import styles from "./MyCarousel.module.css"
import Card from "../Card/Card";
import { ReactComponent as LeftArrow } from "../../Assets/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../Assets/RightArrow.svg";

export default function Carousel({data}) {

  console.log(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousEnded, setPreviousEnded] = useState(false);
  const [nextEnded, setNextEnded] = useState(false);

  const handleNext =() => {
    
    let newIndex = currentIndex + 1;
    // setCurrentIndex(newIndex >= data.length ? setNextEnded(true) : newIndex);

    if(newIndex >= data.length - 6) {

      setCurrentIndex((prevIndex) => prevIndex);
      setNextEnded(true);

    } else {
      
      setCurrentIndex(newIndex);
      setNextEnded(false);
      setPreviousEnded(false);
    }
  }

  const handlePrevious =() => {

    let newIndex = currentIndex - 1;
    // setCurrentIndex(newIndex < 0 ? setPreviousEnded(true) : newIndex);

    if(newIndex < 0) {

      setCurrentIndex((prevIndex) => prevIndex);
      setPreviousEnded(true);

    } else {

      setCurrentIndex(newIndex);
      setPreviousEnded(false);
      setNextEnded(false);
    }
  }

//  console.log(data[currentIndex]);
 console.log(data.length);

  return (
    <div className="carousel">
        <div className={styles.slideDirection}>
          { !previousEnded ? (
          <>
            <LeftArrow className={styles.left} onClick={handlePrevious}/>
            <div className={styles.carouselSection}>

              <Card data={data[currentIndex]} type="album"/>
              <Card data={data[currentIndex + 1]} type="album"/>
              <Card data={data[currentIndex + 2]} type="album"/>
              <Card data={data[currentIndex + 3]} type="album"/>
              <Card data={data[currentIndex + 4]} type="album"/>
              <Card data={data[currentIndex + 5]} type="album"/>
              <Card data={data[currentIndex + 6]} type="album"/>

            </div>
          </>
          ) : (
          <div className={styles.carouselSection}>

            <Card data={data[currentIndex]} type="album"/>
            <Card data={data[currentIndex + 1]} type="album"/>
            <Card data={data[currentIndex + 2]} type="album"/>
            <Card data={data[currentIndex + 3]} type="album"/>
            <Card data={data[currentIndex + 4]} type="album"/>
            <Card data={data[currentIndex + 5]} type="album"/>
            <Card data={data[currentIndex + 6]} type="album"/>
          </div>
          )}
          { !nextEnded ? ( <RightArrow className={styles.right} onClick={handleNext}/> ) : null }
        </div>
      </div>
  )
}