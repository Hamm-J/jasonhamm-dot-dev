import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: white;
`;

export const Nav = styled.nav``;

export const NavLink = styled(AnchorLink)`
  text-decoration: none;
`;
