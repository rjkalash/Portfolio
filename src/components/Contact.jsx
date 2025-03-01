// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #121212;
  color: #ffffff;
  text-align: center;
  scroll-margin-top: 80px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #00ffcc, #0077ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const ContactForm = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input, textarea {
    padding: 0.5rem;
    border: 1px solid #a0a0a0;
    border-radius: 4px;
    background-color: #1e1e1e;
    color: #ffffff;
  }

  button {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #ffffff;
    color: #121212;
    cursor: pointer;
  }
`;

const SocialLinks = styled.div`
  margin-top: 2rem;

  a {
    margin: 0 1rem;
    color: #ffffff;
    font-size: 1.5rem;
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact</h2>
      <ContactForm
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </ContactForm>
      <SocialLinks>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:your.rajkalashtiwari888@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact;