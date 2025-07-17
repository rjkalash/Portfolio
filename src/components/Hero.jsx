// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 30% 70%, rgba(0, 255, 204, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(0, 119, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, rgba(0, 255, 204, 0.1), rgba(0, 119, 255, 0.1));
    border-radius: 50%;
    top: 20%;
    right: 10%;
    animation: float 6s ease-in-out infinite;
    pointer-events: none;
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 2rem;

  h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    background: linear-gradient(45deg, #00ffcc, #0077ff, #ff6b6b, #00ffcc);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 4s ease-in-out infinite;
    margin-bottom: 0.5rem;
    letter-spacing: 2px;
    line-height: 1.1;
    text-shadow: 0 0 30px rgba(0, 255, 204, 0.3);
  }

  .subtitle {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    color: #00ffcc;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    opacity: 0.9;
  }
  
  .subtitle-secondary {
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    color: #0077ff;
    font-weight: 500;
    letter-spacing: 0.8px;
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    color: #b0b0b0;
    font-weight: 300;
    letter-spacing: 0.5px;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    opacity: 0.9;
    
    strong {
      color: #00ffcc;
      font-weight: 600;
    }
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    
    h1 {
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
    }
    
    .subtitle {
      letter-spacing: 0.5px;
      margin-bottom: 1rem;
    }
    
    p {
      letter-spacing: 0.3px;
      margin-bottom: 2rem;
    }
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const HeroButton = styled(motion.button)`
  padding: 14px 32px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &.primary {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 12px 35px rgba(79, 172, 254, 0.6);
    }
  }

  &.secondary {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-3px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    }
  }

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

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.4, 0, 0.2, 1],
          staggerChildren: 0.2
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Raj Kalash Tiwari
        </motion.h1>
        
        <motion.div
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Full Stack Developer & AI Enthusiast
        </motion.div>
        
        <motion.div
          className="subtitle-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Turning Ideas into Reality
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Passionate about building scalable applications with <strong>React</strong>, <strong>Angular</strong>, and modern web technologies.
          Specializing in clean code and innovative solutions.
        </motion.p>
        
        <HeroButtons
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <HeroButton
            className="primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </HeroButton>
          <HeroButton
            className="secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </HeroButton>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;