// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  text-align: center;
  position: relative;
  margin-top: 4rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 204, 0.5), transparent);
  }

  p {
    font-size: 1rem;
    color: #a0a0a0;
    margin: 0;
    position: relative;
    z-index: 2;
    
    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 2px;
      background: linear-gradient(90deg, #00ffcc, #0077ff);
      border-radius: 1px;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p>&copy; {new Date().getFullYear()} Raj Kalash Tiwari. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;