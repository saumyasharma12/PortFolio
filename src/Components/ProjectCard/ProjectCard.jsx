// ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, name, description, technologies, githubLink }) => {
    return (
        <div className="project-card">
            <img src={image} alt={name} className="project-image" />
            <div className="project-details">
                <h3>{name}</h3>
                <p>{description}</p>
                <p><strong>Technologies:</strong> {technologies}</p>
                <a href={githubLink} className="view-button" target="_blank" rel="noopener noreferrer">View</a>
            </div>
        </div>
    );
};

export default ProjectCard;
