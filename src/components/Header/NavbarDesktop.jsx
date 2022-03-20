import React from "react";
import { NavContainer, NavLink, ThemeButton } from "./NavbarDesktop.styled";

const NavbarDesktop = ({ theme, setTheme }) => {
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
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
      <ThemeButton onClick={() => handleTheme()}>{theme}</ThemeButton>
    </NavContainer>
  );
};

export default NavbarDesktop;
