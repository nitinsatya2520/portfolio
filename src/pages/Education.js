import React, { useEffect } from 'react';
import './Education.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUniversity, FaGraduationCap, FaSchool } from 'react-icons/fa';

const educationData = [
  {
    school: "V.S.ST. JOHN’S HR SEC SCHOOL",
    degree: "High School",
    year: "2013 - 2020",
    description: "Completed High School with a GPA of 82%. Participated in NCC and received gold medals in sports.",
    logo: "images.jpeg",
    icon: <FaSchool className="edu-icon" />
  },
  {
    school: "SARADA JR COLLAGE",
    degree: "Intermediate",
    year: "2020 - 2022",
    description: "Completed Higher Secondary Education with 60%.",
    logo: "images (1).jpeg",
    icon: <FaGraduationCap className="edu-icon" />
  },
  {
    school: "KL UNIVERSITY",
    degree: "B.Tech (AI&DS)",
    year: "2022 - 2026",
    description: "Pursuing B.Tech in AI & DS with Cyber Security. Current CGPA: 8.69.",
    logo: "download.jpeg",
    icon: <FaUniversity className="edu-icon" />
  },
  {
    school: "KL UNIVERSITY",
    degree: "BBA",
    year: "2023 - 2026",
    description: "Pursuing Bachelor of Business Administration.",
    logo: "download.jpeg",
    icon: <FaUniversity className="edu-icon" />
  }
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="education-container" id="education">
      <h2 className="education-title">My Education</h2>
      <div className="education-cards-wrapper">
        {educationData.map((item, index) => (
          <div key={index} className="education-card" data-aos="zoom-in-up">
            <img
              src={require(`../assets/${item.logo}`)}
              alt="logo"
              className="edu-logo"
            />
            <div className="edu-content">
              {item.icon}
              <h3>{item.school}</h3>
              <p className="edu-degree">{item.degree} • <span>{item.year}</span></p>
              <p className="edu-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
