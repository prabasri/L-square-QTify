import React, {useState, useEffect} from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import styles from "./Filters.module.css"

function TabPanel( props ) {

  const { children, value, index, ...other } = props;

  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={ `simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
    >
    {value === index && (
      <Box sx={{ p: 3, color: "#FFFFFF" }}>
        <Typography>{children}</Typography>
      </Box>
    )}
    </div>
  );
}

function Filters({ filters, selectedFilterIndex, setSelectedFilterIndex }) {

  console.log(filters);
  console.log(selectedFilterIndex);
  
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  }

  function allyProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Tabs
      value={selectedFilterIndex}
      onChange={handleChange}
      aria-label="basic tabs for filter"
      TabIndicatorProps={{
        style: {
          backgroundColor: "#34C94B",
        },
      }}>
        {filters.map((ele, idx) => <Tab className={styles.tab} label={ele.label} {...allyProps(idx)}/> )}
      </Tabs>
      {/* {filters.map((ele, idx) => <TabPanel value={selectedFilterIndex} index={idx}/>)} */}
    </div>
  )
}

export default Filters;