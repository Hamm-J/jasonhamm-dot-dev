import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const NavContainer = styled.nav`
  @media (max-width: 960px) {
    display: none;
  }
`;

export const NavLink = styled(AnchorLink)`
  font-family: Palatino;
  text-decoration: none;
  font-size: 25px;
  max-height: 80px;
  margin-left: 15px;
  color: black;

  &:hover {
    color: #952121;
  }
`;
