import React, {useState} from "react";

export default function Carousel({data}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext =() => {
    let newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= data.length ? 0 : newIndex);
  }
  const handlePrevious =() => {
    let newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? data.length -1 : newIndex);
  }
  return (
    <div className="carousel">
        <p key={currentIndex}>{data[currentIndex]}</p>
        <div className="slide_direction">
          <button className="left" onClick={handlePrevious}>Prev</button>
          <button className="right" onClick={handleNext}>Next
            
          </button>
        </div>
      </div>
  )
}