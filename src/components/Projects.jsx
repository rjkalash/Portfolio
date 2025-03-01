// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// src/components/Projects.js
const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #1e1e1e;
  color: #ffffff;
  text-align: center;
  scroll-margin-top: 80px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #00ffcc, #0077ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background-color: #121212;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  p {
    font-size: 1rem;
    color: #a0a0a0;
    margin-bottom: 1rem;
  }

  .technologies {
    font-size: 0.9rem;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  .links {
    display: flex;
    gap: 1rem;
    justify-content: center;

    a {
      color: #ffffff;
      text-decoration: none;
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
      border: 1px solid #ffffff;
      border-radius: 4px;
      transition: background-color 0.3s ease, color 0.3s ease;

      &:hover {
        background-color: #ffffff;
        color: #121212;
      }
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Image Recognizer',
      technologies: 'HTML, CSS, JS, Flask, Python',
      description: [
        'Created a classification project using **OpenCV, Cv2, and Pandas**.',
        'It has functionality for recognizing images of celebrities using **SVM Model** and **Flask API**.',
      ],
      github: 'https://github.com/rjkalash/Image-Recognizer.git',
      demo: null,
    },
    {
      title: 'House Price Prediction',
      technologies: 'Scikit Learn, Flask',
      description: [
        'Built a regression project using **Pandas, Numpy, Scikit Learn**.',
        'It predicts the price of houses in Bangalore based on house details using **LR Model** and **Flask API**.',
      ],
      github: 'https://github.com/rjkalash/house-price-prediction.git',
      demo: null,
    },
    {
      title: 'Student Placement Predictor',
      technologies: 'Heroku, Flask, JS, CSS, HTML',
      description: [
        'Created a basic ML project using **Pandas, Scikit Learn, Numpy**.',
        'Uses **Heroku API** to fetch data based on given CGPA, IQ, and Profile Score.',
      ],
      github: 'https://github.com/rjkalash/student_placement_fun',
      demo: 'https://rjkalash.github.io/student_placement_fun/',
    },
    {
      title: 'Weather Today',
      technologies: 'HTML, CSS, JS',
      description: [
        'Implemented **Weather API** integration to automatically retrieve real-time weather data based on user location.',
        'Enhanced user experience by providing accurate weather forecasts.',
      ],
      github: 'https://github.com/rjkalash/weather',
      demo: 'https://rjkalash.github.io/weather',
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      <ProjectsGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p className="technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <ul>
              {project.description.map((desc, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
              ))}
            </ul>
            <div className="links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;