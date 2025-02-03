import React from 'react';
import profileImage from '../assets/soitlong.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={profileImage} alt="Profile" className="profile-ime" />
      <p>
        Enthusiastic and driven student pursuing a B. Tech in Artificial Intelligence and Data Science, with a specialization in Cyber Security, at KL University. Also currently pursuing BBA. Possesses a strong foundation in programming languages such as C, Java, and Python, with a keen interest in developing innovative solutions. Committed to leveraging technical skills to contribute effectively to dynamic environments.
      </p>
    </section>
  );
};

export default About;
