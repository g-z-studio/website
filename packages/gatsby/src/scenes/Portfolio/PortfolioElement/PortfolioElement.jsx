import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Box } from "@gz-studio/components";

const labelHorizontalSpacing = "0.4rem";
const labelVerticalSpacing = "0.1rem";

const GridTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.heading1};
`;
const CatLabel = styled(({ children, className }) => (
  <Box horizontal={labelHorizontalSpacing} className={className}>
    <h4>{children}</h4>
  </Box>
))`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0;
  margin-right: ${labelHorizontalSpacing};

  background: ${({ theme }) => theme.primaryColor.base};
  color: ${({ theme }) => theme.secondaryColor.base};
  border: ${({ theme }) => theme.primaryColor.base} solid 1px;
  font-size: ${({ theme }) => theme.fontSize.caption};
`;

const TagLabel = styled(({ children, className }) => (
  <Box horizontal={labelHorizontalSpacing} className={className}>
    <h5>{children}</h5>
  </Box>
))`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0;
  margin-right: ${labelHorizontalSpacing};

  border: ${({ theme }) => theme.primaryColor.base} solid 1px;
  font-size: ${({ theme }) => theme.fontSize.caption};
`;

const tagFlexBoxStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`;

export const PortfolioElement = ({ title, cats, tags }) => {
  return (
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
  );
};

PortfolioElement.propTypes = {
  title: PropTypes.string,
  cats: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
};
