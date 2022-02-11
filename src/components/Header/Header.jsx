import React from "react";
import { HeaderContainer, NavLink, SideWrapper } from "./Header.styled";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
      <SideWrapper side="left">
        <NavLink to="/#landing" title="contact">
          {siteTitle}
        </NavLink>
      </SideWrapper>
      <SideWrapper side="right">
        <NavbarDesktop></NavbarDesktop>
        <NavbarMobile></NavbarMobile>
      </SideWrapper>
    </HeaderContainer>
  );
};

export default Header;
