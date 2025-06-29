// src/components/Preloader.js

import React, { useEffect, useState } from 'react';
import './Preloader.css';

const tags = ["Nitin","Satya", "Developer", "Designer", "Creator", "Engineer","Techverra"];

const Preloader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tagInterval = setInterval(() => {
      setIndex(prev => (prev + 1) % tags.length);
    }, 400); // Change every 0.4s

    return () => clearInterval(tagInterval);
  }, []);

  return (
    <div className="preloader-container">
      <div className="zoom-text">{tags[index]}</div>
    </div>
  );
};

export default Preloader;
