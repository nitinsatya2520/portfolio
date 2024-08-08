// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "This is the best developer I have ever worked with!",
    author: "John Doe",
  },
  {
    quote: "Amazing work, delivered on time and beyond expectations.",
    author: "Jane Smith",
  },
  {
    quote: "Very professional and skilled in React and JavaScript.",
    author: "Mike Johnson",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
