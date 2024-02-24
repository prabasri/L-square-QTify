import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import {fetchFilters} from "../../api/api";
import { useOutletContext } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const {data} = useOutletContext();
  const {newAlbums, topAlbums, songs} = data;

  return (
    <>
      <Hero/>
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album"/>
        <Section title="New Albums" data={newAlbums} type="album"/>
        <Section title="songs" data={songs} filterSource={fetchFilters} type="song"/>
      </div>
    </>
  )
}