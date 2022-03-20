import React from "react";
import { NavContainer, NavLink, ThemeButton } from "./NavbarDesktop.styled";

const NavbarDesktop = ({ theme, toggleTheme }) => {
  return (
    <NavContainer>
      {/* // TODO: temporarily disable projects section */}
      {/* <NavLink to="/#projects" title="contact">
        Projects
      </NavLink> */}
      <NavLink to="/#about" title="contact">
        About
      </NavLink>
      <NavLink to="/#tools" title="contact">
        Tools
      </NavLink>
      <NavLink to="/#contact" title="contact">
        Contact
      </NavLink>
      <ThemeButton onClick={() => toggleTheme()} type="button">
        {theme === "Light" ? "Dark" : "Light"} Mode
      </ThemeButton>
    </NavContainer>
  );
};

export default NavbarDesktop;
