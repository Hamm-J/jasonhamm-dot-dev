import React from "react";
import { LandingContainer, Title, Description } from "./Landing.styled";
import { graphql, useStaticQuery } from "gatsby";

const Landing = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/landing/" } }) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
            }
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <LandingContainer>
      <Title>Hi, I'm Jason 👋</Title>
      <Description>
        I'm a frontend software developer, cooking enthusiest, and philosophy
        nerd.
      </Description>
    </LandingContainer>
  );
};

export default Landing;
