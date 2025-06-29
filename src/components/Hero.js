import React, { useEffect, useState } from 'react';
import './Hero.css';
import profile from '../assets/img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const htmlElement = document.documentElement;
    const dark = htmlElement.classList.contains('dark-mode');
    setIsDarkMode(dark);
  }, []);

  return (
    <section id="hero" className={isDarkMode ? 'dark-mode' : ''}>
      <div className="flex-1" data-aos="fade-up">
        <div className="fl" data-aos="fade-right">
          <h4>Hi and welcome to My Portfolio Website</h4>
          <h2>
  I am K NITIN SATYA
</h2>
        </div>
        <h4>B.Tech , B.B.A</h4>
        <p>I am your friendly neighborhood</p>
        <p className="typewriter-text">
  <Typewriter
    words={['Open Source Enthusiast.', 'Creative Developer.', 'Cyber Security Student.', 'Tech Explorer.']}
    loop
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</p>

        <a
          href="/KADAVAKOLLU NITIN SATYA resume.pdf"
          download="K_Nitin_Satya_Resume.pdf"
          className="download-resume-button"
          data-aos="zoom-in"
        >
          Download Resume
        </a>

        <a
  href="/contact"
  className="download-resume-button connect-button"
  data-aos="zoom-in"
  style={{ background: '#00f7ff', color: '#111', marginLeft: '1rem' }}
>
  Let’s Connect
</a>

      </div>

      <div className="profile-wrapper" data-aos="fade-left">
        <img src={profile} alt="Profile" className="profile-image" />
        <div className="profile-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
