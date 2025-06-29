import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Internships.css';

const Internships = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const internshipsData = [
    {
      company: "Segura Invendors Private Ltd",
      position: "Full-stack Web Development Intern",
      year: "Summer 2024",
      description:
        "Contributed to both frontend and backend development. Built and optimized features, enhanced UI responsiveness, and collaborated with the team to improve overall application performance.",
      logo: "R.png",
    },
    {
      company: "Edu Skills",
      position: "Cloud Development Intern (Virtual)",
      year: "Spring 2024",
      description:
        "Completed a 10-week virtual internship through AWS Academy from January to March 2024. Worked on cloud-based applications and improved deployment processes in collaboration with mentors.",
      logo: "edu.jpeg",
    },
  ];

  return (
    <section className={`internships-section ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className="internships-title" >Internships</h2>
      <div className="internships-container">
        {internshipsData.map((item, index) => (
          <div key={index} className="internship-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="internship-info">
              <h3 className="company-name">{item.company}</h3>
              <p className="position"><strong>{item.position}</strong></p>
              <p className="internship-year">{item.year}</p>
              <p className="internship-description">{item.description}</p>
            </div>
            <div className="internship-logo-container">
              <img
                src={require(`../assets/${item.logo}`)}
                alt={`${item.company} logo`}
                className="internship-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
