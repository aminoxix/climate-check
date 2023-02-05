// React
import React from "react";
import { Link } from "react-router-dom";

// Style
import styled from "styled-components";

export default function NavBar() {
  return (
    <>
      <NavBarOverlay>
        <NavBarContainer>
          <NavBarLink to="/about">About</NavBarLink>
        </NavBarContainer>
      </NavBarOverlay>
    </>
  );
}

const NavBarOverlay = styled.div`
  max-width: 960px;
  mask-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 25%,
    #ffffff 75%,
    rgba(255, 255, 255, 0) 100%
  );
  margin: 0 auto;
  padding: 60px 0;
`;

const NavBarContainer = styled.div`
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 25%,
    rgba(255, 255, 255, 0.2) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1),
    inset 0 0 1px rgba(255, 255, 255, 0.6);
`;

const NavBarLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1),
      inset 0 0 1px rgba(255, 255, 255, 0.6);
    border-radius: 10px;
  }
`;
