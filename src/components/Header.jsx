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
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    pointer-events: none;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #00ffcc, #0077ff, #ff6b6b);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease-in-out infinite;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 10px rgba(0, 255, 204, 0.3));
  }
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
    background: rgba(18, 18, 18, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1001;
  }

  a {
    position: relative;
    color: #a0a0a0;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    letter-spacing: 0.5px;

    &::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #00ffcc, #0077ff);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      color: #ffffff;
      transform: translateY(-2px);
      
      &::before {
        width: 80%;
      }
      
      &::after {
        opacity: 1;
      }
    }

    &.active {
      color: #00ffcc;
      
      &::before {
        width: 80%;
      }
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin: 1rem 0;
      padding: 1rem 2rem;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 1002;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 255, 204, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    transition: all 0.3s ease;
  }

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