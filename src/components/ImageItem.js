// src/components/ImageItem.js
import React, { useState } from 'react';
import './ImageItem.css';

const ImageItem = ({ image, openModal, removeImage }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-item" onClick={() => openModal(image)}>
      <img
        src={image}
        alt="Gallery Item"
        className={loaded ? 'loaded' : ''}
        onLoad={() => setLoaded(true)}
      />
      <button className="remove-button" onClick={(e) => { e.stopPropagation(); removeImage(image); }}>
        ×
      </button>
    </div>
  );
};

export default ImageItem;


