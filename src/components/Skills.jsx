// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiReact,
  SiPandas,
  SiTensorflow,
  SiFirebase,
  SiHeroku,
  SiFlask,
  SiJupyter,
  SiGit,
  SiMysql,
  SiGooglecloud,
  SiGithub,
  SiNvidia,
} from 'react-icons/si';

const SkillsContainer = styled.section`
   padding: 4rem 2rem;
  background-color: #121212;
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

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCategory = styled.div`
  margin-bottom: 3rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const SkillCard = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: #1e1e1e;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;


  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #ffffff;
  }

  p {
    font-size: 0.9rem;
    color: #a0a0a0;
  }
  h2 {
    font-size: 2.5rem; // Increase the font size
    margin-bottom: 2rem; // Add more space below the heading
    font-weight: bold; // Make the text bold
    color: #ffffff; // Ensure the color is white
    text-transform: uppercase; // Optional: Uppercase the text
    letter-spacing: 2px; // Optional: Add letter spacing for a modern look
  }
`;

const Skills = () => {
  const programmingLanguages = [
    { name: 'C', icon: <SiC /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Java', icon: <SiJavascript /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'PHP', icon: <SiPhp /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
  ];

  const technologiesFrameworks = [
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Heroku', icon: <SiHeroku /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'Jupyter Notebook', icon: <SiJupyter /> },
  ];

  const others = [
    { name: 'Git', icon: <SiGit /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Google Cloud', icon: <SiGooglecloud /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'CUDA', icon: <SiNvidia /> },
    { name: 'Machine Learning', icon: <SiTensorflow /> },
    { name: 'Deep Learning', icon: <SiTensorflow /> },
    { name: 'GPU Computation', icon: <SiNvidia /> },
  ];

  return (
    <SkillsContainer id="skills">
      <h2>Skills</h2>
      <SkillsGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SkillCategory>
          <h3>Programming Languages</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {programmingLanguages.map((skill, index) => (
              <SkillCard key={index}>
                {skill.icon}
                <h4>{skill.name}</h4>
              </SkillCard>
            ))}
          </div>
        </SkillCategory>

        <SkillCategory>
          <h3>Technologies & Frameworks</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {technologiesFrameworks.map((skill, index) => (
              <SkillCard key={index}>
                {skill.icon}
                <h4>{skill.name}</h4>
              </SkillCard>
            ))}
          </div>
        </SkillCategory>

        <SkillCategory>
          <h3>Others</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {others.map((skill, index) => (
              <SkillCard key={index}>
                {skill.icon}
                <h4>{skill.name}</h4>
              </SkillCard>
            ))}
          </div>
        </SkillCategory>
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;