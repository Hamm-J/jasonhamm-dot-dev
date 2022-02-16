import React from "react";
import {
  AboutContainer,
  ExperienceTitle,
  Position,
  Date,
  Description,
  ExperienceItem,
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
      <SectionTitle>About</SectionTitle>
      <Description
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-easing="ease"
      >
        I love learning and solving problems. Nothing excites me more than
        solving a new bug or error. Deducing what works and what doesn't.
        Researching and proposing different models and mechanisms that might
        explain what is going on. Synthesizing everything together into an
        implementable solution. Then, <i>finally</i> the sweet satisfaction of a
        console with nothing but green checkmarks and a list of successfully
        passed tests.
      </Description>
      <Description
        data-sal="slide-up"
        data-sal-delay="700"
        data-sal-easing="ease"
      >
        I've always had an interest in coding but it wasn't until I worked as a
        lab manager and research assistant in a cognitive neuroscience
        laboratory at my alma mater of Cornell University, that I finally sunk
        my teeth into it. I discovered my passion for programming and
        development while developing programs for psychology experiments in
        JavaScript, HTML, and CSS, and then analyzing the data collected with
        those programs in R and Python. Now, I have combined my love for
        learning and solving problems with my passion for programming and am
        eager to take on new problems in software development.
      </Description>
      {/* {edges.map((edge, edgeIdx) => (
        <ExperienceItem key={edgeIdx}>
          <ExperienceTitle>{edge.node.frontmatter.title}</ExperienceTitle>
          <Position>{edge.node.frontmatter.position}</Position>
          <Date>{`${edge.node.frontmatter.start_year}-${edge.node.frontmatter.end_year}`}</Date>
          <Description>{edge.node.rawMarkdownBody}</Description>
        </ExperienceItem>
      ))} */}
    </AboutContainer>
  );
};

export default About;
