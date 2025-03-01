// src/components/Experience.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// src/components/Experience.js
const ExperienceContainer = styled.section`
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

const Timeline = styled(motion.div)`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #ffffff;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -12px;
    background-color: #ffffff;
    border: 4px solid #121212;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  &:nth-child(odd) {
    left: 0;

    &::after {
      left: -12px;
    }
  }

  &:nth-child(even) {
    left: 50%;

    &::after {
      left: -12px;
    }
  }
`;

const ExperienceContent = styled.div`
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #ffffff;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #a0a0a0;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #a0a0a0;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    text-align: left;
  }

  li {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: #a0a0a0;
  }
`;

const Experience = () => {
  const experiences = [
    {
      company: 'Tata Consultancy Services (TCS)',
      role: 'System Engineer',
      duration: 'Nov 2023 – Present',
      location: 'Gandhinagar, Gujarat',
      contributions: [
        'Proficient in **Angular JS** for Front-end Development.',
        'Collaborate cross-functionally for seamless front-end-back-end integration.',
      ],
    },
    {
      company: 'Tata Consultancy Services (TCS)',
      role: 'Intern (Remote)',
      duration: 'Feb 2023 – April 2023',
      location: 'Gandhinagar, Gujarat',
      contributions: [
        'Utilized **React JS, Bootstrap, and CSS** for Front-end enhancements.',
        'Contributed remotely to front-end projects.',
      ],
    },
    {
      company: 'Startup Hq',
      role: 'SDE Intern (Remote)',
      duration: 'June 2022 – July 2022',
      location: 'Andheri, Mumbai',
      contributions: [
        'Worked on an API-based website using **HTML, CSS, and JS** to check weather, location, and horoscope at a given place.',
        'Improved the UI/UX of the website.',
      ],
    },
  ];

  return (
    <ExperienceContainer id="experience">
      <h2>Experience</h2>
      <Timeline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <ExperienceContent>
              <h3>{exp.company}</h3>
              <h4>{exp.role}</h4>
              <p>{exp.duration}</p>
              <p>{exp.location}</p>
              <ul>
                {exp.contributions.map((contribution, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: contribution }} />
                ))}
              </ul>
            </ExperienceContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;