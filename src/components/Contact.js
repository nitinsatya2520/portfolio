import React, { useState } from 'react';
import './Contact.css';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import ntin from '../assets/Pi7_Passport_Photo (1).jpg'; // Adjust the path as necessary
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_6qcroer',    // Replace with your Service ID
      'template_71gn4o5',   // Replace with your Template ID
      formData,
      'hZyjprULy72195Qlg'  // Replace with your User ID
    ).then((result) => {
      console.log('Email successfully sent!', result.text);
    }, (error) => {
      console.log('Failed to send email.', error.text);
    });

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <section id="contact" className="my-40 align-center max-w-5xl mx-auto p-3">
        <h2 className="text-5xl font-bold text-emerald-500 text-center">Contact</h2>
        
        <div className="flex gap-5 justify-center my-10">
          <a href="https://www.instagram.com/nitin_satya_k/" rel="noopener noreferrer" target="_blank" className="contact-link">
            <FaInstagram className="icon" />
            <span className="ml-2 font-bold">Instagram:</span> @nitin_satya_k
          </a>
          <a href="https://twitter.com/Nitin83559676" rel="noopener noreferrer" target="_blank" className="contact-link">
            <FaTwitter className="icon" />
            <span className="ml-2 font-bold">Twitter:</span> @nitin
          </a>
          <a href="https://www.linkedin.com/in/kadavakollu-nitin-satya-280397249" rel="noopener noreferrer" target="_blank" className="contact-link">
            <FaLinkedin className="icon" />
            <span className="ml-2 font-bold">LinkedIn:</span> @KADAVAKOLLU_NITIN_SATYA
          </a>
          <a href="https://github.com/nitinsatya2520" rel="noopener noreferrer" target="_blank" className="contact-link">
            <FaGithub className="icon" />
            <span className="ml-2 font-bold">GitHub:</span> @nitinsatya2520
          </a>
        </div>

        <div id="contact">
          <h2>Contact Us</h2>
          <p>Please fill out the form below to get in touch with us.</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
          <div className="contact-details">
            <p>For further inquiries, you can also reach us at:</p>
            <p>Email: <a href="mailto:nitinsatya656@gmail.com">nitinsatya656@gmail.com</a></p>
            <p>Phone: <a href="tel:+918919741565">+918919741565</a></p>
            <img src={ntin} alt="Profile" className="profile-im" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
