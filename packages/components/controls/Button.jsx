import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  border: none;
  border-radius: ${({ theme }) => theme.spacing.S};

  padding: ${({ theme }) => theme.spacing.S} ${({ theme }) => theme.spacing.M};
  min-width: ${({ theme }) => theme.spacing.XL};
  max-width: ${({ theme }) => theme.spacing.XXL};

  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  color: ${({ theme }) => theme.secondaryColor.base};
  background-color: ${({ theme }) => theme.primaryColor.base};
  border: ${({ theme }) => theme.primaryColor.light} solid 1.5px;

  transition: all ${({ theme }) => theme.steady} cubic-bezier(0.6, 0, 0.4, 1);

  :hover {
    background-color: ${({ theme }) => theme.primaryColor.light};
  }
  :active {
    background-color: ${({ theme }) => theme.primaryColor.lighter};
  }
`;
