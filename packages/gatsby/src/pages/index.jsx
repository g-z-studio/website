import React from "react";
import styled from "styled-components";

import { theme } from "../globals";

import SEO from "../components/seo";
import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
// import { HomeCard } from "../components/HomeCard";
import { ProjectsPreview } from "../components/ProjectsPreview";

const HeroP = styled.p`
  border-left: 0.4rem solid ${theme.neutral5};
  padding: 0 1rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper height="90">
      <h1>Des expériences sonores signifiantes</h1>
      <HeroP>
        En exploitant toutes les compétences de la création sonore appliquée,
        nos designers, monteurs et ingénieurs travaillent ensemble, du concept à
        la post-production. <br />
        Que vos besoins se situent dans le champ de l'image ou de l'espace,
        notre volonté est de vous accompagner pour réaliser au mieux la
        dimension sonore de votre projet.
      </HeroP>
    </Wrapper>
    <Wrapper height="90">
      <h2>Services</h2>
      <h3>image</h3>
      <h3>espace</h3>
      <h3>interactif</h3>
      <h3>atelier</h3>
      <p></p>
    </Wrapper>
    {/* <HomeCard
      paragraph="gz studio propose des services
      comme sa t oklm on te fai sa bien.
      En fait nous l’image c vraiment notre
      truc et si tu veux tu nous appelle et c
      parti en 2-2 boum boum:"
      link="image"
      url="/services/image"
    />
    <HomeCard
      paragraph="ensuite c vrai que on aime bien les
      objets aussi c top c top frer wallah
      c top"
      link="usage"
      url="/services/usage"
    />
    <HomeCard
      paragraph="En dernier lieu si je puis me permettre
      il serait judicieux de cliquer
      ici cliquez bande de salope cliquez"
      link="espace"
      url="/services/espace"
    /> */}
    <Wrapper height="9  0">
      <ProjectsPreview />
    </Wrapper>
  </Layout>
);

export default IndexPage;
