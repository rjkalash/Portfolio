// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #1e1e1e;
  color: #ffffff;
  text-align: center;
  scroll-margin-top: 80px; // Add space for the fixed header
`;

const AboutContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const AboutText = styled.div`
  text-align: justify; // Justify the text
  text-justify: inter-word; // Improve spacing between words

  h2 {
   
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #00ffcc, #0077ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center; // Center the heading
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #a0a0a0;
    max-width: 800px;
    margin: 0 auto 1.5rem; // Add spacing between paragraphs
  }

  .highlight {
    color: #ffffff;
    font-weight: 300;
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
            Hi, I'm <span className="highlight">Raj Kalash Tiwari</span>, a passionate and results-driven <span className="highlight">Full Stack Developer</span> with expertise in building scalable and efficient web applications. I have hands-on experience in both frontend and backend technologies, including <span className="highlight">React, Angular, Flask, and Node.js</span>.
          </p>
          <p>
            Currently, I work as a <span className="highlight">System Engineer</span> at <span className="highlight">Tata Consultancy Services (TCS)</span>, where I specialize in <span className="highlight">Angular JS</span> for frontend development and collaborate cross-functionally to ensure seamless integration between frontend and backend systems.
          </p>
          <p>
            I have a strong foundation in <span className="highlight">Machine Learning</span> and have worked on projects like <span className="highlight">Image Recognizer</span> and <span className="highlight">House Price Prediction</span>, leveraging tools like <span className="highlight">OpenCV, Pandas, Scikit Learn, and Flask</span>. I'm also proficient in <span className="highlight">Python, JavaScript, HTML, CSS</span>, and cloud platforms like <span className="highlight">Heroku</span>.
          </p>
          <p>
            I'm passionate about solving real-world problems through technology and continuously strive to learn and grow in this ever-evolving field. When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or working on personal projects to enhance my skills.
          </p>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;