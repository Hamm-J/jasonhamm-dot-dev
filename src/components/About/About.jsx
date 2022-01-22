import React from "react"
import {
  AboutContainer,
  ExperienceTitle,
  Position,
  Date,
  Description,
} from "./About.styled"
import SectionTitle from "../Common/SectionTitle/Index"
import Comment from "../Common/Comment/Index"

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>About</SectionTitle>
      <Description>After pursuing...</Description>
      <Comment>Learn more about me below</Comment>
      {/* TODO: map over each experience */}
      <ExperienceTitle>Cornell University</ExperienceTitle>
      <Position>Student</Position>
      <Date>2016 - 2018</Date>
      <Description>
        Originally interested in pursuing a career in medicine and completing a
        bachulars in biology and the entire pre-med track
      </Description>
    </AboutContainer>
  )
}

export default About
