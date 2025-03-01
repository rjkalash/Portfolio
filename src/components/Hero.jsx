// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1e1e1e, #121212);
  color: #ffffff;
  text-align: center;
`;

const HeroContent = styled(motion.div)`

  h1 {
    font-size: 3rem;
    background: linear-gradient(45deg, #00ffcc, #0077ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.5rem;
    color: #a0a0a0;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Raj Kalash Tiwari</h1>
        <p>Building Scalable Web Solutions</p>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;