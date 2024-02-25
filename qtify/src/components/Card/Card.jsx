import React from "react";
import { Tooltip, Chip } from "@mui/material";
import {Link} from "react-router-dom";
import styles from "./Card.module.css"

export default function Card({data, type}) {
  // console.log(data);
  const getCard = (type) => {
    switch(type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;
        return (
          <>
          {/* <Tooltip title={`${songs.length} songs`} placement="top" arrow> */}
            <Link to={`/album/${slug}`} className={styles.link}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img src={image} alt="album" loading="lazy" height={170} width={160} />
                  <div className={styles.banner}>
                    <Chip
                    label={`${follows} Follows`}
                    className={styles.chip}/>
                  </div>
                </div>
                <div className={styles.titleWrapper}>{title}</div>
              </div>
            </Link>
          {/* </Tooltip> */}
          </>
        )
      }
      case "song": {
        const [image, likes, title] = data;

        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy"/>
              <div>
                <div className={styles.pill}>
                  <p>{`${likes} Likes`}</p>
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>{title}</div>
          </div>
        )
      }
      default:
        return <></>;
    }
  }
  return getCard(type);
}