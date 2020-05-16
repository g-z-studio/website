import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Box, Grid, SoundPlayer } from "@gz-studio/components";

// const flexBoxStyle = css`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   align-items: center;
//   flex-wrap: wrap;
// `;

export const ProjectPageHero = ({ title, description, sounds }) => {
  return (
    <Box horizontal="M" bottom="M">
      <section>
        <Grid rows="30vh 30vh 30vh">
          <h1>{title}</h1>
          <h3>{description}</h3>
          <Grid columns="1fr 1fr 1fr">
            {sounds.map((sound, index) => (
              <SoundPlayer key={index}>{sound.title}</SoundPlayer>
            ))}
          </Grid>
        </Grid>
      </section>
    </Box>
  );
};

ProjectPageHero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  sounds: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      src: PropTypes.string,
    })
  ),
};
