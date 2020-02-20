import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
`;

const Span = styled.span`
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
`;

const Span1 = styled.Span`
  ${props =>
    !props.isOpen
      ? `top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;`
      : `-webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: -3px;
  left: 8px;`}
`;

const Span2 = styled.Span`
  ${props =>
    !props.isOpen
      ? `top: 18px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;`
      : `width: 0%;
  opacity: 0;`}
`;

const Span3 = styled.Span`
  ${props =>
    !props.isOpen
      ? `top: 36px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;`
      : `-webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 39px;
    left: 8px;`}
`;

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Div onClick={setIsOpen(!isOpen)}>
      <Span1 isOpen={isOpen}></Span1>
      <Span2 isOpen={isOpen}></Span2>
      <Span3 isOpen={isOpen}></Span3>
    </Div>
  );
};
