import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
// import { theme } from "../../globals";
import { Link } from "gatsby";

import { Wrapper } from "../Wrapper";
import { CatFilterContext } from "../../components/CatFilterStateMgmt";

export const ProjectViewer = ({ hashtag, src, alt, title, paragraph, url }) => {
  const [viewed, setViewed] = useState(true);
  const { state } = useContext(CatFilterContext);

  useEffect(() => {
    for (let [key, value] of Object.entries(state)) {
      if (key === hashtag) {
        if (state.filter) {
          value ? setViewed(true) : setViewed(false);
        } else {
          setViewed(true);
        }
      }
    }
  }, [state, hashtag]);

  return viewed ? (
    <Wrapper marginHeight="40">
      <Link to={url}>
        <img src={src} alt={alt} />
      </Link>
      <Link to={url}>
        <h3>{title}</h3>
      </Link>
      <p>{paragraph}</p>
      <h5>#{hashtag}</h5>
    </Wrapper>
  ) : null;
};

ProjectViewer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  paragraph: PropTypes.string,
  url: PropTypes.string,
};
