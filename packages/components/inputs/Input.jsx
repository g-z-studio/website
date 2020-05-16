import React from "react";
import styled from "styled-components";

// export const Input = ({
//   setState,
//   type = "text",
//   disabled = false,
//   readOnly = false,
//   state,
//   placeholder = "",
//   inputMode = "",
//   ...props
// }) => {
//   return (
//     <StyledInput
//       type={type}
//       disabled={disabled}
//       readOnly={readOnly}
//       placeholder={placeholder}
//       inputMode={inputMode}
//       value={state}
//       onChange={({ target: { value } }) => setState(value)}
//       {...props}
//     />
//   );
// };
// const StyledInput = styled.input`
//   background: transparent;
//   background-image: linear-gradient(
//     to right,
//     ${({ theme }) => theme.primaryColor.base} 20%,
//     rgba(255, 255, 255, 0) 0%
//   );
//   background-position: bottom;
//   background-size: 8px 1px;
//   background-repeat: repeat-x;

//   width: 100%;
//   padding-bottom: ${({ theme }) => theme.spacing.S};
// `;

export const Input = styled.input.attrs(
  ({
    setState,
    type = "text",
    disabled = false,
    readOnly = false,
    state,
    placeholder = "",
    inputMode = "",
    ...props
  }) => ({
    value: state,
    onChange: ({ target: { value } }) => setState(value),
  }),
)`
  background: transparent;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.primaryColor.base} 20%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;

  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.S};
`;
