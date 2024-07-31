import React, { useState } from 'react';
import './ToggleContent.css';

function ToggleContent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="toggle-header" onClick={toggleContent}>
        <h2>Why park a domain name in Parkname ?</h2>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      <div className={`toggle-content ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <>
            <h2>Why park a domain name in Parkname ?</h2>
            <p>Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.</p>
            <span>▼</span>
          </>
        )}
      </div>
    </div>
  );
}
export default ToggleContent;
