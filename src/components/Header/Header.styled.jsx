import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: white;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-left: 5vw;
  padding-right: 5vw;
`;

export const NavLink = styled(AnchorLink)`
  text-decoration: none;
`;
