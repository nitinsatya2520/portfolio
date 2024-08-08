import React, { useState } from 'react';
import './skills.css';
import { useSpring, animated } from '@react-spring/web';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "Python", description: "Experienced in Python programming" },
    { name: "HTML", description: "Proficient in HTML5" },
    { name: "CSS", description: "Skilled in styling web pages using CSS" },
    { name: "JavaScript", description: "Experienced with modern JavaScript (ES6+)" },
    { name: "React", description: "Experienced with React for building user interfaces" },
    { name: "Next.js", description: "Familiar with Next.js for server-side rendering" },
    { name: "Machine Learning", description: "Knowledgeable in machine learning algorithms and techniques" },
    { name: "Data Analysis and Visualization", description: "Skilled in analyzing and visualizing data using various tools" },
    { name: "Photoshop", description: "Experienced in graphic design and photo editing" },
    { name: "Illustrator", description: "Proficient in vector graphics design using Illustrator" },
    { name: "Canva", description: "Skilled in creating designs using Canva" },
    { name: "Version Control Systems - Git", description: "Experienced with Git for version control" },
    { name: "TypeScript", description: "Familiar with TypeScript for adding static types to JavaScript" },
    { name: "Java", description: "Experienced in Java programming" },
    { name: "C++", description: "Skilled in C++ for high-performance applications" },
    { name: "Artificial Intelligence", description: "Knowledgeable in AI concepts, including machine learning and neural networks" },
    { name: "Cyber Security", description: "Experienced in protecting systems from cyber threats and attacks" },
    { name: "Blockchain Technology", description: "Understanding of blockchain technology and its applications" },
    { name: "Data Science", description: "Skilled in data analysis, statistical modeling, and data-driven decision making" },
    { name: "BBA Skills", description: "Business management skills including strategic planning, financial management, and marketing" },
    { name: "Ruby", description: "Familiar with Ruby and Ruby on Rails" },
    { name: "Vue.js", description: "Experience with Vue.js for building user interfaces" },
    { name: "Angular", description: "Knowledgeable in Angular for single-page applications" },
    { name: "SASS/SCSS", description: "Experienced with SASS/SCSS for advanced CSS styling" },
    { name: "Docker", description: "Proficient in using Docker for containerization" },
    { name: "Kubernetes", description: "Knowledgeable in Kubernetes for container orchestration" },
    { name: "AWS", description: "Familiar with Amazon Web Services for cloud computing" },
    { name: "Azure", description: "Experienced with Microsoft Azure cloud services" },
    { name: "GCP", description: "Proficient in Google Cloud Platform services" },
    { name: "Jenkins", description: "Skilled in using Jenkins for CI/CD pipelines" },
    { name: "MongoDB", description: "Experienced with MongoDB for NoSQL databases" },
    { name: "PostgreSQL", description: "Proficient in using PostgreSQL for relational databases" },
    { name: "SQLite", description: "Familiar with SQLite for lightweight, file-based databases" },
    { name: "GraphQL", description: "Experience with GraphQL for API queries" },
    { name: "Firebase", description: "Skilled in using Firebase for real-time databases and authentication" },
    { name: "WebAssembly", description: "Knowledgeable in WebAssembly for high-performance web applications" },
    { name: "Project Management", description: "Experience in managing projects using Agile/Scrum methodologies" },
    { name: "Communication", description: "Effective in both written and verbal communication" },
    { name: "Problem Solving", description: "Strong problem-solving and critical thinking skills" },
    { name: "UI/UX Design", description: "Experienced in designing user interfaces and improving user experiences" },
    { name: "Figma", description: "Proficient in using Figma for UI/UX design" },
    { name: "Adobe XD", description: "Skilled in Adobe XD for designing and prototyping user interfaces" },
    { name: "Penetration Testing", description: "Knowledgeable in identifying and fixing security vulnerabilities" },
    { name: "Cryptography", description: "Experienced in cryptography for secure communication" },
    { name: "Ethical Hacking", description: "Skilled in ethical hacking to enhance security measures" }
    
    
  ];

  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 });

  return (
    <section id='si'>
      <animated.section id="skills" className="skills-section" style={fadeIn}>
        <h2 className="skills-title">My Skills...</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {skill.name}
              {hoveredSkill === skill.name && (
                <div className="tooltip">{skill.description}</div>
              )}
            </div>
          ))}
        </div>
      </animated.section>
    </section>
  );
};

export default Skills;
