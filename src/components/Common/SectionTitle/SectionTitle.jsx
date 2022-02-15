import React from "react";
import { Title } from "./SectionTitle.styled";

const SectionTitle = ({ children }) => {
  return (
    <Title data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
      {children}
    </Title>
  );
};

export default SectionTitle;
