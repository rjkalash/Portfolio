// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
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

const AboutContent = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 4rem;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 204, 0.5), transparent);
  }

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 0 1rem;
    gap: 2rem;
  }
`;

const ProfileImage = styled(motion.img)`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  object-fit: cover;
  border: 3px solid rgba(0, 255, 204, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(0, 255, 204, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    background: linear-gradient(45deg, #00ffcc, #0077ff, #ff6b6b);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.08);
    border-color: rgba(0, 255, 204, 0.6);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(0, 255, 204, 0.4);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const AboutText = styled(motion.div)`
  text-align: justify;
  text-justify: inter-word;
  width: 100%;

  p {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    line-height: 1.8;
    color: #b0b0b0;
    max-width: 100%;
    margin: 0 0 2rem;
    position: relative;
    z-index: 2;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  .highlight {
    color: #ffffff;
    font-weight: 500;
    background: linear-gradient(45deg, #00ffcc, #0077ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0, 255, 204, 0.5), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    &:hover::after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    text-align: left;
    
    p {
      line-height: 1.6;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ProfileImage src="data:image/jpeg;base64,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" alt="Raj Kalash Tiwari" />
        <AboutText>
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="highlight">Raj Kalash Tiwari</span>, a passionate <span className="highlight">Full Stack Developer</span> with expertise in building scalable web applications.
          </p>
          
          <p>
            I specialize in creating <strong>responsive user interfaces</strong> and <strong>robust backend systems</strong> that deliver exceptional user experiences. My goal is to combine technical excellence with creative problem-solving.
          </p>
          
          <div className="key-points">
            <h3>🚀 Current Role</h3>
            <p>
              <strong>System Engineer</strong> at <span className="highlight">Tata Consultancy Services (TCS)</span>, specializing in <span className="highlight">Angular JS</span> frontend development and cross-functional collaboration.
            </p>
          </div>

          <div className="key-points">
            <h3>💻 Technical Expertise</h3>
            <p>
              • <strong>Frontend:</strong> <span className="highlight">React, Angular, HTML5, CSS3, JavaScript</span><br/>
              • <strong>Backend:</strong> <span className="highlight">Node.js, Flask, Python</span><br/>
              • <strong>Machine Learning:</strong> <span className="highlight">OpenCV, Pandas, Scikit Learn</span><br/>
              • <strong>Cloud:</strong> <span className="highlight">Heroku, AWS</span>
            </p>
          </div>

          <div className="key-points">
            <h3>🎯 Notable Projects</h3>
            <p>
              Built innovative solutions including <span className="highlight">Image Recognition Systems</span> and <span className="highlight">House Price Prediction Models</span> using cutting-edge ML technologies.
            </p>
          </div>

          <p>
            <strong>Passionate about solving real-world problems through technology</strong> and continuously learning in this ever-evolving field. Always exploring new tech trends and contributing to open-source projects.
          </p>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;