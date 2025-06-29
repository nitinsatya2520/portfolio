import React from 'react';
import { Link } from 'react-router-dom';
import './Bar.css';

const Bar = () => {
  return (
    <nav className="bar">
      <ul className="bar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/project">Projects</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/certificaion">Certification</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Bar;
