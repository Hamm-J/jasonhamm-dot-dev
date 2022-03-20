import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const NavLink = styled(AnchorLink)`
  font-family: ${(props) => props.theme.fontTitle};
  text-decoration: none;
  font-size: 25px;
  max-height: 80px;
  margin-left: 15px;
  color: ${(props) => props.theme.colorPrimary};
  outline: none;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colorAccent};
  }
`;

export const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.colorPrimary};
  border: 2px solid ${(props) => props.theme.colorPrimary};
  border-radius: 3px;
  cursor: pointer;
  padding: 8px;
  margin-left: 25px;
  font-size: 20px;
  max-height: 80px;
  font-family: ${(props) => props.theme.fontTitle};
  box-sizing: border-box;
  min-width: 125px;

  &:hover {
    background-color: ${(props) => props.theme.colorPrimary};
    color: ${(props) => props.theme.colorSecondary};
    border: 2px solid ${(props) => props.theme.colorPrimary};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colorAccent};
  }
`;
