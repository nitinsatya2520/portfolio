import React from 'react';
import './Project.css'; // Import CSS file for Projects
import password from '../assets/password.png';
import weather from '../assets/weather.png';
import qr from '../assets/qr.png';
import convertor from '../assets/converter.png';
import kns from "../assets/KNS.png";
import movie from "../assets/movie app.png";
import chat from "../assets/chat.png";
import music from "../assets/music.png";
import ats from "../assets/ats.png";


// Include any additional images here if needed
// import teddyTracy from '../assets/teddyTracy.png';
// import librarySystem from '../assets/librarySystem.png';
// import musicRecommendation from '../assets/musicRecommendation.png';
// import donationSystem from '../assets/donationSystem.png';

const Projects = ({ darkMode }) => {
  const darkModeClass = darkMode ? 'dark-mode' : '';

  return (
    <section id="project" className={darkModeClass}>
      <h2 className={`text-5xl font-bold text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>My Projects</h2>

      {/* Existing Projects */}

      {/* Project 1 */}
      <div className={`project-card p-10 flex flex-col lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="w-80 rounded">
          <a href="https://knsstudios.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <img src={kns} alt="KNS Studios Website" className="project-image" loading="lazy" />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            <a className="project-link" href="https://knsstudios.vercel.app/" target="_blank" rel="noopener noreferrer">KNS STUDIOS WEBSITE</a>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            K N S Studios Founded in 2023 by K Nitin Satya, K N S Studios is a dynamic and innovative short film production company. Our mission is to create compelling and thought-provoking short films that captivate audiences and inspire meaningful conversations. With a passion for storytelling and a commitment to excellence, we bring together talented filmmakers, writers, and artists to produce high-quality films across various genres. At K N S Studios, we believe in the power of short films to make a big impact, and we are dedicated to pushing the boundaries of creativity and cinematic expression.
          </p>
        </div>
      </div>


      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="w-80 rounded">
          <a href="https://kns-ats-resume-checker.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <img src={ats} alt="Converter App" className="project-image" loading="lazy" />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            <a className="project-link" href="https://kns-ats-resume-checker.vercel.app/" target="_blank" rel="noopener noreferrer">KNS ATS Checker</a>
          </h2>
          <p>
  The ATS Resume Checker is an AI-powered tool designed to help job seekers optimize their resumes for Applicant Tracking Systems (ATS). 
  It analyzes resumes in real-time by extracting text, detecting key sections (Experience, Skills, Education, etc.), 
  and matching relevant keywords from job descriptions using NLP (spaCy, TF-IDF). 
  The system also evaluates formatting issues, ensuring the resume is ATS-friendly. 
  With WebSockets for live updates and Celery for background processing, this tool provides an accurate resume compatibility score 
  and actionable feedback to improve job application success rates.
</p>

        </div>
      </div>

      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="w-80 rounded">
          <a href="https://kns-chat-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <img src={chat} alt="Converter App" className="project-image" loading="lazy" />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            <a className="project-link" href="https://kns-chat-app.vercel.app/" target="_blank" rel="noopener noreferrer">KNS Chat App</a>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            This is a project built on React which allows you to group chat from unlimited people and allows you to delect it,tracks your progress in DSA and stores that in local storage.The app fetches messages every 5 seconds and ensures that new messages appear at the top of the chat window. You can easily switch between chat and this About page using the navigation links.
          </p>
        </div>
      </div>

      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="w-80 rounded">
          <a href="https://kns-music.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <img src={music} alt="Converter App" className="project-image" loading="lazy" />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            <a className="project-link" href="https://kns-music.vercel.app/" target="_blank" rel="noopener noreferrer">Converter App</a>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            This is a project built on React which tracks plays music and stores that in local storage.
          </p>
        </div>
      </div>


<div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="w-80 rounded">
          <a href="https://convertor-wine.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <img src={convertor} alt="Converter App" className="project-image" loading="lazy" />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            <a className="project-link" href="https://convertor-wine.vercel.app/" target="_blank" rel="noopener noreferrer">Converter App</a>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            This is a project built on React which tracks your progress in DSA and stores that in local storage.
          </p>
        </div>
      </div>

      {/* Project 3 */}
      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="w-80 rounded">
          <a href="https://weather-tau-gules.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <img src={weather} alt="Weather App" className="project-image" loading="lazy" />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            <a className="project-link" href="https://weather-tau-gules.vercel.app/" target="_blank" rel="noopener noreferrer">Weather App</a>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            A weather forecasting app built using React.
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="w-80 rounded">
          <a href="https://convertor-wine.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <img src={convertor} alt="Converter App" className="project-image" loading="lazy" />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            <a className="project-link" href="https://convertor-wine.vercel.app/" target="_blank" rel="noopener noreferrer">Converter App</a>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            This is a project built on React which tracks your progress in DSA and stores that in local storage.
          </p>
        </div>
      </div>

      {/* Project 3 */}
      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="w-80 rounded">
          <a href="https://weather-tau-gules.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <img src={weather} alt="Weather App" className="project-image" loading="lazy" />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            <a className="project-link" href="https://weather-tau-gules.vercel.app/" target="_blank" rel="noopener noreferrer">Weather App</a>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            A weather forecasting app built using React.
          </p>
        </div>
      </div>

      {/* Project 4 */}
      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="w-80 rounded">
          <a href="https://password-eo4an23e6-nitin-satyas-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <img src={password} alt="Password Generator" className="project-image" loading="lazy" />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            <a className="project-link" href="https://password-eo4an23e6-nitin-satyas-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Password Generator</a>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Secure password generator project.
          </p>
        </div>
      </div>

      {/* Project 5 */}
      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="w-80 rounded">
          <a href="https://qr-code-generator-flame-gamma.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <img src={qr} alt="QR Code Generator" className="project-image" loading="lazy" />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            <a className="project-link" href="https://qr-code-generator-flame-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">QR Code Generator</a>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            QR code generator project.
          </p>
        </div>
      </div>

      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="w-80 rounded">
          <a href="https://movie-series-app-vert.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <img src={movie} alt="QR Code Generator" className="project-image" loading="lazy" />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            <a className="project-link" href="https://movie-series-app-vert.vercel.app/" target="_blank" rel="noopener noreferrer">Movie and Series App</a>
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            suggesting Movies and Series
          </p>
        </div>
      </div>

      

      {/* New Projects */}

      {/* Teddy and Tracy */}
      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            Teddy and Tracy
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            It was creating a C project Tracy writes a random string on the whiteboard with words from 
            the dictionary. Teddy and Tracy take turns erasing two connected substrings from the 
            dictionary in the smartest way. The game continues until one player can't find valid 
            substrings to erase. The last player with a valid move is declared the winner. Players aim to 
            make optimal moves to increase their chances of winning. 
          </p>
        </div>
      </div>

      {/* Library Book Circulation System */}
      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            Library Book Circulation System
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            The Library Circulation System is a digital assistant for managing books, videos, audios, and 
            library cardholder information. Librarians effortlessly track borrowed and returned items, 
            receiving reminders for overdue returns. The system ensures fairness by calculating fines for 
            late returns based on overdue days. Different sections handle tasks such as managing 
            collections, library cards, and tracking checkouts, returns, overdue notices, and fines. 
            Overall, the system empowers library staff to maintain a dynamic collection with ease. 
          </p>
        </div>
      </div>

      {/* Music Recommendation System ML */}
      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            Music Recommendation System ML
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            The Music Recommendation System ML project strives to create a smart system suggesting 
            music based on user preferences and listening history. Its primary goal is to enhance user 
            happiness and engagement through personalized music recommendations. Additionally, the 
            project aims to improve user retention and foster music exploration by suggesting a diverse 
            range of relevant tracks. To achieve these objectives, machine learning techniques will be 
            employed to enhance the accuracy and effectiveness of music recommendations. 
          </p>
        </div>
      </div>

      {/* Online Donation Management System */}
      <div className={`project-card p-10 flex flex-col lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full ${darkMode ? 'bg-gray-800' : 'bg-emerald-200'}`}>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className={`font-bold text-3xl text-center ${darkMode ? 'text-emerald-300' : 'text-emerald-500'}`}>
            ONLINE DONATION MANAGEMENT SYSTEM
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Led the development of an online donation management system using Python, incorporating functionalities for donor 
            registration, donation tracking, and reporting. Demonstrated strong teamwork and communication skills in coordinating with 
            cross-functional teams to meet project deadlines and deliverables.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Projects;
