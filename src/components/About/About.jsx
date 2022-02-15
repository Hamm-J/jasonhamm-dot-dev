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
    <AboutContainer id="about">
      <SectionTitle
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        About
      </SectionTitle>
      <Description
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        I love learning and solving problems. Nothing excites me more than
        solving a new bug or error. Deducing what works and what doesn't.
        Proposing different models and mechanisms that might explain what is
        going on. Synthesizing everything together into an implementable
        solution. Then, <i>finally</i> the sweet satisfaction of a console with
        nothing but green checkmarks and a list of successfully passed tests.
      </Description>
      <Description
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-easing="ease"
      >
        I've always had an interest in coding but it wasn't until I started
        conducting research in a cognitive science laboratory that I finally
        sunk my teeth into it. I discovered my passion for programming while
        creating scripts for psychology experiments in JavaScript and analyzing
        the results in R. Now, I have combined my love for learning and solving
        problems with my passion for programming and am ready to take on new
        problems in software development.
      </Description>
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
