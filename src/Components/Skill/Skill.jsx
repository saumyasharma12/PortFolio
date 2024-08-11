// src/Skills.js
import React from 'react';
import htmlImage from '../../assets/skills/html.png';
import cssImage from '../../assets/skills/css.png';
import jsImage from '../../assets/skills/js.png';
import javaImage from '../../assets/skills/java.png';
import reactImage from '../../assets/skills/react.png';
import nodeImage from '../../assets/skills/node.png';
import mongoImage from '../../assets/skills/mongo.png';
import expressImage from '../../assets/skills/express.png';
import sqlImage from '../../assets/skills/sql.jfif';
import './Skill.css'; // Make sure to create this CSS file

const skillsData = [
  { id: 1, imgSrc: htmlImage, title: 'HTML', description: 'Proficient in creating structured web content using HTML5.' },
  { id: 2, imgSrc: cssImage, title: 'CSS', description: 'Experienced in designing responsive and visually appealing web pages with CSS3.' },
  { id: 3, imgSrc: jsImage, title: 'JavaScript', description: 'Skilled in adding interactivity to web pages using JavaScript.' },
  { id: 4, imgSrc: javaImage, title: 'Java', description: 'Knowledgeable in building backend applications and Android apps using Java.' },
  { id: 5, imgSrc: reactImage, title: 'React', description: 'Experienced in building single-page applications using React.js.' },
  { id: 6, imgSrc: nodeImage, title: 'Node.js', description: 'Proficient in creating server-side applications with Node.js.' },
  { id: 7, imgSrc: mongoImage, title: 'MongoDB', description: 'Skilled in managing NoSQL databases using MongoDB.' },
  { id: 8, imgSrc: expressImage, title: 'Express.js', description: 'Experienced in building RESTful APIs with Express.js.' },
  { id: 9, imgSrc: sqlImage, title: 'SQL', description: 'Knowledgeable in managing relational databases using SQL.' },
];

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h1 className='skill-heading'>My Skills</h1>
      <div className="skills-grid">
        {skillsData.map(skill => (
          <div key={skill.id} className="skill-item">
            <img src={skill.imgSrc} alt={skill.title} />
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
