import React from "react";
import { HeaderContainer, Nav, NavLink } from "./Header.styled";

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
      <Nav data-sal="flip-up" data-sal-delay="1000" data-sal-easing="ease">
        <NavLink to="/#landing" title="contact">
          Jason Hamm
        </NavLink>
        <div>
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
        </div>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
