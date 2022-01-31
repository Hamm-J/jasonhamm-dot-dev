import React from "react";
import {
  AboutContainer,
  ExperienceTitle,
  Position,
  Date,
  Description,
} from "./About.styled";
import SectionTitle from "../Common/SectionTitle/Index";
import Comment from "../Common/Comment/Index";

// * Think I will divergent my structure for this section
// = I think I will just list my education and then lab

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>About</SectionTitle>
      <Description>[GENERAL DESC]After pursuing...</Description>
      <Comment>Learn more about me below... [call to action]</Comment>
      {/* TODO: map over each experience */}
      <ExperienceTitle>Cornell University</ExperienceTitle>
      <Position>Student</Position>
      <Date>2016-2018</Date>
      <Description>
        Originally interested in pursuing a career in medicine and completing a
        bachulars in biology and the entire pre-med track
      </Description>

      <ExperienceTitle>
        Experience and Cognition Lab (Cornell University)
      </ExperienceTitle>
      <Position>Lab Manager / Research Assistent</Position>
      <Date>2019 - present</Date>
      <Description>
        Carried out data analysis and modeling, programming and implementation
        of experiments, data visualization primarily using R, Python,
        JavaScript, CSS, and HTML
      </Description>
    </AboutContainer>
  );
};

export default About;
