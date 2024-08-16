// src/components/Modal.js
import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ image, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className="modal" onClick={closeModal}>
      <span className="close">&times;</span>
      <img className="modal-content" src={image} alt="" />
    </div>
  );
};

export default Modal;

