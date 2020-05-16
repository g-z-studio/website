import React from "react";
import styled from "styled-components";
import { Grid, Box } from "@gz-studio/components";
import { CategoryScreen } from "./CategoryScreen";

export const Hero = ({ id }) => {
  return (
    <Box horizontal="M">
      <section id={id}>
        <Grid rows="5vh 25vh 50vh 10vh">
          <h1 css="grid-row: 2;">Des expériences sonores signifiantes</h1>
          <CategoryScreen cssToChild="grid-row: 3;" />
        </Grid>
      </section>
    </Box>
  );
};
