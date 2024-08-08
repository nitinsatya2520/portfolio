import React, { useState, useEffect } from 'react';
import './TimeModule.css';

const TimeModule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="time-module">
      
      <p>My Current time: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default TimeModule;
