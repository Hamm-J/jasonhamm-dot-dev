import React from "react";
import { FooterContainer } from "./Footer.styled";

const Footer = ({ children }) => {
  return (
    <FooterContainer
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      {children}
      {/* © {new Date().getFullYear()}, Jason Hamm. All Rights Reserved. */}
    </FooterContainer>
  );
};

export default Footer;
