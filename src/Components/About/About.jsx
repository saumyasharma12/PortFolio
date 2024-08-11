import React from "react";
import "./About.css";
import aboutImage from "../../assets/image/home.jpeg";

function About() {

    
  return (
    <div className="about-page" id="about">
      <div className="about-image">
        <img src={aboutImage} alt="About Saumya Sharma" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I am Saumya Sharma, a full stack developer with a passion for building
          web applications that are both functional and user-friendly. With a
          background in computer science, I have developed a strong foundation
          in programming and problem-solving skills.
        </p>
        <p>
          I am experienced in various technologies, including React, Node.js,
          and MongoDB, and I am always eager to learn and adopt new tools and
          frameworks. My goal is to create software solutions that make a
          positive impact on users' lives and contribute to the success of
          businesses.
        </p>

        <div className="hire-me-container">
          <a 
            href="https://www.linkedin.com/in/saumyaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hire-me-link"
          >
            <button className="hire-me-button">
              Hire Me
            </button>
          </a>
        </div> 
      </div>
    </div>
  );
}

export default About;
