import React from "react";

import SEO from "../components/seo";
import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
import { ProjectFilter } from "../components/ProjectFilter";
import { ProjectViewer } from "../components/ProjectViewer";
import { ProjectStateManagement } from "../components/ProjectStateManagement";

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projets" />
      <Wrapper height="100">
        <h1>Projets</h1>
        <ProjectStateManagement>
          <ProjectFilter />
          <ProjectViewer
            hashtag="image"
            alt="image projet 1"
            title="Projet #1"
            paragraph="blablabla"
          />
          <ProjectViewer
            hashtag="espace"
            alt="image projet 2"
            title="Projet #2"
            paragraph="blablabla"
          />
        </ProjectStateManagement>
      </Wrapper>
    </Layout>
  );
};

export default ProjectsPage;
