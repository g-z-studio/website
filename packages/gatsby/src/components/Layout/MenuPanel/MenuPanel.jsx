import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../globals";
import { Link } from "gatsby";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.neutral5};
  color: ${theme.neutral1};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  cursor: default;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0%)" : "translateX(100%)"};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const MenuPanel = ({ menuOpen }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (isOpen) {
    return (
      <StyledNav menuOpen={menuOpen}>
        <Link to="/infos">Infos</Link>
        <Link to="/projects/">Projects</Link>
        <Link to="/services/">Services</Link>
      </StyledNav>
    );
  }
  return null;
};
