import React from 'react'
import { NavLink } from "react-router-dom";

import styles from "./PhotoBrowser.module.css";

function Image({src, alt, id}) {
  return (
    <NavLink to={`/photos/${id}`}>
      <img className={styles.singleImage} src={src} alt={alt} ></img>
    </NavLink>
  )
}

export default Image
