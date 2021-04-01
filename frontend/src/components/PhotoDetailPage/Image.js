import React from "react";
import styles from "./PhotoDetail.module.css";
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router";

function Image({ src, alt, nextPhotoId, currentId }) {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={styles.heightController}>
      <NavLink to="/explore" className={styles.backBtn}>
        <i className={`fas fa-long-arrow-alt-left ${styles.leftBackArrow}`}></i>
        Back to explore
      </NavLink>
      <button onClick={goBack} className={styles.leftPhotoContainer}>
        <i className={`fas fa-angle-left ${styles.leftArrow}`}></i>
      </button>
      <div className={styles.imageContainer}>
        <img className={styles.imageContainer_image} src={src} alt={alt}></img>
      </div>
      <Link
        to={`/photos/${nextPhotoId}`}
        className={styles.rightPhotoContainer}
      >
        <i className={`fas fa-angle-right ${styles.rightArrow}`}></i>
      </Link>
    </div>
  );
}

export default Image;
