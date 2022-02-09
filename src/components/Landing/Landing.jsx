import React from "react";
import {
  LandingContainer,
  ContentWrapper,
  Title,
  Description,
} from "./Landing.styled";
import { graphql, useStaticQuery } from "gatsby";

const Landing = () => {
  const data = useStaticQuery(graphql`
    query LandingQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "src/cms/landing/" }
          frontmatter: {}
        }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            rawMarkdownBody
          }
        }
      }
    }
  `);
  const { node } = data.allMarkdownRemark.edges[0];
  return (
    <LandingContainer>
      <ContentWrapper>
        <Title>{node.frontmatter.title}</Title>
        <Description>{node.rawMarkdownBody}</Description>
      </ContentWrapper>
    </LandingContainer>
  );
};

export default Landing;
