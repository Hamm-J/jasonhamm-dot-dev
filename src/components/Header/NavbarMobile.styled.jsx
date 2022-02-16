import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const NavContainer = styled.nav``;

export const NavLink = styled(AnchorLink)`
  font-family: Palatino;
  text-decoration: none;
  font-size: 36px;
  max-height: 80px;
  margin-left: 15px;
  color: white;
  margin: 15px;

  &:hover {
    color: #952121;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: ${(props) => (props.open ? "100%" : "0")};
  height: ${(props) => (props.open ? "100%" : "0")};
  opacity: ${(props) => (props.open ? "0.85" : "0")};
  transition: opacity 0.25s ease-in 0 ease-out;

  background-color: black;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-15px)")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

export const Hamburger = styled.button`
  font-size: 36px;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #952121;
  }

  @media (min-width: 961px) {
    display: none;
  }
`;
