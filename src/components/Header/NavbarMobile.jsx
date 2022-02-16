import React, { useState } from "react";
import {
  NavContainer,
  Hamburger,
  NavLink,
  Overlay,
  LinkWrapper,
} from "./NavbarMobile.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <NavContainer>
      <Overlay open={open}>
        <LinkWrapper open={open} onClick={toggleOpen}>
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
        </LinkWrapper>
      </Overlay>
      <Hamburger onClick={toggleOpen}>
        <FontAwesomeIcon icon={faBars} />
      </Hamburger>
    </NavContainer>
  );
};

export default NavbarMobile;
