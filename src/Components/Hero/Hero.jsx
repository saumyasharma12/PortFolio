// src/HomePage.js
import React, { useState, useEffect } from "react";
import "./Hero.css";
import homeimage from "../../assets/image/about.jpeg";
import cvFile from "../../assets/CV/cv.pdf";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Hero() {
  const headings = [
    "Full Stack Developer",
    "Web Developer",
    "MERN Stack Developer",
    "Backend Developer",
    "Coder"
  ];

  const typeSpeed = 100;
  const backSpeed = 80;
  const backDelay = 1000;

  const [headingIndex, setHeadingIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [currentHeading, setCurrentHeading] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && letterIndex < headings[headingIndex].length) {
        setCurrentHeading(currentHeading + headings[headingIndex][letterIndex]);
        setLetterIndex(letterIndex + 1);
      } else if (isDeleting && letterIndex > 0) {
        setCurrentHeading(currentHeading.slice(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
      } else if (!isDeleting && letterIndex === headings[headingIndex].length) {
        setTimeout(() => setIsDeleting(true), backDelay);
      } else if (isDeleting && letterIndex === 0) {
        setIsDeleting(false);
        setHeadingIndex((headingIndex + 1) % headings.length);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? backSpeed : typeSpeed);
    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, headingIndex, currentHeading, headings, backSpeed, typeSpeed, backDelay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 500); // Blink cursor every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'cv.pdf';
    link.click();
  };

  return (
    <div className="home-page">
      <div className="intro">
        <h4>Hi, Myself</h4>
        <h1>Saumya Sharma</h1>
        <h1>
          I'm a <span className="heading">{currentHeading}{isCursorVisible && '|'}</span>
        </h1>
        <p>
          Detail-oriented and motivated computer science graduate with a strong
          passion for full stack development. Skilled in problem-solving, agile
          methodologies, and effective communication. Eager to leverage
          expertise in web development, databases, and software design to
          contribute to innovative and user-friendly applications while learning
          from experienced developers.
        </p>
        <div className="social-icons">
          <a href="https://github.com/saumyasharma12" target="_blank" rel="noopener noreferrer">
            <FaGithub size="2em" />
          </a>
          <a href="https://www.linkedin.com/in/saumyaaa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="2em" />
          </a>
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          </a>
        </div>
        <div className="but-button">
          <button className="cv-button" onClick={downloadCV}>Download CV</button>
        </div>
      </div>
      <div className="profile-image">
        <img src={homeimage} alt="Profile" />
      </div>
    </div>
  );
}

export default Hero;
