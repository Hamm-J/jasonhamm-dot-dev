import React, { useState } from "react";
import {
  HeaderContainer,
  Nav,
  NavLink,
  LinkText,
  TitleText,
  LinksWrapper,
  TitleWrapper,
  Hamburger,
} from "./Header.styled";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Header = ({ siteTitle }) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = (state) => {
    if (showLinks) {
      setShowLinks(false);
    } else {
      setShowLinks(true);
    }
  };

  return (
    <HeaderContainer>
      <Nav>
        <TitleWrapper>
          <NavLink to="/#landing" title="contact">
            <TitleText>{siteTitle}</TitleText>
          </NavLink>
        </TitleWrapper>
        <LinksWrapper>
          <NavbarDesktop></NavbarDesktop>
          <NavbarMobile></NavbarMobile>
          {/* <NavLink to="/#projects" title="contact">
            <LinkText showLinks={showLinks}>Projects</LinkText>
          </NavLink>
          <NavLink to="/#about" title="contact">
            <LinkText showLinks={showLinks}>About</LinkText>
          </NavLink>
          <NavLink to="/#tools" title="contact">
            <LinkText showLinks={showLinks}>Tools</LinkText>
          </NavLink>
          <NavLink to="/#contact" title="contact">
            <LinkText showLinks={showLinks}>Contact</LinkText>
          </NavLink> */}
          {/* <Hamburger onClick={toggleLinks}>open</Hamburger> */}
        </LinksWrapper>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
