import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@gz-studio/components";
import { Layout } from "../components";

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
        <Box horizontal="M" bottom="M">
          <section>
            <Grid rows="30vh 30vh 30vh">
              <h1>{title}</h1>
              <h3>{description}</h3>
              <Box>
                {sounds.map((sound, index) => (
                  <div key={index}>{sound.title}</div>
                ))}
              </Box>
            </Grid>
          </section>
        </Box>
        <Box horizontal="M" bottom="M">
          {cats.map((cat, index) => (
            <p key={index}>{cat}</p>
          ))}
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
          <p>{body} </p>
          <p>Client {client}</p>
          <p>Date {date}</p>
          <p>
            Press{" "}
            {press.map((pres, index) => (
              <span key={index}>{pres.title}</span>
            ))}
          </p>
          <p>
            Awards{" "}
            {awards.map((award, index) => (
              <span key={index}>{award}</span>
            ))}
          </p>
          <p>
            Crédits{" "}
            {credits.map((credit, index) => (
              <span key={index}>{credit}</span>
            ))}
          </p>
        </Box>
        <Box horizontal="M" bottom="M">
          {medias.map((media, index) => (
            <div key={index}>{media.title}</div>
          ))}
        </Box>
      </Grid>
    </Layout>
  );
};

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
