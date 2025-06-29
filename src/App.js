// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import House from './pages/House';
import Education from './pages/Education';
import Projects from './components/Projects';
import TimeModule from './components/TimeModule';
import WeatherModule from './components/WeatherModule';
import Skills from './components/Skills';
import Internships from './pages/Internships';
import Contact from './components/Contact';
import ToggleDarkModeButton from './components/ToggleDarkModeButton';
import Hero from './components/Hero';
import Certification from './pages/Certification';
import Bar from './components/Bar';
import Preloader from './components/Preloader';
import Jan from './components/Jan';
function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Handle dark mode toggle
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Show Preloader before rendering the app
  if (loading) return <Preloader />;

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
        <Bar />
        <Navbar />

        <Jan />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/certificaion" element={<Certification />} />
          <Route path="/hero" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<House />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <TimeModule />
        <WeatherModule apiKey="03f7fb2a6ffa9af4e20414dc73edb7a3" city="Delhi" />
        <Footer />
        <ToggleDarkModeButton toggleDarkMode={toggleDarkMode} />
      </div>
    </Router>
  );
}

export default App;
