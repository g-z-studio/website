import React from "react";
import SEO from "../components/seo";

import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
import { TeamCard } from "../components/TeamCard";

const InfoPage = () => (
  <Layout>
    <SEO title="Infos" />
    <h1>Infos</h1>
    <Wrapper marginHeight="100">
      <h2>Philosophie général / Texte fondateur</h2>
      <p>
        GZ studio propose des services comme sa t oklm on te fai sa bien. En
        fait nous l’image c vraiment notre truc et si tu veux tu nous appelle et
        c parti en 2-2 boum boum. Ensuite c vrai que on aime bien les objets
        aussi c top c top frer wallah c top. En dernier lieu si je puis me
        permettre il serait judicieux de cliquer ici cliquez bande de salope
        cliquez Philosophie général / Texte fondateur GZ studio propose des
        services comme sa t oklm on te fai sa bien. En fait nous l’image c
        vraiment notre truc et si tu veux tu nous appelle et c parti en 2-2 boum
        boum. Ensuite c vrai que on aime bien les objets aussi c top c top frer
        wallah c top. En dernier lieu si je puis me permettre il serait
        judicieux de cliquer ici cliquez bande de salope cliquez
      </p>
    </Wrapper>
    <TeamCard />
  </Layout>
);

export default InfoPage;
