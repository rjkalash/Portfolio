import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ContentContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #121212;
  color: #ffffff;
  text-align: center;
  scroll-margin-top: 80px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #ff6b6b, #ffa3a3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const ContentGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const VideoCategory = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #1e1e1e;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const VideoCard = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: #121212;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  h4 {
    font-size: 1rem;
    margin: 1rem 0;
    color: #ffffff;
    text-align: center;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      min-height: 50px;
    }
  }

  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #ff0000;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    margin-top: auto;

    &:hover {
      background-color: #cc0000;
    }
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background-color: #000;
  border-radius: 4px;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: #ffffff;
    font-size: 24px;
  }

  .slick-dots li button:before {
    color: #ffffff;
    opacity: 0.5;
  }

  .slick-dots li.slick-active button:before {
    color: #ff0000;
    opacity: 1;
  }

  .slick-slide {
    padding: 0 5px;
  }

  @media (max-width: 768px) {
    .slick-prev:before,
    .slick-next:before {
      font-size: 18px;
    }
  }
`;

const Content = () => {
  const videos = [
    {title: 'Pastimes & Teachings of Lord Chaitanya|| Session-2|| HG Vamsidhari Prabhu', link: 'https://www.youtube.com/watch?v=WCcrvOwNDC0', index: 1},
    {title: 'False Ego Is The Real Trouble Maker || Vamsidhari Das', link: 'https://www.youtube.com/watch?v=QXQMeoZGF_s', index: 2},
    {title: 'Srila Prabhupada Naughty Childhood Pastimes || Vamsidhari Das #bhakti #motivation #iskcon', link: 'https://www.youtube.com/watch?v=uumecrQmEpU', index: 3},
    {title: 'Pastimes & Teachings of Lord Chaitanya|| Session-1|| HG Vamsidhari Prabhu', link: 'https://www.youtube.com/watch?v=4hJXdxcOTK0', index: 4},
    {title: 'Spiritual Sprouts: The Early Life of Srila Prabhupada || Vamsidhari Das #iskcon #bhakti #motivation', link: 'https://www.youtube.com/watch?v=PsOoqMlKEJ4', index: 5},
    {title: 'The Mind of a Pure Devotee: A Deep Dive into Their Spirituality || ISKCON Vesu Surat', link: 'https://www.youtube.com/watch?v=Km5Wvmpnh1o', index: 6},
    {title: 'Duty of the Wise || ISKCON Miami USA || With Russian Language Translation #iskcon', link: 'https://www.youtube.com/watch?v=k8wULtIKeEM', index: 7},
    {title: 'What Does It Mean To Become Humble ? ||Part 3 || HG Vamsidhari Prabhu', link: 'https://www.youtube.com/watch?v=gzXTddCEYmQ', index: 8},
    {title: 'Bhagavat Rasamalay||Part-40||HG Vamsidhari Prabhu', link: 'https://www.youtube.com/watch?v=RepKoShbuKY', index: 9},
    {title: 'Most beautiful and nature village: Nandagrama Farm Community, Gujarat', link: 'https://www.youtube.com/watch?v=1BQW-OSJkXQ', index: 10},
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Function to extract video ID from YouTube URL
  const getVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <ContentContainer id="content">
      <h2>Content</h2>
      <ContentGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <VideoCategory>
          <h3>YouTube Videos</h3>
          <StyledSlider {...settings}>
            {videos.map((video) => (
              <div key={video.index}>
                <VideoCard>
                  <VideoThumbnail>
                    <iframe 
                      src={`https://www.youtube.com/embed/${getVideoId(video.link)}`} 
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </VideoThumbnail>
                  <h4>{video.title}</h4>
                  <a href={video.link} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube
                  </a>
                </VideoCard>
              </div>
            ))}
          </StyledSlider>
        </VideoCategory>
      </ContentGrid>
    </ContentContainer>
  );
};

export default Content;