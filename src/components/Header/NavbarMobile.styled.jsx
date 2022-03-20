import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const NavContainer = styled.nav``;

export const NavLink = styled(AnchorLink)`
  font-family: ${(props) => props.theme.fontTitle};
  text-decoration: none;
  font-size: 36px;
  max-height: 80px;
  color: ${(props) => props.theme.colorSecondary};
  margin: 15px;
  outline: none;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colorAccent};
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

  background-color: ${(props) => props.theme.colorPrimary};
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
  outline: none;
  color: ${(props) => props.theme.colorPrimary};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colorAccent};
  }

  @media (min-width: 961px) {
    display: none;
  }
`;

export const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.colorPrimary};
  border: 2px solid ${(props) => props.theme.backgroundColor};
  border-radius: 3px;
  cursor: pointer;
  padding: 12px;
  font-size: 30px;
  margin: 15px;
  font-family: ${(props) => props.theme.fontTitle};
  box-sizing: border-box;
  min-width: 184px;

  &:hover {
    background-color: ${(props) => props.theme.colorPrimary};
    color: ${(props) => props.theme.colorSecondary};
    border: 2px solid ${(props) => props.theme.colorSecondary};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colorAccent};
  }
`;
