import React from "react";
import { FooterContainer } from "./Footer.styled";

const Footer = ({ children }) => {
  return (
    <FooterContainer>
      {children}
      {/* © {new Date().getFullYear()}, Jason Hamm. All Rights Reserved. */}
    </FooterContainer>
  );
};

export default Footer;
