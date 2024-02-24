import React, { useEffect, useState } from "react";
import styles from "./Section.module.css"
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

export default function Section({title, data, filterSource, type}) {
  const [filters, setFilters] = useState([{key: "all", label: "All"}]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle ]= useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  }
  
  useEffect(() => {
    if(filterSource) {
      filterSource().then((response) => {
        const {data} = response; // response.data
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) => 
    showFilters && selectedFilterIndex !== 0
    ? card.genre.key === filters[selectedFilterIndex].key
    : card
  )
  console.log(cardsToRender);

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 onClick={handleToggle}>{!carouselToggle ? "Collapse All" : "Show All"}</h4>
      </div>
      {/* {showFilters && (
        <div>
          <Filters
          filters={filters}
          selectedFilterIndex = {selectedFilterIndex}
          setSelectedFilterIndex = {setSelectedFilterIndex}
          />
        </div>
      )} */}
      {data.length === 0 ? (
      <CircularProgress/>) : (
        <div>
          {!carouselToggle ? (
            <div>
              {cardsToRender.map((card) => (
                <Card data={card} type={type}/>
              ))}
            </div> 
          ) : <Carousel data={cardsToRender} renderComponent={(data) => <Card data={data} type={type}/>}/>
          }
        </div>
      )}
    </div>
  )
}