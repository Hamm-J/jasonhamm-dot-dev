import React from "react";
import { NavContainer, NavLink } from "./NavbarDesktop.styled";

const NavbarDesktop = () => {
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
    </NavContainer>
  );
};

export default NavbarDesktop;
