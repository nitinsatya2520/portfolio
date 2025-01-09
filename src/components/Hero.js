import React from 'react';
import './Hero.css'; // Separate CSS file for Hero component
import profileImage from '../assets/nitin-removebg.png'; // Adjust the path if needed

const Hero = () => {
  return (
    <section id="hero">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video" preload="auto">
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text and Profile Section */}
      <div className="flex-1">
        <div>
          <h4>Hi and welcome to My Portfolio Website</h4>
          <h2>I am K NITIN SATYA</h2>
        </div>
        <h4>B.Tech   ,  B.B.A</h4>
        <p>I am your friendly neighborhood</p>
        <p>osm developer...</p>
      </div>

      {/* Profile Image */}
      <div className="flex-1">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
    </section>
  );
}

export default Hero;
