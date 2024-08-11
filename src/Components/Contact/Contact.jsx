// src/ContactMe.js
import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const ContactMe = () => {
  return (
    <div id="contact" className="contact-container">
      <h3 className="get-in-touch">Get in Touch</h3>
      <h1 className="contact-me">Contact Me</h1>
      <div className="contact-box">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:saumya.k99sharma@gmail.com" className="contact-link">
            saumya.k99sharma@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/saumyaaa"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/saumyaaa
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
