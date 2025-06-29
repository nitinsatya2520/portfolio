import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import profileImage from '../assets/soitlong.jpg';
import './About.css';

const About = ({ darkMode }) => {
  const darkModeClass = darkMode ? 'dark-mode' : '';
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" data-aos="fade-up">
      <h2 className="typewriter" data-aos="zoom-in">About Me</h2>
      <div className="about-content">
        <img
          src={profileImage}
          alt="Profile of [Your Name]"
          className="profile-img"
          data-aos="fade-right"
        />
        <p data-aos="fade-left">
          Enthusiastic and driven student pursuing a B. Tech in Artificial Intelligence and Data Science, with a specialization in Cyber Security, at KL University. Also currently pursuing BBA. Possesses a strong foundation in programming languages such as C, Java, and Python, with a keen interest in developing innovative solutions. Committed to leveraging technical skills to contribute effectively to dynamic environments.
        </p>
      </div>
    </section>
  );
};

export default About;
