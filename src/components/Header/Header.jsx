import React from "react";
import { HeaderContainer, NavLink, SideWrapper } from "./Header.styled";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Header = ({ siteTitle, theme, setTheme }) => {
  return (
    <HeaderContainer
      data-sal="slide-down"
      data-sal-delay="1000"
      data-sal-easing="ease"
    >
      <SideWrapper side="flex-start">
        <NavLink to="/#landing" title="contact">
          {siteTitle}
        </NavLink>
      </SideWrapper>
      <SideWrapper side="flex-end">
        <NavbarDesktop theme={theme} setTheme={setTheme}></NavbarDesktop>
        <NavbarMobile theme={theme} setTheme={setTheme}></NavbarMobile>
      </SideWrapper>
    </HeaderContainer>
  );
};

export default Header;
