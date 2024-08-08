import React from 'react';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            school: "V.S.ST. JOHN’S HR SEC SCHOOL",
            degree: "High School",
            year: "2013 - 2020",
            description: "Completed High School with a GPA of 82% in April 2020. Engaged in various extracurricular activities, NCC, demonstrating leadership and teamwork skills. Received gold medals in sports during high school.",
            logo: "images.jpeg"
        },
        {
            school: "SARADA JR COLLAGE",
            degree: "Intermediate",
            year: "2020 - 2022",
            description: "Completed Higher Secondary Education with a score of 60% in April 2022. Demonstrated strong academic performance and dedication to learning.",
            logo: "images (1).jpeg"
        },
        {
            school: "KL UNIVERSITY",
            degree: "B.Tech (AI&DS)",
            year: "2022 - 2026",
            description: "Currently pursuing a Bachelor of Technology in AI & DS with a specialization in Cyber Security at KL University. I have consistently maintained a high academic standing, achieving a commendable CGPA of 8.69 out of 10.00.",
            logo: "download.jpeg"
        },
        {
            school: "KL UNIVERSITY",
            degree: "BBA",
            year: "2023 - 2026",
            description: "Currently pursuing A Bachelor of Business Administration (BBA) at KL University.",
            logo: "download.jpeg"
        }
    ];

    return (
        <section className="education-section">
            <h2>Education</h2>
            <div className="education-list">
                {educationData.map((item, index) => (
                    <div key={index} className="education-item">
                        <img src={require(`../assets/${item.logo}`)} alt={`${item.school} logo`} className="education-logo" />
                        <div className="education-details">
                            <h3>{item.school}</h3>
                            <p><strong>{item.degree}</strong></p>
                            <p>{item.year}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
