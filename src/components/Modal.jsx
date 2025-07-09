import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children, onClose }) => {
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button onClick={onClose} className="modal-close-button">
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
