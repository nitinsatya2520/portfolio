import React from 'react';
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
import TimeModule from '../components/TimeModule';
import WeatherModule from '../components/WeatherModule';


const House = () => {
  

  
  return (

    
    <div className="App">
      
      <Navbar />
      
      <main>
      
      <Hero />
        <About />
        <Skills />
        <Projects />
        
        <Contact />
      </main>
      
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default House;
