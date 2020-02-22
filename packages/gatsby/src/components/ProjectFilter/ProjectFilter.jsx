import React, { useReducer } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../globals";
import { Link } from "gatsby";

import { Wrapper } from "../Wrapper";

const Button = styled.button``;

const initialState = {
  image: "off",
  espace: "off",
  usage: "off",
  atelier: "off",
};

const reducer = (state, action) => {
  console.log(state);

  switch (action.type) {
    case "image":
      return state.image === "on"
        ? { ...state, image: "off" }
        : { ...state, image: "on" };
      break;
    case "espace":
      return state.espace === "on"
        ? { ...state, espace: "off" }
        : { ...state, espace: "on" };
      break;
    case "usage":
      return state.usage === "on"
        ? { ...state, usage: "off" }
        : { ...state, usage: "on" };
      break;
    case "atelier":
      return state.atelier === "on"
        ? { ...state, atelier: "off" }
        : { ...state, atelier: "on" };
      break;
    default:
      throw new Error();
  }
};

export const ProjectFilter = ({}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Wrapper>
      <Button onClick={() => dispatch({ type: "image" })}>#image</Button>
      <Button onClick={() => dispatch({ type: "espace" })}>#espace</Button>
      <Button onClick={() => dispatch({ type: "usage" })}>#usage</Button>
      <Button onClick={() => dispatch({ type: "atelier" })}>#atelier</Button>
    </Wrapper>
  );
};

ProjectFilter.propTypes = {};
