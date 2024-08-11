// ProjectSection.jsx
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Project.css';

import talkwaveImage from '../../assets/project/Talkwave.jpeg';
import plagmasageImage from '../../assets/project/plagma.jpeg';
import ecommerceImage from '../../assets/project/E-com.png';
import realestateImage from '../../assets/project/realstate.png';
import netflixImage from '../../assets/project/netflix.png';
import newsappImage from '../../assets/project/news.png';
import passwordgenerater from '../../assets/project/password.png'

const projects = [
    {
        image: talkwaveImage,
        name: 'TalkWave',
        description: 'A chat application.',
        technologies: 'MERN Stack React , NodeJs , ExpressJs, Socket.io, MongoDB',
        githubLink: 'https://github.com/saumyasharma12/Talkwave'
    },
    {
        image: plagmasageImage,
        name: 'PlagmaSage',
        description: 'A blood donation website.',
        technologies: 'MERN Stack React , NodeJs , ExpressJs, Socket.io, MongoDB',
        githubLink: 'https://github.com/sumit-mall/PlasmaSage'
    },
    
    {
        image: realestateImage,
        name: 'Real Estate',
        description: 'A real estate application.',
        technologies: 'MERN Stack React , NodeJs , ExpressJs, Socket.io, MongoDB',
        githubLink: 'https://github.com/username/realestate'
    },
    {
      image: newsappImage,
      name: 'News App',
      description: 'A news application.',
      technologies: 'React.js, Redux, NewsAPI',
      githubLink: 'https://github.com/saumyasharma12/NewPotal'
  },
    {
      image: ecommerceImage,
      name: 'E-commerce',
      description: 'An e-commerce platform.',
      technologies: 'Html , Css , JavaScript',
      githubLink: 'https://github.com/saumyasharma12/E-commersWebsite'
  },
  {
    image: passwordgenerater,
        name: 'Password Generater',
        description: 'Password Generater application.',
        technologies: 'Html , Css , JavaScript',
        githubLink: 'https://github.com/saumyasharma12/PasswordGenerater'
  },
    {
        image: netflixImage,
        name: 'Netflix Clone',
        description: 'A Netflix clone application.',
        technologies: 'Html , CSS',
        githubLink: 'https://github.com/username/netflix'
    }
    
];

const ProjectSection = () => {
  return (
    <div className="project-section" id='projects'>
        <h2 className="section-heading">My Projects</h2>
        <div className="projects-container">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    </div>
);
};
export default ProjectSection;
