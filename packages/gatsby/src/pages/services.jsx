import React from "react";
import SEO from "../components/seo";
import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
import { HomeCard } from "../components/HomeCard";

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Wrapper height="100">
      <h1>Services</h1>
      <HomeCard
        paragraph="GZ studio propose des services
      comme sa t oklm on te fai sa bien.
      En fait nous l’image c vraiment notre
      truc et si tu veux tu nous appelle et c
      parti en 2-2 boum boum:"
        link="image"
      />
      <HomeCard
        paragraph="ensuite c vrai que on aime bien les
      objets aussi c top c top frer wallah
      c top"
        link="usage"
      />
      <HomeCard
        paragraph="En dernier lieu si je puis me permettre
      il serait judicieux de cliquer
      ici cliquez bande de salope cliquez"
        link="espace"
      />
    </Wrapper>
  </Layout>
);

export default ServicesPage;
