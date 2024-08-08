// src/App.js

import React, { useState } from 'react'; // Import useState
import '../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import { ThemeProvider } from '../ThemeContext'; // Import ThemeProvider
import ToggleDarkModeButton from '../components/ToggleDarkModeButton';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeProvider value={{ darkMode }}>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <Header />
        <ToggleDarkModeButton toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <About />
          
          <Projects />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
