import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Nii from '../assets/nitin-removebg.svg';

const Navbar = ({ darkMode }) => {
  const [menuOpen, setIsOpen] = useState(false);
  const darkModeClass = darkMode ? 'dark-mode' : '';
  const toggleMenu = () => setIsOpen(!menuOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navContainer ${menuOpen ? 'menuOpen' : ''}`}>
 <div className="navBrand">
  <Link to="/" className="brandLink" onClick={closeMenu}>
    <img src={Nii} alt="logo" className="brandImage" />
    <span className="brandText">KADAVAKOLLU NITIN SATYA</span>
  </Link>
</div>


  <button
    className={`burgerButton ${menuOpen ? 'active' : ''}`}
    onClick={toggleMenu}
    aria-label="Menu"
  >
    <span className="line line1"></span>
    <span className="line line2"></span>
    <span className="line line3"></span>
  </button>

  <ul className={`navMenu ${menuOpen ? 'active' : ''}`}>
    <li><Link to="/hero" onClick={closeMenu}>Home</Link></li>
    <li><Link to="/education" onClick={closeMenu}>Education</Link></li>
    <li><Link to="/project" onClick={closeMenu}>Projects</Link></li>
    <li><Link to="/internships" onClick={closeMenu}>Internships</Link></li>
    <li><Link to="/certificaion" onClick={closeMenu}>Certification</Link></li>
    <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
  </ul>
</nav>

  );
};

export default Navbar;
