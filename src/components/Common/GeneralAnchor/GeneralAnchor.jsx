import React from "react";
import { Anchor } from "./GeneralAnchor.styled";

const GeneralAnchor = ({ children, href, target }) => {
  return (
    <Anchor href={href} target={target}>
      {children}
    </Anchor>
  );
};

export default GeneralAnchor;
