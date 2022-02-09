import React from "react";
import { HeaderContainer, Nav } from "./Header.styled";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
      <Nav>
        <Link to="#">{siteTitel}</Link>
        <Link to="#">Projects</Link>
        <Link to="#">About</Link>
        <Link to="#">Tools</Link>
        <Link to="#">Contact</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
