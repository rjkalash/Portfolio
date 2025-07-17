// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
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
      radial-gradient(circle at 30% 80%, rgba(0, 255, 204, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 20%, rgba(0, 119, 255, 0.08) 0%, transparent 50%);
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

const ContactForm = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
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

  input, textarea {
    padding: 1rem 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    color: #ffffff;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;

    &::placeholder {
      color: #a0a0a0;
    }

    &:focus {
      border-color: rgba(0, 255, 204, 0.5);
      background: rgba(255, 255, 255, 0.08);
      box-shadow:
        0 0 20px rgba(0, 255, 204, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }

    &:hover {
      border-color: rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.05);
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
    font-family: inherit;
  }

  button {
    padding: 1rem 2rem;
    border: none;
    border-radius: 50px;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    color: white;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
    position: relative;
    overflow: hidden;

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

    &:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 12px 35px rgba(79, 172, 254, 0.6);

      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(-1px) scale(0.98);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 0 1rem;
  }
`;

const SocialLinks = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    color: #ffffff;
    font-size: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

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
      transform: translateY(-5px) scale(1.1);
      border-color: rgba(0, 255, 204, 0.5);
      box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(0, 255, 204, 0.3);
      color: #00ffcc;

      &::before {
        opacity: 1;
      }
    }

    &:active {
      transform: translateY(-3px) scale(1.05);
    }

    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
      font-size: 1.2rem;
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact</h2>
      <ContactForm
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </ContactForm>
      <SocialLinks
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://github.com/rjkalash"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-github"></i>
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/rajkalash"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-linkedin"></i>
        </motion.a>
        <motion.a
          href="mailto:rajkalashtiwari888@gmail.com"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-envelope"></i>
        </motion.a>
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact;