import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 10;
  background-color: white;
  height: 80px;
`;

export const SideWrapper = styled.div`
  flex: 50vw;
  display: flex;
  justify-content: ${(props) => props.side};
  align-items: center;
  padding-right: 15px;
`;

export const NavLink = styled(AnchorLink)`
  text-decoration: none;
  max-height: 80px;
  margin-left: 15px;
  color: black;
  font-size: 36px;

  &:hover {
    color: #952121;
  }
`;
