// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background-color: rgba(18, 18, 18, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00ffcc, #0077ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    color: #a0a0a0;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo>Raj Kalash Tiwari</Logo>
      <NavLinks>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;