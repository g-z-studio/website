import React from "react";
import SEO from "../components/seo";
import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
import { HomeCard } from "../components/HomeCard";
import { ProjectsPreview } from "../components/ProjectsPreview";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper height="100">
      <h1>Des expériences sonores plus riches et signifiantes</h1>
      <h3>
        En exploitant toutes les compétences de la création sonore appliquée,
        nos designers, monteurs et ingénieurs travaillent ensemble, du concept à
        la post-production. <br />
        Que vos besoins se situent dans le champ de l'image ou de l'espace,
        notre volonté est de vous accompagner pour réaliser au mieux la
        dimension sonore de votre projet.
      </h3>
    </Wrapper>
    <h2>Services</h2>
    <HomeCard
      paragraph="GZ studio propose des services
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
    />
    <ProjectsPreview />
  </Layout>
);

export default IndexPage;
