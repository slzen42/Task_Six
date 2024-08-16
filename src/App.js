// src/App.js
import React, { useState } from 'react';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import UploadForm from './components/UploadForm';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const addImage = (image) => {
    setImages((prevImages) => [...prevImages, image]); // Add new image to the array
  };

  const removeImage = (imageToRemove) => {
    setImages(images.filter((image) => image !== imageToRemove));
  };

  return (
    <div className="App">
      <h1>Art Gallery by Soumyadeep</h1>
      <UploadForm addImage={addImage} />
      <div className="image-gallery">
        <ImageGallery images={images} openModal={openModal} removeImage={removeImage} />
      </div>
      {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default App;




