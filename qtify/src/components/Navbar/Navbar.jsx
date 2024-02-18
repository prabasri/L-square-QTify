import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
// import { Button, TextField } from "@mui/material";
// import { SearchIcon } from "@mui/icons-material";
import SearchBar from "../SearchBar/SearchBar";
import FeedbackBtn from "../FeedbackBtn/FeedbackBtn";


function Navbar() {
  return (
  <nav className={styles.Navbar}>
    <Logo/>
    <SearchBar/>
    <FeedbackBtn/>
  </nav>
  );
}

export default Navbar;