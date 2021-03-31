import React from "react";
import styles from "./PhotoDetail.module.css";
import { NavLink } from "react-router-dom";


function Image({src, alt}) {
  return (
    <div className={styles.heightController}>
      <NavLink to='/explore' className={styles.backBtn}>
        <i className={`fas fa-long-arrow-alt-left ${styles.leftBackArrow}`}></i>
        Back to explore
      </NavLink>
      <NavLink to='#' className={styles.leftPhotoContainer}>
        <i className={`fas fa-angle-left ${styles.leftArrow}`}></i>
      </NavLink>
      <div className={styles.imageContainer}>
        <img className={styles.imageContainer_image} src={src} alt={alt}></img>
      </div>
      <NavLink to='#' className={styles.rightPhotoContainer}>
        <i className={`fas fa-angle-right ${styles.rightArrow}`}></i>
      </NavLink>
    </div>
  );
}

export default Image;
