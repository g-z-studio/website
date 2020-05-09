import styled, { css } from "styled-components";
import { CloneOrDiv } from "../utils";
import { spacingCases } from "./spacingCases";

// styles à injecter
const gridStyle = css`
  display: grid;
  ${({ columns }) => `grid-template-columns: ${columns || `100%`};`}
  ${({ rows }) => `grid-template-rows: ${rows || `100%`};`}
  gap: ${({ gap }) => spacingCases(gap)};
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Grid = styled(CloneOrDiv)`
  ${gridStyle}
`;
