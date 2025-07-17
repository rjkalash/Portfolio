// src/components/Education.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// src/components/Education.js
const EducationContainer = styled.section`
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
      radial-gradient(circle at 70% 30%, rgba(0, 255, 204, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 30% 70%, rgba(0, 119, 255, 0.08) 0%, transparent 50%);
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

const EducationContent = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 2;
`;

const EducationItem = styled(motion.div)`
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

  h3 {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    margin-bottom: 0.8rem;
    color: #ffffff;
    font-weight: 700;
    background: linear-gradient(45deg, #00ffcc, #0077ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h4 {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    margin-bottom: 1rem;
    color: #b0b0b0;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    font-size: clamp(0.9rem, 2vw, 1rem);
    color: #a0a0a0;
    margin-bottom: 0.8rem;
    line-height: 1.5;
  }

  .duration {
    font-size: clamp(0.85rem, 2vw, 0.95rem);
    color: #b0b0b0;
    margin-bottom: 0.8rem;
    font-weight: 500;
    
    &::before {
      content: '📅 ';
      margin-right: 0.5rem;
    }
  }

  .grade {
    font-size: clamp(0.9rem, 2vw, 1rem);
    color: #00ffcc;
    font-weight: 600;
    margin-bottom: 0.8rem;
    
    &::before {
      content: '🎯 ';
      margin-right: 0.5rem;
    }
  }

  .location {
    font-size: clamp(0.85rem, 2vw, 0.95rem);
    color: #a0a0a0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Education = () => {
  const educationData = [
    {
      institution: "Government Engineering College, Dahod",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "July 2019 – May 2023",
      grade: "CGPA: 8.88/10",
      location: "Dahod, Gujarat",
    },
    {
      institution: "Urmi School Hostel, Sama",
      degree: "Intermediate (PCM)",
      duration: "July 2017 – May 2019",
      grade: "Percentage: 90/100",
      location: "Vadodara, Gujarat",
    },
    {
      institution: "Einstein Public School, Lalganj",
      degree: "High School",
      duration: "July 2015 – May 2017",
      grade: "CGPA: 10/10",
      location: "Pratapgarh, Uttar Pradesh",
    },
  ];

  return (
    <EducationContainer id="education">
      <h2>Education</h2>
      <EducationContent
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {educationData.map((edu, index) => (
          <EducationItem
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -8 }}
          >
            <h3>{edu.institution}</h3>
            <h4>{edu.degree}</h4>
            <p className="duration">{edu.duration}</p>
            <p className="grade">{edu.grade}</p>
            <p className="location">
              <span>📍</span> {edu.location}
            </p>
          </EducationItem>
        ))}
      </EducationContent>
    </EducationContainer>
  );
};

export default Education;
