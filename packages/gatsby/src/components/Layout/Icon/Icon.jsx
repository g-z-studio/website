import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// réutiliser ce composant pour créer les autres icones , comme dans "Infos" ?

export const Icon = ({ url, src }) => {
  return (
    <Link to={url}>
      <img src={src} />
    </Link>
  );
};
