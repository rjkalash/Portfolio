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
        <ProfileImage src="https://iisb.co.in/wp-content/uploads/2022/08/vamshidharidas_pp.jpeg" alt="Vamshidhari Das" />
        <AboutText>
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="highlight">Vamshidhari Das</span>, a passionate and results-driven <span className="highlight">Full Stack Developer</span> with expertise in building scalable and efficient web applications. I have hands-on experience in both frontend and backend technologies, including <span className="highlight">React, Angular, Flask, and Node.js</span>.
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