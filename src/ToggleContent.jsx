import React, { useState } from 'react';
import './ToggleContent.css';

const ToggleContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle-content-wrapper">
      <div className="toggle-content">
        <div className="toggle-header" onClick={toggleContent}>
          <h2>Why park a domain name in Parkname ?</h2>
          <span className="toggle-icon">{isOpen ? '▼' : ' ▲'}</span>
        </div>
        {isOpen && (
          <div className="toggle-body">
            <p>
              Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleContent;
