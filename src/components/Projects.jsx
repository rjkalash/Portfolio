// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// src/components/Projects.js
const ProjectsContainer = styled.section`
  padding: 6rem 2rem;
  background: transparent;
  color: #ffffff;
  text-align: center;
  scroll-margin-top: 80px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(0, 255, 204, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(0, 119, 255, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 3rem;
    background: linear-gradient(45deg, #00ffcc, #0077ff, #ff6b6b);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 800;
    animation: gradientShift 3s ease-in-out infinite;
    position: relative;
    z-index: 2;

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @media (max-width: 768px) {
      letter-spacing: 2px;
    }
  }
`;
const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 204, 0.5), transparent);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 255, 204, 0.05), rgba(0, 119, 255, 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(0, 255, 204, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(0, 255, 204, 0.3);

    &::after {
      opacity: 1;
    }
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #ffffff;
    font-weight: 600;
    background: linear-gradient(45deg, #ffffff, #00ffcc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    z-index: 2;
  }

  p {
    font-size: 1rem;
    color: #a0a0a0;
    margin-bottom: 1rem;
    line-height: 1.6;
    position: relative;
    z-index: 2;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 2;

    li {
      color: #a0a0a0;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      position: relative;

      &::before {
        content: '▶';
        position: absolute;
        left: 0;
        color: #00ffcc;
        font-size: 0.8rem;
      }
    }
  }

  .technologies {
    font-size: 0.9rem;
    color: #00ffcc;
    margin-bottom: 1.5rem;
    font-weight: 500;
    position: relative;
    z-index: 2;

    strong {
      color: #ffffff;
    }
  }

  .links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    a {
      color: #ffffff;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      padding: 12px 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 25px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
      }

      &:hover {
        background: rgba(0, 255, 204, 0.1);
        border-color: rgba(0, 255, 204, 0.5);
        color: #00ffcc;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 255, 204, 0.3);

        &::before {
          left: 100%;
        }
      }

      &:active {
        transform: translateY(0);
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
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <ProjectsGrid
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="technologies"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <strong>Technologies:</strong> {project.technologies}
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {project.description.map((desc, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
              ))}
            </motion.ul>
            <motion.div
              className="links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              )}
            </motion.div>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;