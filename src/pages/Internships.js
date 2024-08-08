import React from 'react';
import './Internships.css';

const Internships = () => {
    const internshipsData = [
        {
            company: "Segura Invendors Private Ltd",
            position: " Full-stack web development Intern",
            year: "Summer 2024",
            description: "Worked on developing and optimizing Fronted and backend services, implemented new features, and collaborated with the team to improve the overall performance of the application.",
            logo: "R.png"
        }
        // Add more internship experiences as needed
    ];

    return (
        <section className="internships-section">
            <h2>Internships</h2>
            <div className="internships-list">
                {internshipsData.map((item, index) => (
                    <div key={index} className="internship-item">
                        
                        <div className="internship-details">
                            <h3>{item.company}</h3>
                            <p><strong>{item.position}</strong></p>
                            <p>{item.year}</p>
                            <p>{item.description}</p>
                        </div>
                        <img src={require(`../assets/${item.logo}`)} alt={`${item.school} logo`} className="education-logo" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Internships;
