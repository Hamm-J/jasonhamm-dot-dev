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
import { useStaticQuery, graphql } from "gatsby";

// * Think I will divergent my structure for this section
// = I think I will just list my education and then lab

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "src/cms/about/" } }
      ) {
        edges {
          node {
            rawMarkdownBody
            frontmatter {
              title
              position
              start_year
              end_year
            }
          }
        }
      }
    }
  `);
  const { edges } = data.allMarkdownRemark;
  return (
    <AboutContainer>
      <SectionTitle>About</SectionTitle>
      <Description>[GENERAL DESC]After pursuing...</Description>
      <Comment>Learn more about me below... [call to action]</Comment>
      {edges.map((edge, edgeIdx) => (
        <React.Fragment key={edgeIdx}>
          <ExperienceTitle>{edge.node.frontmatter.title}</ExperienceTitle>
          <Position>{edge.node.frontmatter.position}</Position>
          <Date>{`${edge.node.frontmatter.start_year}-${edge.node.frontmatter.end_year}`}</Date>
          <Description>{edge.node.rawMarkdownBody}</Description>
        </React.Fragment>
      ))}
    </AboutContainer>
  );
};

export default About;
