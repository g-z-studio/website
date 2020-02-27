import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../../globals";

// peut-etre tej le margin et gérer avec une grid
const Div = styled.div`
  margin: 1rem 2rem;
  padding: 0;

  width: 60px;
  height: 10px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
`;

const Span = styled.span`
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: ${props => (!props.menuOpen ? theme.neutral5 : theme.neutral1)};
  border-radius: 5px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
`;

// barre du haut
const Span1 = styled(Span)`
  transform-origin: left center;
  ${props =>
    !props.menuOpen
      ? `top: 0px;`
      : `  transform: rotate(45deg);
  top: -3px;
  left: 8px;`}
`;

// barre du milieu
const Span2 = styled(Span)`
  ${props =>
    !props.menuOpen
      ? `top: 18px;
  transform-origin: left center;`
      : `width: 0%;
  opacity: 0;`}
`;

// barre du bas
const Span3 = styled(Span)`
  transform-origin: left center;
  ${props =>
    !props.menuOpen
      ? `top: 36px;
      `
      : `
    transform: rotate(-45deg);
    top: 39px;
    left: 8px;`}
`;

export const Hamburger = ({ menuOpen, setMenuOpen }) => {
  // gère l'événement du DOM Réel et transmet à l'état du composant
  const handleClick = () => setMenuOpen(!menuOpen);

  return (
    <Div onClick={() => handleClick()}>
      <Span1 menuOpen={menuOpen}></Span1>
      <Span2 menuOpen={menuOpen}></Span2>
      <Span3 menuOpen={menuOpen}></Span3>
    </Div>
  );
};

Hamburger.propTypes = {
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func,
};
