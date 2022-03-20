import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  max-width: 1150px;
  margin: 0 auto;
  z-index: 10;
  /* background-color: ${(props) => props.theme.backgroundColor}; */
  height: 80px;
  width: 100%;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideWrapper = styled.div`
  flex: 50vw;
  display: flex;
  justify-content: ${(props) => props.side};
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const NavLink = styled(AnchorLink)`
  font-family: Palatino;
  text-decoration: none;
  max-height: 80px;
  margin-left: 15px;
  color: ${(props) => props.theme.colorPrimary};
  font-size: 36px;
  outline: none;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colorAccent};
  }

  @media (max-width: 490px) {
    font-size: 24px;
  }
`;
