import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
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

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const SkillsGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCategory = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #1e1e1e;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const SkillCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  padding: 1rem; // Add padding to prevent cards from touching borders

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 cards in a row for mobile
    gap: 1rem; // Reduce gap for mobile
    padding: 0.5rem; // Reduce padding for mobile
  }
`;

const SkillCard = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: #121212;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px; // Fixed height for all cards

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 2rem; // Reduce icon size for mobile
    }
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #ffffff;
    text-wrap: wrap; // Ensure text wraps if it's too long
    text-align: center;

    @media (max-width: 768px) {
      font-size: 0.9rem; // Reduce text size for mobile
    }
  }
`;

const Skills = () => {
  const programmingLanguages = [
    { name: 'C', icon: <SiC /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Java', icon: <FaJava /> },
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
          <SkillCardsContainer>
            {programmingLanguages.map((skill, index) => (
              <SkillCard key={index}>
                {skill.icon}
                <h4>{skill.name}</h4>
              </SkillCard>
            ))}
          </SkillCardsContainer>
        </SkillCategory>

        <SkillCategory>
          <h3>Technologies & Frameworks</h3>
          <SkillCardsContainer>
            {technologiesFrameworks.map((skill, index) => (
              <SkillCard key={index}>
                {skill.icon}
                <h4>{skill.name}</h4>
              </SkillCard>
            ))}
          </SkillCardsContainer>
        </SkillCategory>

        <SkillCategory>
          <h3>Others</h3>
          <SkillCardsContainer>
            {others.map((skill, index) => (
              <SkillCard key={index}>
                {skill.icon}
                <h4>{skill.name}</h4>
              </SkillCard>
            ))}
          </SkillCardsContainer>
        </SkillCategory>
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;