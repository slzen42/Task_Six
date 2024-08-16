import React, { useState, useEffect } from 'react';
import './ImageGallery.css';
import ImageItem from './ImageItem';

const ImageGallery = ({ images, openModal, removeImage }) => {
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    if (images.length > 0) {
      setGlow(true);
      const timer = setTimeout(() => setGlow(false), 1500); // Remove glow after 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, [images]);

  return (
    <div className={`image-gallery ${glow ? 'glow' : ''}`}>
      {images.map((image, index) => (
        <ImageItem
          key={index}
          image={image}
          openModal={openModal}
          removeImage={removeImage}
        />
      ))}
    </div>
  );
};

export default ImageGallery;





