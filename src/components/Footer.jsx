import React from 'react'

// Style
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      OpenWeather © v2.5
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  text-align: center;
  padding: 60px 0;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
`;
