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
      radial-gradient(circle at 80% 20%, rgba(0, 255, 204, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(0, 119, 255, 0.05) 0%, transparent 50%);
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

const SkillsGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCategory = styled(motion.div)`
  margin-bottom: 4rem;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 204, 0.5), transparent);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(0, 255, 204, 0.3);
  }

  h3 {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    margin-bottom: 2rem;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    background: linear-gradient(45deg, #ffffff, #00ffcc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 2px;
      background: linear-gradient(90deg, #00ffcc, #0077ff);
      border-radius: 1px;
    }

    @media (max-width: 768px) {
      letter-spacing: 1px;
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

const SkillCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 255, 204, 0.1), rgba(0, 119, 255, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(0, 255, 204, 0.2);
    border-color: rgba(0, 255, 204, 0.3);

    &::before {
      opacity: 1;
    }

    svg {
      transform: scale(1.1) rotate(5deg);
      filter: drop-shadow(0 0 10px rgba(0, 255, 204, 0.5));
    }

    h4 {
      color: #00ffcc;
    }
    
    .tooltip {
      opacity: 1;
      transform: translateY(0);
    }
  }

  svg {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    color: #ffffff;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
    position: relative;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    text-wrap: wrap;
    text-align: center;
    transition: all 0.3s ease;
    z-index: 2;
    position: relative;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
  
  .skill-level {
    width: 80%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    margin-top: 0.5rem;
    position: relative;
    overflow: hidden;
    z-index: 2;
  }
  
  .skill-progress {
    height: 100%;
    background: linear-gradient(90deg, #00ffcc, #0077ff);
    border-radius: 3px;
    transition: width 0.8s ease-in-out;
  }
  
  .tooltip {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
    width: 90%;
    z-index: 10;
  }
`;

const Skills = () => {
  const programmingLanguages = [
    { name: 'C', icon: <SiC />, level: 85, experience: '3 years experience' },
    { name: 'C++', icon: <SiCplusplus />, level: 80, experience: '3 years experience' },
    { name: 'Java', icon: <FaJava />, level: 75, experience: '2 years experience' },
    { name: 'JavaScript', icon: <SiJavascript />, level: 90, experience: '4 years experience' },
    { name: 'Python', icon: <SiPython />, level: 85, experience: '3 years experience' },
    { name: 'PHP', icon: <SiPhp />, level: 70, experience: '1 year experience' },
    { name: 'HTML', icon: <SiHtml5 />, level: 95, experience: '4 years experience' },
    { name: 'CSS', icon: <SiCss3 />, level: 90, experience: '4 years experience' },
  ];

  const technologiesFrameworks = [
    { name: 'Angular', icon: <SiAngular />, level: 85, experience: '2 years experience' },
    { name: 'React', icon: <SiReact />, level: 90, experience: '3 years experience' },
    { name: 'Pandas', icon: <SiPandas />, level: 80, experience: '2 years experience' },
    { name: 'TensorFlow', icon: <SiTensorflow />, level: 75, experience: '1 year experience' },
    { name: 'Firebase', icon: <SiFirebase />, level: 80, experience: '2 years experience' },
    { name: 'Heroku', icon: <SiHeroku />, level: 85, experience: '2 years experience' },
    { name: 'Flask', icon: <SiFlask />, level: 80, experience: '2 years experience' },
    { name: 'Jupyter Notebook', icon: <SiJupyter />, level: 90, experience: '3 years experience' },
  ];

  const others = [
    { name: 'Git', icon: <SiGit />, level: 90, experience: '4 years experience' },
    { name: 'MySQL', icon: <SiMysql />, level: 85, experience: '3 years experience' },
    { name: 'Google Cloud', icon: <SiGooglecloud />, level: 75, experience: '1 year experience' },
    { name: 'GitHub', icon: <SiGithub />, level: 90, experience: '4 years experience' },
    { name: 'CUDA', icon: <SiNvidia />, level: 70, experience: '1 year experience' },
    { name: 'Machine Learning', icon: <SiTensorflow />, level: 80, experience: '2 years experience' },
    { name: 'Deep Learning', icon: <SiTensorflow />, level: 75, experience: '1 year experience' },
    { name: 'GPU Computation', icon: <SiNvidia />, level: 70, experience: '1 year experience' },
  ];

  return (
    <SkillsContainer id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <SkillsGrid
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        <SkillCategory
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Programming Languages</h3>
          <SkillCardsContainer>
            {programmingLanguages.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.icon}
                <h4>{skill.name}</h4>
                <div className="skill-level">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="tooltip">{skill.experience}</div>
              </SkillCard>
            ))}
          </SkillCardsContainer>
        </SkillCategory>

        <SkillCategory
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Technologies & Frameworks</h3>
          <SkillCardsContainer>
            {technologiesFrameworks.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.icon}
                <h4>{skill.name}</h4>
                <div className="skill-level">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="tooltip">{skill.experience}</div>
              </SkillCard>
            ))}
          </SkillCardsContainer>
        </SkillCategory>

        <SkillCategory
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Others</h3>
          <SkillCardsContainer>
            {others.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.icon}
                <h4>{skill.name}</h4>
                <div className="skill-level">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="tooltip">{skill.experience}</div>
              </SkillCard>
            ))}
          </SkillCardsContainer>
        </SkillCategory>
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;