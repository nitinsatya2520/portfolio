// Footer.js
import './Footer.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer data-aos="fade-up">
      <p>&copy; {new Date().getFullYear()} KADAVAKOLLU NITIN SATYA</p>
    </footer>
  );
};

export default Footer;
