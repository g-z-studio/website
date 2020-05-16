import React from "react";
import styled from "styled-components";

export const PlainTextArea = ({
  setState,
  type = "text",
  disabled = false,
  readOnly = false,
  state,
  placeholder = "",
  rows = "5",
  columns = "15",
  inputMode = "",
  ...props
}) => {
  return (
    <textarea
      type={type}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      inputMode={inputMode}
      {...props}
      value={state}
      onChange={({ target: { value } }) => setState(value)}
      rows={rows}
      columns={columns}
    />
  );
};

export const TextArea = styled(PlainTextArea)`
  background: transparent;
  background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.primaryColor.base} 20%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(
      to left,
      ${({ theme }) => theme.primaryColor.base} 20%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(
      to bottom,
      ${({ theme }) => theme.primaryColor.base} 20%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(
      to top,
      ${({ theme }) => theme.primaryColor.base} 20%,
      rgba(255, 255, 255, 0) 0%
    );
  background-position: top, bottom, left, right;
  background-size: 8px 1px, 8px 1px, 1px 8px, 1px 8px;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;

  width: 100%;
  min-height: 12rem;
`;
