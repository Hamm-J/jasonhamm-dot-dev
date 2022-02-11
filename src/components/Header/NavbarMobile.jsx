import React, { useState } from "react";
import {
  NavContainer,
  Hamburger,
  NavLink,
  Overlay,
} from "./NavbarMobile.styled";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavContainer>
      <Overlay open={open}>
        <NavLink to="/#projects" title="contact">
          Projects
        </NavLink>
        <NavLink to="/#about" title="contact">
          About
        </NavLink>
        <NavLink to="/#tools" title="contact">
          Tools
        </NavLink>
        <NavLink to="/#contact" title="contact">
          Contact
        </NavLink>
      </Overlay>
      <Hamburger onClick={() => setOpen(!open)}>Open</Hamburger>
    </NavContainer>
  );
};

export default NavbarMobile;
