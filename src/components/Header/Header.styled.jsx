import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  max-width: 1150px;
  margin: 0 auto;
  z-index: 10;
  background-color: white;
  height: 80px;
  width: 100%;
  display: flex;
  padding-right: 15px;
`;

export const SideWrapper = styled.div`
  flex: 50vw;
  display: flex;
  justify-content: ${(props) => props.side};
  align-items: center;
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

  @media (max-width: 490px) {
    font-size: 24px;
  }
`;
