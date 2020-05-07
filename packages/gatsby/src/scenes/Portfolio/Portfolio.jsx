import React from "react";
import { Box, Grid } from "@gz-studio/components";

export const Portfolio = ({ id }) => (
  <Box horizontal="M">
    <section id={id}>
      <Grid rows="1fr">
        <h3>image</h3>
        <h3>espace</h3>
        <h3>interactif</h3>
        <h3>atelier</h3>
        <p></p>
      </Grid>
    </section>
  </Box>
);
