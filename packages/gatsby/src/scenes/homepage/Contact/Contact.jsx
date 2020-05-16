import React from "react";
import { Grid, Box } from "@gz-studio/components";
import { theme } from "../../../globals";
import { ContactForm } from "./ContactForm";

export const Contact = ({ id }) => (
  <Box bottom="M">
    <section id={id}>
      <Grid rows="40vh 1fr" gap="M">
        <Box
          horizontal="M"
          top="M"
          css={`
            background: ${theme.secondaryColor.darker};
          `}
        >
          <h1>Contactez nous</h1>
          <p>
            Nous pourrons nous rencontrer pour cibler le plus finement vos
            besoins et nous vous redigerons une proposition adaptée.
          </p>
        </Box>
        <Box horizontal="M">
          <ContactForm />
        </Box>
      </Grid>
    </section>
  </Box>
);
