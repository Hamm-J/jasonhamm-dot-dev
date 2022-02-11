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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 60%;
  z-index: 1;
  background-color: black;

  // show Overlay and LinkWrapper when open is true
  display: ${(props) => (props.open ? "inline" : "none")};
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25%;
`;

export const CloseButton = styled.button``;
