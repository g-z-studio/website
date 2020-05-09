import React from "react";
import { Grid, Box } from "@gz-studio/components";
import styled from "styled-components";

import { theme } from "../../../globals";
import { SocialBar } from "../../../components";

const HeroP = styled.p`
  border-left: 0.4rem solid ${theme.neutral5};
  padding: 0 1rem;
`;

export const Hero = ({ id }) => (
  <Box horizontal="M">
    <section id={id}>
      <Grid rows="10vh 30vh 30vh 10vh 10vh">
        <h1 css="grid-row: 2;">Des expériences sonores signifiantes</h1>
        <HeroP css="grid-row: 3;">
          En exploitant toutes les compétences de la création sonore appliquée,
          nos designers, monteurs et ingénieurs travaillent ensemble, du concept
          à la post-production. <br />
          Que vos besoins se situent dans le champ de l'image ou de l'espace,
          notre volonté est de vous accompagner pour réaliser au mieux la
          dimension sonore de votre projet.
        </HeroP>
        <SocialBar cssToChild="grid-row: 4;" />
      </Grid>
    </section>
  </Box>
);
