// src/components/Preloader.js

import React, { useEffect, useState } from 'react';
import './Preloader.css';

const tags = ["Nitin", "Satya", "Developer", "Designer", "Creator", "Engineer", "Techverra"];

const Preloader = () => {
  const [visibleTags, setVisibleTags] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      const nextTags = tags.slice(currentIndex, currentIndex + 3);
      setVisibleTags(nextTags);
      currentIndex = (currentIndex + 1) % tags.length;
    }, 500); // Change every 0.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader-container">
      {visibleTags.map((tag, i) => (
        <div key={i} className="zoom-text">{tag}</div>
      ))}
    </div>
  );
};

export default Preloader;
