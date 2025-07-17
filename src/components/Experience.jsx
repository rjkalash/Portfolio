import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.section`
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
      radial-gradient(circle at 40% 20%, rgba(0, 255, 204, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 60% 80%, rgba(0, 119, 255, 0.08) 0%, transparent 50%);
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

const Timeline = styled(motion.div)`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 0;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background: linear-gradient(180deg, #00ffcc, #0077ff, #ff6b6b);
    top: 0;
    bottom: 0;
    left: 20px;
    margin-left: -2px;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0, 255, 204, 0.3);

    @media (min-width: 768px) {
      left: 50%;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px 10px 70px;
  position: relative;
  background-color: inherit;
  width: 100%;
  text-align: left;

  @media (min-width: 768px) {
    width: 50%;
    padding: 10px 40px;

    &:nth-child(odd) {
      left: 0;
      text-align: right;

      &::after {
        left: -15px;
      }
    }

    &:nth-child(even) {
      left: 50%;
      text-align: left;

      &::after {
        left: -15px;
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #00ffcc, #0077ff);
    border: 3px solid rgba(18, 18, 18, 0.9);
    top: 20px;
    border-radius: 50%;
    z-index: 3;
    left: 8px;
    box-shadow:
      0 0 15px rgba(0, 255, 204, 0.5),
      inset 0 2px 4px rgba(255, 255, 255, 0.2);

    @media (min-width: 768px) {
      left: auto;
      right: -15px;
    }
  }
`;

const ExperienceContent = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 204, 0.5), transparent);
    border-radius: 16px 16px 0 0;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 204, 0.3);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.4),
      0 0 20px rgba(0, 255, 204, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  h3 {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    margin-bottom: 0.5rem;
    color: #ffffff;
    font-weight: 700;
    background: linear-gradient(45deg, #00ffcc, #0077ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h4 {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    margin-bottom: 0.5rem;
    color: #b0b0b0;
    font-weight: 500;
  }

  p {
    font-size: clamp(0.9rem, 2vw, 1rem);
    margin-bottom: 0.5rem;
    color: #a0a0a0;
    line-height: 1.5;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 1rem;
  }

  li {
    font-size: clamp(0.85rem, 2vw, 0.95rem);
    margin-bottom: 0.8rem;
    color: #b0b0b0;
    line-height: 1.6;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '▶';
      position: absolute;
      left: 0;
      color: #00ffcc;
      font-size: 0.8rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
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
          <TimelineItem
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the item is visible
          >
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