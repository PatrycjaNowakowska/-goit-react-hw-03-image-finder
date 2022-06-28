import React from "react";
import styles from '../Styles.module.css';

function ImageGalleryItem({ webformatURL, bigImage, tags, openModal }) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
        data-source={bigImage}
        onClick={openModal}
        loading="lazy"
      />
    </li>
  );
}

export default ImageGalleryItem;