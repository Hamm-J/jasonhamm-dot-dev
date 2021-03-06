import React from "react";
import { HeaderContainer, NavLink, SideWrapper } from "./Header.styled";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Header = ({ siteTitle, theme, toggleTheme }) => {
  return (
    <HeaderContainer
      data-sal="slide-down"
      data-sal-delay="1000"
      data-sal-easing="ease"
    >
      <SideWrapper side="flex-start">
        <NavLink to="/#landing" title="landing">
          {siteTitle}
        </NavLink>
      </SideWrapper>
      <SideWrapper side="flex-end">
        <NavbarDesktop theme={theme} toggleTheme={toggleTheme}></NavbarDesktop>
        <NavbarMobile theme={theme} toggleTheme={toggleTheme}></NavbarMobile>
      </SideWrapper>
    </HeaderContainer>
  );
};

export default Header;
