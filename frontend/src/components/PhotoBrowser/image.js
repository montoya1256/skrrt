import React from 'react'
import styles from "./PhotoBrowser.module.css";

function Image({src, alt}) {
  return (
    <div>
      <img className={styles.singleImage} src={src} alt={alt} ></img>
    </div>
  )
}

export default Image
