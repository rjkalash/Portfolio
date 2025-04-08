import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Timeline = styled(motion.div)`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background: linear-gradient(to bottom, #0077ff, #00ffcc);
    top: 0;
    bottom: 0;
    left: 20px;
    margin-left: -3px;

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
        left: -12px;
      }
    }

    &:nth-child(even) {
      left: 50%;
      text-align: left;

      &::after {
        left: -12px;
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background: ${props => props.spiritual ? '#00ffcc' : '#0077ff'};
    border: 4px solid #121212;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    left: 8px;

    @media (min-width: 768px) {
      left: auto;
      right: -12px;
    }
  }
`;

const ExperienceContent = styled.div`
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-left: ${props => props.spiritual ? '4px solid #00ffcc' : '4px solid #0077ff'};

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #ffffff;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${props => props.spiritual ? '#00ffcc' : '#a0a0a0'};
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #a0a0a0;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
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
      type: 'spiritual',
      role: 'Regional Secretary (Assistant) & Youth Director',
      organization: 'ISKCON Gujarat',
      duration: '2014 – Present',
      location: 'Baroda, Gujarat',
      contributions: [
        'Serving under the leadership of H.G Basu Ghosh Prabhu as instructed by Guru Maharaj H.H Bhakti Charu Swami Maharaja',
        'Director of ISKCON Youth Forum at ISKCON Baroda',
        'Overseeing youth preaching in colleges including MSU, Parul University, GEC Dahod, GEC Surat',
      ],
    },
    {
      type: 'spiritual',
      role: 'Full-time Monk',
      organization: 'ISKCON',
      duration: '2011 – Present',
      location: 'Various locations',
      contributions: [
        'Joined as full-time monk in 2011 after serving as Assistant Manager at Reliance Infrastructure Ltd (2008-2011)',
        'Previously involved in youth outreach at NIT Bhopal, IIT Gwalior, SGSITS Indore',
      ],
    },
    {
      type: 'professional',
      company: 'Reliance Infrastructure Ltd',
      role: 'Assistant Manager',
      duration: '2008 – 2011',
      location: 'Mumbai, India',
      contributions: [
        'Managed key infrastructure projects during tenure',
        'Transitioned to full-time spiritual service after completing corporate responsibilities',
        'Gained valuable leadership and management experience',
      ],
    }, 
    {
      type: 'education',
      degree: 'B.Tech in Electrical Engineering',
      institution: 'NIT Bhopal',
      duration: '2004 – 2008',
      achievements: [
        'Selected for campus placement in Reliance Infrastructure Ltd.',
        'Initiated spiritual activities during college years',
      ],
    },
  ];

  return (
    <ExperienceContainer id="experience">
      <h2>Journey</h2>
      <Timeline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            spiritual={exp.type === 'spiritual'}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <ExperienceContent spiritual={exp.type === 'spiritual'}>
              <h3>{exp.company || exp.organization || exp.institution}</h3>
              <h4>{exp.role || exp.degree}</h4>
              <p>{exp.duration}</p>
              {exp.location && <p>{exp.location}</p>}
              <ul>
                {exp.contributions?.map((contribution, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: contribution }} />
                ))}
                {exp.achievements?.map((achievement, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: achievement }} />
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