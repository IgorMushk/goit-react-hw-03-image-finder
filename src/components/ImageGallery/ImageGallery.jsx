import React from 'react';
import css from  './ImageGallery.module.css'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data }) => {
  return (
  <ul className={css.ImageGallery}>
    {data.map(img => (
      <ImageGalleryItem key={img.id} data={img} />
    ))}
  </ul>
  );
};

export default ImageGallery;
