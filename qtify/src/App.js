import React, {useState, useEffect} from 'react';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
import {Outlet} from "react-router-dom";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';

function App() {

  // const [data, setData] = useState({});
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  const generateTopAlbums = (source) => {
    source().then((data) => {
      setTopAlbums(data)
    })
  }
  const generateNewAlbums = (source) => {
    source().then((data) => {
      setNewAlbums(data)
    })
  }
  const generateSongs = (source) => {
    source().then((data) => {
      setSongs(data)
    })
  }

  useEffect(() => {
    generateTopAlbums(fetchTopAlbums);
    generateNewAlbums(fetchNewAlbums);
    generateSongs(fetchSongs);
  }, []);

  // console.log(topAlbums);
  console.log("length:", topAlbums.length)
  // console.log(newAlbums);
  console.log("length:", newAlbums.length)


  // const generateData = (key, source) => {
  //   source().then((data) => {
  //     // console.log(data)
  //     setData((prevState) => {
  //       return {...prevState, [key]: data}; // { topAlbums: Array(13), newAlbums: Array(12) }
  //     });
  //   })
  // }

  // useEffect(() => {
  //   generateData("topAlbums", fetchTopAlbums);
  //   generateData("newAlbums", fetchNewAlbums);
  //   generateData("songs", fetchSongs);
  //   // console.log(data);
  //   }, []);

  // const {topAlbums= [], newAlbums =[], songs = []} = data;
  // console.log(topAlbums);

  return (
    <StyledEngineProvider injectFirst>
      <Navbar searchData={[...topAlbums, ...newAlbums]}/>
      <Outlet context={{ data: { "topAlbums": topAlbums, "newAlbums": newAlbums, "songs": songs }}} />
      {/* <Outlet context={[topAlbums, newAlbums]} /> */}
    </StyledEngineProvider>
  );
}
/*
An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

For Example,
 This Outlet element will render either topAlbums when the URL is "/top", newAlbums at "/new", or null if it is "/"
*/
export default App;
