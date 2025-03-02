// src/components/Education.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// src/components/Education.js
const EducationContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #1e1e1e;
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

const EducationContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EducationItem = styled.div`
  background-color: #121212;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

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
    color: #a0a0a0;
    margin-bottom: 0.5rem;
  }

  .duration {
    font-size: 0.9rem;
    color: #a0a0a0;
    margin-bottom: 0.5rem;
  }

  .grade {
    font-size: 0.9rem;
    color: #ffffff;
    font-weight: 300;
    margin-bottom: 0.5rem;
  }

  .location {
    font-size: 0.9rem;
    color: #a0a0a0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {educationData.map((edu, index) => (
          <EducationItem key={index}>
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
