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
  height: 80px;
`;

export const TitleWrapper = styled.div`
  flex: 50vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
`;

export const LinksWrapper = styled.div`
  flex: 50vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15px;
`;

export const NavLink = styled(AnchorLink)`
  text-decoration: none;
  max-height: 80px;
  margin-left: 15px;
  color: black;

  &:hover {
    color: #952121;
  }
`;

export const TitleText = styled.span`
  font-size: 36px;
`;

export const LinkText = styled.span`
  font-size: 25px;

  @media (max-width: 850px) {
    display: ${(props) => (props.showLinks ? "flex" : "none")};
  }
`;

export const Hamburger = styled.button`
  display: none;

  @media (max-width: 850px) {
    display: flex;
  }
`;
