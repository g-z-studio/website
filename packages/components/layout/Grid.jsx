import React from "react";
import { css } from "styled-components";
import PropTypes from "prop-types";
import { propertyExistOrVoid, CloneOrDiv } from "../utils";
import { spacingCases } from "./spacingCases";

// on applique le format de grid à condition que la prop correspondante existe dans le composant Grid

const columnSelector = (columnProp) =>
  propertyExistOrVoid(columnProp)(`grid-template-columns: ${columnProp};`);
const rowSelector = (rowProp) =>
  propertyExistOrVoid(rowProp)(`grid-template-rows: ${rowProp};`);

// styles à injecter
const gridStyle = css`
  display: grid;
  ${(props) => columnSelector(props.columns)}
  ${(props) => rowSelector(props.rows)}
  gap: ${(props) => spacingCases(props.gap)}rem;
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;
`;

export const Grid = ({ columns, rows, gap, className, children }) => (
  <CloneOrDiv
    columns={columns}
    rows={rows}
    gap={gap}
    children={children}
    cloneStyle={gridStyle}
    className={className}
  />
);

Grid.propTypes = {
  columns: PropTypes.string,
  rows: PropTypes.string,
  gap: PropTypes.string,
  children: PropTypes.node,
};

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
