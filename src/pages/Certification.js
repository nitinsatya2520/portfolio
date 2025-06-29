import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Certification.css';

const Certification = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const certificationsData = [
    {
      company: "AWS Certified",
      position: "AWS Certified Cloud Practitioner",
      logo: "AWS.png"
    },
    {
      company: "Aviatrix",
      position: "Aviatrix Certified Multicloud Network Associate",
      logo: "multi.png"
    },
    {
      company: "IBM",
      position: "IBMCE CEPYT1IN Certificate",
      logo: "IBMC.png"
    },
    {
      company: "Oracle Certified Professional",
      position: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      logo: "oracle.png"
    },
    {
      company: "aws academy",
      position: "AWS Academy Graduate - AWS Academy Cloud Architecting",
      logo: "aws cac.png"
    },
    {
      company: "aws academy",
      position: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      logo: "aws g.png"
    },
    {
      company: "aws academy",
      position: "AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1",
      logo: "aws i1c.png"
    },
    {
      company: "aws academy",
      position: "AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 2",
      logo: "aws i2c.png"
    },
    {
      company: "Salesforce",
      position: "Salesforce - AI Associate",
      logo: "ser.png"
    }
  ];

  const badgeData = [
    { badge: "awsi2.png" },
    { badge: "aws gb.png" },
    { badge: "aws2.png" },
    { badge: "oracle2.png" },
    { badge: "multicloud.png" },
    { badge: "aws ca.png" },
    { badge: "aws i1.png" },
    { badge: "serv.png" },
    { badge: "IBM.png" }
  ];

  return (
    <section className={`certifications-section ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className="certification-title" data-aos="fade-up">Certifications</h2>

      <div className="certifications-list">
        <h3 className="badges-heading" data-aos="fade-up">Badges</h3>
        <div className="badges-section">
          <div className="badge-container">
            {badgeData.map((item, index) => (
              <img
                key={index}
                src={require(`../assets/${item.badge}`)}
                alt="badge"
                className="certification-badge"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>

        {certificationsData.map((item, index) => (
          <div key={index} className="certification-item" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="certification-details">
              <h3>{item.company}</h3>
              <p><strong>{item.position}</strong></p>
              <img
                src={require(`../assets/${item.logo}`)}
                alt={`${item.company} logo`}
                className="certification-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
