// src/components/ToggleDarkModeButton.js

import React from 'react';
import './ToggleDarkModeButton.css'; // Import the CSS file

const ToggleDarkModeButton = ({ toggleDarkMode }) => {
  return (
    <label className="toggle-dark-mode-button">
      <input type="checkbox" onChange={toggleDarkMode} />
      <span className="slider round"></span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 4.5C15.14 4.5 17.8 6.626 19 10.04 15.77 10.14 12 13.548 12 17.5 12 21.45 15.77 24.86 19 24.96C17.8 28.374 15.14 30.5 12 30.5 8.86 30.5 6.2 28.374 5 24.96 8.23 24.86 12 21.45 12 17.5 12 13.548 8.23 10.14 5 10.04C6.2 6.626 8.86 4.5 12 4.5Z"/>
      </svg>
    </label>
  );
};

export default ToggleDarkModeButton;
