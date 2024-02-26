import React, { useEffect, useState } from "react";
import styles from "./Section.module.css"
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
// import Carousel from "../MyCarousel/MyCarousel";
import Carousel from "../CarouselSwiper/Carousel";
import Filters from "../Filters/Filters";

export default function Section({title, data, filterSource, type}) {
  console.log(data);

  const [filters, setFilters] = useState([{key: "all", label: "All"}]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle ]= useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  }
  
  useEffect(() => {
    if(filterSource) {
      filterSource().then((response) => {
        const {data} = response; // response.data which means response.data.data in the API.jsx
        // console.log(data);
        setFilters([...filters, ...data]);
      });
    }
  }, [filterSource]);

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) => 
    showFilters && selectedFilterIndex !== 0
    ? card.genre.key === filters[selectedFilterIndex].key
    : card
  );

  // console.log(cardsToRender);
  console.log(filters);

  return (
    <div className={styles.section}>
      {type === "album" ? (
      <>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggle} onClick={handleToggle}>{!carouselToggle ? "Collapse" : "Show All"}</h4>
      </div>
      {data.length === 0 ? (
      <CircularProgress/>) : (
        <div>
          {!carouselToggle ? (
            <div className={styles.grid}>
              {cardsToRender.map((card) => (
                <Card data={card} type={type}/>
              ))}
            </div> 
          ) : <Carousel data={cardsToRender} renderComponent={(data) => <Card data={data} type={type}/>}/>
          }
        </div>
      )}
      </> ) : (
         <>
          <hr color="#34C94B" className={styles.line}/>
          <h3>Songs</h3>
          {showFilters && (
            <div className={styles.filtersTab}>
              <Filters
              filters={filters}
              selectedFilterIndex = {selectedFilterIndex}
              setSelectedFilterIndex = {setSelectedFilterIndex}
              />
            </div>
          )}
          {data.length === 0 ? (
            <CircularProgress/>) : (
                <Carousel data={cardsToRender} renderComponent={(data) => <Card data={data} type={type}/>} />
          )}
          <hr color="#34C94B" className={styles.line}/>
         </>)
      }
    </div>
  )
}