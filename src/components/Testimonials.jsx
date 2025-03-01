// src/components/Testimonials.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #1e1e1e;
  color: #ffffff;
  text-align: center;
`;

const TestimonialsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background-color: #121212;
  padding: 1rem;
  border-radius: 8px;
  text-align: left;

  p {
    font-size: 1rem;
    color: #a0a0a0;
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'John is an exceptional developer with a keen eye for detail.',
      name: 'Jane Doe',
      role: 'CTO at Tech Corp',
    },
    // Add more testimonials here
  ];

  return (
    <TestimonialsContainer>
      <h2>Testimonials</h2>
      <TestimonialsGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <p>{testimonial.quote}</p>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.role}</p>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};

export default Testimonials;