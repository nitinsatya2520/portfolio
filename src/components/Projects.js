import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import './Project.css';
import { FaGithub } from 'react-icons/fa';

// Images
import password from '../assets/password.png';
import weather from '../assets/weather.png';
import qr from '../assets/qr.png';
import convertor from '../assets/converter.png';
import kns from '../assets/KNS.png';
import movie from '../assets/movie app.png';
import chat from '../assets/chat.png';
import music from '../assets/music.png';
import ats from '../assets/ats.png';
import snake from '../assets/snake.png';
import snake2 from '../assets/snake2.png';

const Projects = ({ darkMode }) => {
  const [filter, setFilter] = useState('All');
  useEffect(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true, // animation happens only once
  });
}, []);


  const projects = [
    {
      img: kns,
      title: 'KNS STUDIOS WEBSITE',
      link: 'https://knsstudios.vercel.app/',
      github: 'https://github.com/nitinsatya2520/kns-website',
      desc: 'Short film production house website built with creative design.',
      tags: ['React', 'Website'],
      category: 'Apps',
    },
    {
      img: ats,
      title: 'KNS ATS Checker',
      link: 'https://kns-ats-resume-checker.vercel.app/',
      github: 'https://github.com/nitinsatya2520/ats-checker',
      desc: 'AI-powered resume checker using NLP.',
      tags: ['React', 'AI', 'Tool'],
      category: 'Tools',
    },
    {
      img: chat,
      title: 'KNS Chat App',
      link: 'https://kns-chat-app.vercel.app/',
      github: 'https://github.com/nitinsatya2520/chat-app',
      desc: 'Real-time chat app with DSA progress tracking.',
      tags: ['React', 'Socket.io'],
      category: 'Apps',
    },
    {
      img: music,
      title: 'KNS Music Player',
      link: 'https://kns-music.vercel.app/',
      github: 'https://github.com/nitinsatya2520/music-player',
      desc: 'Offline music player with modern responsive UI.',
      tags: ['React', 'Media'],
      category: 'Apps',
    },
    {
      img: convertor,
      title: 'Converter App',
      link: 'https://convertor-wine.vercel.app/',
      github: 'https://github.com/nitinsatya2520/dsa-convertor',
      desc: 'Track your DSA progress with local storage.',
      tags: ['React'],
      category: 'Tools',
    },
    {
      img: weather,
      title: 'Weather App',
      link: 'https://weather-tau-gules.vercel.app/',
      github: 'https://github.com/nitinsatya2520/weather-app',
      desc: 'Weather app using public API.',
      tags: ['React', 'API'],
      category: 'Apps',
    },
    {
      img: password,
      title: 'Password Generator',
      link: 'https://password-generator-kns.vercel.app/',
      github: 'https://github.com/nitinsatya2520/password-generator',
      desc: 'Custom password generator with length/complexity.',
      tags: ['JavaScript'],
      category: 'Tools',
    },
    {
      img: qr,
      title: 'QR Code Generator',
      link: 'https://qr-code-kns.vercel.app/',
      github: 'https://github.com/nitinsatya2520/qr-code-generator',
      desc: 'Generate QR codes instantly.',
      tags: ['JavaScript'],
      category: 'Tools',
    },
    {
      img: snake,
      title: 'Snake Game',
      link: 'https://snake-game-brown-beta.vercel.app/',
      github: 'https://github.com/nitinsatya2520/snake-game',
      desc: 'Classic Snake game with mobile support.',
      tags: ['Game', 'JavaScript'],
      category: 'Games',
    },
    {
      img: snake2,
      title: 'Snake Game 2',
      link: 'https://kns-snake-suuuussssvercelapp-nitin-satyas-projects.vercel.app/',
      github: 'https://github.com/nitinsatya2520/snake-game-2',
      desc: 'Modern version with smooth controls.',
      tags: ['Game', 'HTML', 'CSS'],
      category: 'Games',
    },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    
    <section id="project" className={darkMode ? 'dark-mode' : ''}>
      <h2 className="section-title">My Projects</h2>

      <div className="project-filter">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Apps">Apps</option>
          <option value="Games">Games</option>
          <option value="Tools">Tools</option>
        </select>
      </div>

      {filteredProjects.map((project, index) => (
       <div
          key={index}
          className="project-card"
          data-aos="zoom-in-up"
        >
          <div
            key={index} data-aos='fade-right' >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.title} className="project-image" loading="lazy" />
            </a>
          </div>
          <div key={index}  className="project-content" data-aos='fade-left'>
            <div className="project-title-wrapper">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.title}
              </a>
              {project.github && (
                <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}
            </div>
            <p>{project.desc}</p>
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
