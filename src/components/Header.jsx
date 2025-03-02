// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

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
  font-weight: 400;
  background: linear-gradient(45deg, #00ffcc, #0077ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 70%;
    background-color: rgba(18, 18, 18, 0.9);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.3s ease;
    z-index: 1001;
  }

  a {
    color: #a0a0a0;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 1002;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo>Raj Kalash Tiwari</Logo>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavLinks isOpen={isOpen}>
        <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
          Projects
        </Link>
        <Link to="experience" smooth={true} duration={500} onClick={toggleMenu}>
          Experience
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
          Contact
        </Link>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;