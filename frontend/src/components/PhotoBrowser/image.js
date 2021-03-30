import React from 'react'
import styles from "./PhotoBrowser.module.css";

function image({src, alt}) {
  return (
    <div>
      <img className={styles.singleImage} src={src} alt={alt}></img>
    </div>
  )
}

export default image
