// src/components/Testimonials.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsContainer = styled.section`
  padding: 6rem 2rem;
  background: transparent;
  color: #ffffff;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 80% 20%, rgba(0, 255, 204, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(0, 119, 255, 0.08) 0%, transparent 50%);
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

const TestimonialsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: left;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 204, 0.5), transparent);
    border-radius: 20px 20px 0 0;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(0, 255, 204, 0.3);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.4),
      0 0 20px rgba(0, 255, 204, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .quote {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    color: #b0b0b0;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-style: italic;
    position: relative;

    &::before {
      content: '"';
      font-size: 3rem;
      color: rgba(0, 255, 204, 0.3);
      position: absolute;
      top: -10px;
      left: -10px;
      font-family: serif;
    }

    &::after {
      content: '"';
      font-size: 3rem;
      color: rgba(0, 255, 204, 0.3);
      position: absolute;
      bottom: -30px;
      right: 0;
      font-family: serif;
    }
  }

  h3 {
    font-size: clamp(1.1rem, 2.5vw, 1.3rem);
    margin-bottom: 0.5rem;
    color: #ffffff;
    font-weight: 600;
    background: linear-gradient(45deg, #00ffcc, #0077ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .role {
    font-size: clamp(0.9rem, 2vw, 1rem);
    color: #a0a0a0;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Raj is an exceptional developer with a keen eye for detail and innovative problem-solving skills. His work on our React applications was outstanding.',
      name: 'Jane Doe',
      role: 'CTO at Tech Corp',
    },
    {
      quote: 'Working with Raj was a pleasure. His expertise in full-stack development and dedication to quality made our project a huge success.',
      name: 'John Smith',
      role: 'Project Manager at Digital Solutions',
    },
    {
      quote: 'Raj delivered exceptional results on time and exceeded our expectations. His technical skills and professionalism are top-notch.',
      name: 'Sarah Johnson',
      role: 'Lead Developer at Innovation Labs',
    },
  ];

  return (
    <TestimonialsContainer>
      <h2>Testimonials</h2>
      <TestimonialsGrid
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -8 }}
          >
            <p className="quote">{testimonial.quote}</p>
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};

export default Testimonials;