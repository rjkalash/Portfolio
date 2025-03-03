// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #1e1e1e;
  color: #ffffff;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Vamshidhari Das. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;