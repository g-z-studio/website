import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Box } from "@gz-studio/components";
import { CatFilterContext } from "../../../components";
import {
  GridTitle,
  CatLabel,
  TagLabel,
  tagFlexBoxStyle,
} from "./PortfolioElement.styles";

export const PortfolioElement = ({ title, cats, tags }) => {
  const [viewed, setViewed] = useState(true);
  const { state } = useContext(CatFilterContext);

  useEffect(() => {
    const stateValues = Object.values(state);
    const stateKeys = Object.keys(state);

    const currentKey = value => stateKeys[stateValues.indexOf(value)];
    const isCatMatching = value => cats.find(cat => currentKey(value) === cat);
    const filter = value => !(!value && state.filter);

    const isCatStateTruthy = stateValues.find(
      value => value && isCatMatching(value)
    );
    const shouldBeViewed = filter(isCatStateTruthy);
    setViewed(shouldBeViewed);
  }, [state, cats]);

  return viewed ? (
    <Box>
      <GridTitle>{title}</GridTitle>
      <Box css={tagFlexBoxStyle}>
        {cats.map((cat, index) => (
          <CatLabel key={index}>{cat}</CatLabel>
        ))}
        {tags.map((tag, index) => (
          <TagLabel key={index}>{tag}</TagLabel>
        ))}
      </Box>
    </Box>
  ) : null;
};

PortfolioElement.propTypes = {
  title: PropTypes.string,
  cats: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
};
