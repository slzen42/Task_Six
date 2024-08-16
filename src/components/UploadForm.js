// src/components/UploadForm.js
import React, { useState } from 'react';
import './UploadForm.css';

const UploadForm = ({ addImage }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addImage(reader.result);
      };
      reader.readAsDataURL(file);
      setFile(null);
    }
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={handleFileChange}
      />
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default UploadForm;


