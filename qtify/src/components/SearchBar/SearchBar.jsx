import React from "react";
import styles from "./SearchBar.module.css";
import {ReactComponent as SearchIcon } from "../../Assets/search-icon.svg"

export default function SearchBar() {
  return(
    <div className={styles.Container}>
      <input placeholder="Search a album of your choice" className={styles.SearchBar}/>
      <button className={styles.SearchBtn}><SearchIcon/></button>
    </div>
  );
}
