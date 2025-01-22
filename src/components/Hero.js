import React from 'react';
import './Hero.css'; // Separate CSS file for Hero component
import profileImage from '../assets/nitin-removebg.png'; // Adjust the path if needed
import profile from '../assets/nbc.png'; // Adjust the path if needed

const Hero = () => {
  return (
    <section id="hero">
      {/* Video Background */}
      

      {/* Text and Profile Section */}
      <div className="flex-1">
        <div>
          <h4>Hi and welcome to My Portfolio Website</h4>
          <h2>I am K NITIN SATYA</h2>
        </div>
        <h4>B.Tech   ,  B.B.A</h4>
        <p>I am your friendly neighborhood</p>
        <p>osm developer...</p>
        <a href="/KADAVAKOLLU NITIN SATYA RESUME.pdf" download="K_Nitin_Satya_Resume.pdf" className="download-resume-button">
          Download Resume
        </a>
      </div>

      {/* Profile Image */}
      <div className="flex-1">
        <img src={profile} alt="Profile" className="profile-image" />
      </div>
    </section>
  );
}

export default Hero;
