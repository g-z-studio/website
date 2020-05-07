import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { propertyExistOrVoid, CloneOrDiv } from "../utils";
import { spacingCases } from "./spacingCases";

// on applique le format de grid à condition que la prop correspondante existe dans le composant Grid

// const columnSelector = (columnProp) =>
//   propertyExistOrVoid(columnProp)(`grid-template-columns: ${columnProp};`);
// const rowSelector = (rowProp) =>
//   propertyExistOrVoid(rowProp)(`grid-template-rows: ${rowProp};`);

// styles à injecter
const gridStyle = css`
  display: grid;
  ${({ columns }) => `grid-template-columns: ${columns || `100%`};`}
  ${({ rows }) => `grid-template-rows: ${rows || `100%`};`}
  gap: ${({ gap }) => spacingCases(gap)}rem;
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Grid = styled(CloneOrDiv)`
  ${gridStyle}
`;

// @@@@@@@@@ Old Grid with local CloneOrDiv component

// const Div = styled.div`
//   ${gridStyle}
// `;

// const BoxedChild = StyledClone`
//   ${gridStyle}
// `;

// const CloneOrDiv = (props, { children }) =>
//   React.Children.count(children) === 1 && children.type !== React.Fragment ? (
//     <BoxedChild {...props} component={children} />
//   ) : (
//     <Div {...props}>{props.children}</Div>
//   );

// export const Grid = ({ columns, rows, gap, className, children }) => (
//   <CloneOrDiv
//     columns={columns}
//     rows={rows}
//     gap={gap}
//     children={children}
//     className={className}
//   />
// );
