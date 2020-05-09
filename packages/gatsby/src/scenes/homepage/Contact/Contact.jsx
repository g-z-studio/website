import React from "react";
import { Grid, Box, Button } from "@gz-studio/components";
import { theme } from "../../../globals";

export const Contact = ({ id }) => (
  <Box bottom="M">
    <section id={id}>
      <Grid gap="M">
        <Box
          top="M"
          horizontal="M"
          css={`
            background: ${theme.neutral2};
          `}
        >
          <h1>Contactez nous</h1>
          <p>
            Nous pourrons nous rencontrer pour cibler le plus finement vos
            besoins et nous vous redigerons une proposition adaptée.
          </p>
        </Box>
        <Button css="justify-self: center;">Contactez-nous</Button>
      </Grid>
    </section>
  </Box>
);
