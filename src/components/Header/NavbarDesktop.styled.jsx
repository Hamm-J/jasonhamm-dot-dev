import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const NavContainer = styled.nav`
  @media (max-width: 850px) {
    display: none;
  }
`;

export const NavLink = styled(AnchorLink)`
  text-decoration: none;
  font-size: 25px;
  max-height: 80px;
  margin-left: 15px;
`;
