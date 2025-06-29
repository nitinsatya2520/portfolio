import React, { useState , useEffect , useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./skills.css";
import { useSpring, animated } from "@react-spring/web";

const Skills = () => {
  useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = {
    Languages: [
      { name: "Python", description: "Experienced in Python programming" },
      { name: "C", description: "Skilled in C" },
      { name: "JavaScript", description: "Experienced with modern JavaScript (ES6+)" },
      { name: "HTML", description: "Proficient in HTML5" },
      { name: "CSS", description: "Skilled in styling web pages using CSS" },
      { name: "Java", description: "Experienced in Java programming" },
      { name: "C++", description: "Skilled in C++ for high-performance applications" },
      { name: "R", description: "Familiar with R" },
    ],
    Frameworks: [
      { name: "React", description: "Experienced with React for building user interfaces" },
      { name: "Next.js", description: "Familiar with Next.js for server-side rendering" },
      { name: "Vue.js", description: "Experience with Vue.js for building user interfaces" },
      { name: "Angular", description: "Knowledgeable in Angular for single-page applications" },
      { name: "Django", description: "Familiar with Django for web development" },
      { name: "Flask", description: "Skilled in Flask for lightweight web applications" },
    ],
    Tools: [
      { name: "VS Code", description: "Proficient in using VS Code for development" },
      { name: "Git", description: "Experienced with Git for version control" },
      { name: "Docker", description: "Proficient in using Docker for containerization" },
      { name: "Figma", description: "Proficient in using Figma for UI/UX design" },
      { name: "Photoshop", category: "tools", description: "Experienced in graphic design and photo editing" },
      { name: "Canva", category: "tools", description: "Skilled in creating designs using Canva" },
      { name: "PyCharm", description: "Experienced with PyCharm for Python development" },
      { name: "Jupyter Notebook", description: "Proficient in using Jupyter Notebook for data science and machine learning" },
      { name: "Anaconda", description: "Familiar with Anaconda for managing Python environments and dependencies" },
      { name: "Power BI", description: "Skilled in using Power BI for data visualization and reporting" },
    ],
    Platforms: [
      { name: "AWS", description: "Familiar with Amazon Web Services for cloud computing" },
      { name: "Firebase", description: "Skilled in using Firebase for real-time databases and authentication" },
      { name: "Azure", description: "Experienced with Microsoft Azure cloud services" },
    ],
    SoftSkills: [
      { name: "Communication", description: "Effective in both written and verbal communication" },
      { name: "Problem Solving", description: "Strong problem-solving and critical thinking skills" },
      { name: "Project Management", description: "Experience in managing projects using Agile/Scrum methodologies" },
      { name: "Research", description: "Skilled in conducting thorough research for various projects" },
      { name: "Presentations", description: "Experienced in preparing and delivering presentations" },
      { name: "Analytics", description: "Skilled in analyzing data and drawing meaningful insights" },
      { name: "Quick Learner", description: "Able to rapidly acquire new skills and knowledge" },
      { name: "Teamwork and Collaboration", description: "Excellent at working with teams to achieve common goals" },
      { name: "Multitasking and Organization", description: "Skilled in managing multiple tasks and staying organized" },
      { name: "Client Relationships", description: "Experienced in building and maintaining strong client relationships" },
    ],
    Databases: [
      { name: "MongoDB", description: "Experienced with MongoDB for NoSQL databases" },
      { name: "PostgreSQL", description: "Proficient in using PostgreSQL for relational databases" },
      { name: "SQLite", description: "Familiar with SQLite for lightweight, file-based databases" },
      { name: "GraphQL", description: "Experience with GraphQL for API queries" },
    ],
  };

  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 });

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section id="si">
      <animated.section id="skills" className="skills-section" style={fadeIn}>
        <h2 className="skills-title">My Skills...</h2>
        <div className="skills-categories">
          {Object.keys(skills).map((category, index) => (
            <div
  key={index}
  className={`category-title ${expandedCategory === category ? "active" : ""}`}
  onClick={() => toggleCategory(category)}
  data-aos="fade-up"
  data-aos-delay={index * 100}
>
  {category}
</div>
          ))}
        </div>
        <div className="skills-display">
          {expandedCategory && (
            <div className="category-skills">
              {skills[expandedCategory].map((skill, skillIndex) => (
  <div
    key={skillIndex}
    className="skill-card"
    onMouseEnter={() => setHoveredSkill(skill.name)}
    onMouseLeave={() => setHoveredSkill(null)}
    data-aos="zoom-in-up"
    data-aos-delay={skillIndex * 100}
  >
    {skill.name}
    {hoveredSkill === skill.name && (
      <div className="tooltip">{skill.description}</div>
    )}
  </div>
))}

            </div>
          )}
        </div>
      </animated.section>
    </section>
  );
};

export default Skills;
