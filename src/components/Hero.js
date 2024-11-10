
import React from 'react';
import './Hero.css'; // Separate CSS file for Hero component
import profileImage from '../assets/nitin-removebg.png'; // Adjust the path if needed

const Hero = () => {
  return (
    <section
      id="hero"
      className="px-10 w-full flex gap-12 flex-col lg:flex-row 
          justify-center items-center align-center mt-40 
          mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]"
    >
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex-1 flex flex-col justify-center items-center gap-5">
        <div>
          
          <h4 className="text-center text-xl font-bold">
            Hi and welcome to My Portfolio Website
          </h4>
          
          <h2 className="text-center text-emerald-500 text-5xl font-bold">
          I am K NITIN SATYA
          </h2>
          
        </div>
        <h4>B.Tech     B.B.A</h4>
        <p className="text-center">
          I am your friendly neighborhood
          
        </p>
        <p className="text-center">
          
          osm developer...
        </p>
       
      </div>
      <div className="flex-1">
        <img src={profileImage} alt="Profile" className="profile-image" />
		
      </div>
    </section>
  );
}

export default Hero;
