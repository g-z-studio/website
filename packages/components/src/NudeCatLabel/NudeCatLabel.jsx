import styled from "styled-components";

const labelHorizontalSpacing = "0.4rem";

export const NudeCatLabel = styled.h5`
  font-size: ${(props) => props.theme.fontSize.body};
  color: ${(props) => props.theme.primaryColor.lighter};
  margin: 0;
  margin-right: ${labelHorizontalSpacing};
`;
