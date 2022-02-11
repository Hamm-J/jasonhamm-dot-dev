import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const NavContainer = styled.nav``;

export const Hamburger = styled.button`
  @media (min-width: 851px) {
    display: none;
  }
`;

export const NavLink = styled(AnchorLink)`
  text-decoration: none;
  font-size: 25px;
  max-height: 80px;
  margin-left: 15px;
`;

export const Overlay = styled.div`
  z-index: ${(props) => (props.open ? 1 : -1)};
  opacity: ${(props) => (props.open ? 1 : 0)};
`;
