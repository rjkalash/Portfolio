import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #1e1e1e;
  color: #ffffff;
  text-align: center;
  scroll-margin-top: 80px;
`;

const AboutContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const AboutText = styled.div`
  text-align: justify;
  text-justify: inter-word;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #00ffcc, #0077ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #e0e0e0;
    margin-bottom: 1.5rem;
  }

  .highlight {
    color: #ffffff;
    font-weight: 500;
  }

  .service-timeline {
    margin: 2rem 0;
    padding-left: 1.5rem;
    border-left: 3px solid #0077ff;
  }

  .service-item {
    margin-bottom: 1.5rem;
    position: relative;
    padding-left: 1.5rem;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #00ffcc;
    }

    h3 {
      font-size: 1.2rem;
      color: #ffffff;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: #a0a0a0;
    }

    .duration {
      font-style: italic;
      color: #00ffcc;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
      line-height: 1.6;
    }

    .service-item h3 {
      font-size: 1.1rem;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ProfileImage
          src="src\assets\images\vamshidhariPrabhuji.jpg"
          alt="Vamshidhari Das"
        />
        <AboutText>
          <h2>Spiritual Journey</h2>
          <p>
            All glories to Srila Prabhupada. I have been serving in ISKCON since 2006, 
            beginning my spiritual journey while pursuing my <span className="highlight">B.Tech in Electrical Engineering</span> 
            at <span className="highlight">NIT Bhopal</span>, where I graduated in 2008.
          </p>

          <div className="service-timeline">
            <div className="service-item">
              <h3>Early Career & Spiritual Awakening</h3>
              <p className="duration">2006-2011</p>
              <p>
                While completing my engineering degree, I began spiritual outreach at 
                <span className="highlight"> NIT Bhopal, IIT Gwalior, and SGSITS Indore</span>. 
                After graduation, I served as <span className="highlight">Assistant Manager at Reliance Infrastructure Ltd</span> 
                (2008-2011) before taking full-time monastic vows in 2011.
              </p>
            </div>

            <div className="service-item">
              <h3>Full-time Monastic Life</h3>
              <p className="duration">2011-Present</p>
              <p>
                Dedicated my life to spreading Krishna consciousness under the guidance 
                of my spiritual master, <span className="highlight">H.H Bhakti Charu Swami Maharaja</span>.
              </p>
            </div>

            <div className="service-item">
              <h3>ISKCON Baroda Service</h3>
              <p className="duration">2014-Present</p>
              <p>
                Relocated to <span className="highlight">ISKCON Baroda</span> in 2014 to serve under 
                <span className="highlight"> H.G Basu Ghosh Prabhu</span>. Currently serving as 
                <span className="highlight"> Regional Secretary (Assistant) for ISKCON Gujarat</span> and 
                <span className="highlight"> Director of ISKCON Youth Forum</span> at ISKCON Baroda.
              </p>
            </div>

            <div className="service-item">
              <h3>Youth Preaching Initiatives</h3>
              <p className="duration">Ongoing</p>
              <p>
                Overseeing youth preaching programs at numerous educational institutions including 
                <span className="highlight"> The Maharaja Sayajirao University, Parul University, GEC Dahod, GEC Surat</span>, 
                and other colleges throughout Gujarat.
              </p>
            </div>
          </div>

          <p>
            My life's mission is to share the nectar of Krishna consciousness with 
            students and youth, following in the footsteps of Srila Prabhupada. 
            Through devotional service, kirtan, and philosophical discussions, 
            I strive to awaken the spiritual potential in every heart.
          </p>
          
          <p>
            All my accomplishments are by the mercy of my spiritual masters and 
            the holy names of Lord Krishna. I pray to always remain a humble 
            servant of the servants of the Lord.
          </p>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;