// src/components/UploadForm.js
import React, { useState } from 'react';
import './UploadForm.css';

const UploadForm = ({ addImage }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files.length > 0) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          addImage(reader.result);
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
      {files.length > 0 && (
        <ul className="file-list">
          {Array.from(files).map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default UploadForm;





