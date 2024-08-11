// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
      <p>&copy; Copyright 2024 <span className='saumya'>Saumya Sharma</span>. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
