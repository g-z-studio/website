import styled from "styled-components";
import { theme } from "../../../globals";
import { Link } from "gatsby";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.neutral5};
  color: ${theme.neutral1};
  text-align: left;
  padding: 2rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.3s ease-in-out;
  cursor: default;

  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0%)" : "translateX(100%)"};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 40%;
  }

  a {
    font-size: 1.5rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
      (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const MenuLink = styled(Link)`
  color: ${props => (props.url === props.to ? theme.neutral5 : theme.neutral1)};
  background-color: ${props =>
    props.url === props.to ? theme.neutral1 : theme.neutral5};
`;
