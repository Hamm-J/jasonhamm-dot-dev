import React, { useState } from "react";
import {
  NavContainer,
  Hamburger,
  NavLink,
  Overlay,
  LinkWrapper,
  CloseButton,
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
        <LinkWrapper open={open}>
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
      <Hamburger onClick={toggleOpen}>
        <FontAwesomeIcon icon={faBars} />
      </Hamburger>
    </NavContainer>
  );
};

export default NavbarMobile;
