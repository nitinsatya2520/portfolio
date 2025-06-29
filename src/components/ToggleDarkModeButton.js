// src/components/ToggleDarkModeButton.js

import React, { useState } from 'react';
import './ToggleDarkModeButton.css';

const ToggleDarkModeButton = ({ toggleDarkMode }) => {
  const [isDark, setIsDark] = useState(false);

  const handleChange = () => {
    setIsDark(!isDark);
    toggleDarkMode();
  };

  return (
    <label className={`toggle-dark-mode-button ${isDark ? 'dark' : 'light'}`}>
      <div className="icon-wrapper">
        <div className={`icon ${isDark ? 'rotate-out' : 'rotate-in'}`}>
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64 13.65a9 9 0 01-11.29-11.3 9 9 0 1011.29 11.3z" />
            </svg> // Moon
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg> // Sun
          )}
        </div>
      </div>
      <div className="toggle-switch">
        <input type="checkbox" onChange={handleChange} />
        <span className="slider round"></span>
      </div>
    </label>
  );
};

export default ToggleDarkModeButton;
