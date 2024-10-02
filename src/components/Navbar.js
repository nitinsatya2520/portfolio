import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import Nii from '../assets/nitin-removebg.svg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      
      <div className="navbar-logo">
        <a href="/">
      <img src={Nii} alt="QR Code Generator" className="profile-imageLl" loading="lazy" /></a>
      KADAVAKOLLU NITIN SATYA
      
        </div>
      <button className="menu-toggle" onClick={handleToggle}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/hero" onClick={handleToggle}>Home</Link>
        </li>
        <li>
          <Link to="/education" onClick={handleToggle}>Education</Link>
        </li>
        <li>
          <Link to="/project" onClick={handleToggle}>Projects</Link>
        </li>
        <li>
          <Link to="/internships" onClick={handleToggle}>Internships</Link>
        </li>
        <li>
          <Link to="/certificaion" onClick={handleToggle}>Certification</Link>
        </li>
        <li>
          <Link to="/skills" onClick={handleToggle}>Skills</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleToggle}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleToggle}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
