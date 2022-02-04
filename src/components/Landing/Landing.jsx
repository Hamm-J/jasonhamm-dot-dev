import React from "react";
import { LandingContainer, Title, Description } from "./Landing.styled";
import { graphql, useStaticQuery } from "gatsby";

const Landing = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      markdownRemark {
        frontmatter {
          date
          slug
          title
        }
      }
    }
  `);
  console.log(data.markdownRemark.frontmatter.title);
  return (
    <LandingContainer>
      <p>{data.markdownRemark.frontmatter.title}</p>
      <Title>Hi, I'm Jason 👋</Title>
      <Description>
        I'm a frontend software developer, cooking enthusiest, and philosophy
        nerd.
      </Description>
    </LandingContainer>
  );
};

export default Landing;
