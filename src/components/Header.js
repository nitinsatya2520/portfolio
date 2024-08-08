import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import profileImage from '../assets/nitin.jpg';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="header-content">
        <img src={profileImage} alt="Profile" className="profile-imageL" />
        <h1>KADAVAKOLLU NITIN SATYA</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav aria-label="Main Navigation" className={isMenuOpen ? 'open' : ''}>
        <ul>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
		  
          <li>
            <NavLink to="/project" activeClassName="active">Project</NavLink>
          </li>
          <li>
            <NavLink to="/education" activeClassName="active">Education</NavLink>
          </li>
          <li>
            <NavLink to="/internships" activeClassName="active">Internships</NavLink>
          </li>
          <li><a href="#contact">Contact</a></li>
		  <li>
            <NavLink to="/skills" activeClassName="active">Skills</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
