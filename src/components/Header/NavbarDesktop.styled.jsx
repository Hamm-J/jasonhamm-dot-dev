import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const NavContainer = styled.nav`
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

  &:hover {
    color: ${(props) => props.theme.colorAccent};
  }
`;

export const ThemeButton = styled.button``;
