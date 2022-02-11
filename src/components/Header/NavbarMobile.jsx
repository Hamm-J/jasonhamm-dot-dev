import React, { useState } from "react";
import {
  NavContainer,
  Hamburger,
  NavLink,
  Overlay,
  LinkWrapper,
  CloseButton,
} from "./NavbarMobile.styled";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <NavContainer>
      <Overlay open={open}>
        <LinkWrapper>
          <NavLink
            to="/#projects"
            title="contact"
            onAnchorLinkClick={toggleOpen}
          >
            Projects
          </NavLink>
          <NavLink to="/#about" title="contact" onAnchorLinkClick={toggleOpen}>
            About
          </NavLink>
          <NavLink to="/#tools" title="contact" onAnchorLinkClick={toggleOpen}>
            Tools
          </NavLink>
          <NavLink
            to="/#contact"
            title="contact"
            onAnchorLinkClick={toggleOpen}
          >
            Contact
          </NavLink>
          <CloseButton onClick={toggleOpen}>Close</CloseButton>
        </LinkWrapper>
      </Overlay>
      <Hamburger onClick={toggleOpen}>Open</Hamburger>
    </NavContainer>
  );
};

export default NavbarMobile;
