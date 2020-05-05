import React from "react";
import styled from "styled-components";

export const StyledClone = styled(({ component, ...props }) =>
  React.cloneElement(component, props),
);
