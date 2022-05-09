import React from "react";
import { Title } from "./SectionTitle.styled";

const SectionTitle = ({ children }) => {
  return (
    <Title
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
      tabIndex={0}
    >
      {children}
    </Title>
  );
};

export default SectionTitle;
