// src/components/TimeModule.js

import React, { useState, useEffect } from 'react';
import './TimeModule.css';
import { Clock } from 'lucide-react';

const TimeModule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="time-module">
      <Clock size={18} color="#bb86fc" className="clock-icon" />

      <div className="time-content">
        <p className="time">{formattedTime}</p>
        <p className="date">{formattedDate}</p>
      </div>
    </div>
  );
};

export default TimeModule;
