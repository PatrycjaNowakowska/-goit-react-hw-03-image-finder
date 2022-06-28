
import React from "react";
import styles from '../Styles.module.css';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images, openModal }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, bigImage, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          bigImage={bigImage}
          tags={tags}
          openModal={openModal}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;