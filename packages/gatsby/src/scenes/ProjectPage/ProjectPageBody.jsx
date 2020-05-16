import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import {
  Box,
  CatLabel,
  NudeTagLabel,
  NudeCatLabel,
} from "@gz-studio/components";

const tagFlexBoxStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProjectPageBody = ({
  cats,
  tags,
  body,
  client,
  date,
  press,
  awards,
  credits,
}) => {
  return (
    <Box
      horizontal="M"
      top="M"
      bottom="M"
      css={`
        background: ${props => props.theme.secondaryColor.dark};
      `}
    >
      <Box bottom="M" css={tagFlexBoxStyle}>
        {cats.map((cat, index) => (
          <CatLabel key={index}>{cat}</CatLabel>
        ))}
        {tags.map((tag, index) => (
          <NudeTagLabel key={index}>{tag}</NudeTagLabel>
        ))}
      </Box>
      <p>{body} </p>
      <Box css={tagFlexBoxStyle}>
        <CaptionBox>
          <NudeCatLabel>Client</NudeCatLabel>
          {client}
        </CaptionBox>
        <CaptionBox>
          <NudeCatLabel>Date</NudeCatLabel>
          {date}
        </CaptionBox>
        <CaptionBox>
          <NudeCatLabel>Press</NudeCatLabel>
          {press.map((pres, index) => (
            <ListElement key={index}>
              <a href={pres.url} target="_blank">
                {pres.title}
              </a>
            </ListElement>
          ))}
        </CaptionBox>
        <CaptionBox>
          <NudeCatLabel>Awards</NudeCatLabel>
          {awards.map((award, index) => (
            <ListElement key={index}>{award}</ListElement>
          ))}
        </CaptionBox>
        <CaptionBox>
          <NudeCatLabel>Crédits</NudeCatLabel>
          {credits.map((credit, index) => (
            <ListElement key={index}>{credit}</ListElement>
          ))}
        </CaptionBox>
      </Box>
    </Box>
  );
};

const CaptionBox = styled.p`
  ${tagFlexBoxStyle}
  font-size: ${props => props.theme.fontSize.paragraph};
  margin: 0;
  margin-right: ${props => props.theme.spacing.M};
  margin-bottom: ${props => props.theme.spacing.S};
`;

const ListElement = styled.span`
  margin-right: ${({ theme }) => theme.spacing.S};
`;

ProjectPageBody.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
  body: PropTypes.string,
  client: PropTypes.string,
  date: PropTypes.string,
  press: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  awards: PropTypes.arrayOf(PropTypes.string),
  credits: PropTypes.arrayOf(PropTypes.string),
};
