// src/NavBar.js
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/image/signature.png"

function Navbar() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);

    // Scroll to the section when an item is clicked
    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-middle">
        <ul className="nav-links">
          <li className={`nav-item ${activeItem === "home" ? "active" : ""}`}>
            <a href="#home" onClick={() => handleItemClick("home")}>
              Home
            </a>
          </li>
          <li className={`nav-item ${activeItem === "about" ? "active" : ""}`}>
            <a href="#about" onClick={() => handleItemClick("about")}>
              About
            </a>
          </li>
          <li className={`nav-item ${activeItem === "skills" ? "active" : ""}`}>
            <a href="#skills" onClick={() => handleItemClick("skills")}>
              Skills
            </a>
          </li>
          <li
            className={`nav-item ${activeItem === "projects" ? "active" : ""}`}
          >
            <a href="#projects" onClick={() => handleItemClick("projects")}>
              Projects
            </a>
          </li>
          
        </ul>
      </div>
      <div className="navbar-right">
        <button className="contact-button" onClick={() => handleItemClick("contact")}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
