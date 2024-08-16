// src/components/UploadForm.js
import React, { useState } from 'react';
import './UploadForm.css';

const UploadForm = ({ addImage }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files); // Update state with the file list
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files.length > 0) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          addImage(reader.result); // Add image to the gallery
        };
        reader.readAsDataURL(file);
      });
      setFiles([]); // Clear files after uploading
    }
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
      />
      <button type="submit">Upload Images</button>
    </form>
  );
};

export default UploadForm;




