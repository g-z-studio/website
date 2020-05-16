import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@gz-studio/components";

import { Layout } from "../../components";
import { ProjectPageHero } from "./ProjectPageHero";
import { ProjectPageBody } from "./ProjectPageBody";

const ProjectPage = ({ pageContext }) => {
  const {
    title,
    description,
    sounds,
    cats,
    tags,
    body,
    client,
    date,
    press,
    awards,
    credits,
    medias,
  } = pageContext.page;

  return (
    <Layout>
      <Grid rows="auto auto auto 10vh">
        <ProjectPageHero
          title={title}
          description={description}
          sounds={sounds}
        />
        <ProjectPageBody
          cats={cats}
          tags={tags}
          body={body}
          client={client}
          date={date}
          press={press}
          awards={awards}
          credits={credits}
        />
        <Box horizontal="M" bottom="M">
          {medias.map((media, index) => (
            <div key={index}>{media.title}</div>
          ))}
        </Box>
      </Grid>
    </Layout>
  );
};

ProjectPage.Hero = ProjectPageHero;

export default ProjectPage;

ProjectPage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    cats: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    body: PropTypes.string,
    client: PropTypes.string,
    date: PropTypes.string,
    press: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    awards: PropTypes.arrayOf(PropTypes.string),
    credits: PropTypes.arrayOf(PropTypes.string),
    sounds: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        src: PropTypes.string,
      })
    ),
    medias: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        src: PropTypes.string,
        type: PropTypes.string,
      })
    ),
  }),
};
