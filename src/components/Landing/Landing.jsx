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
    <LandingContainer id="landing">
      <ContentWrapper>
        <Title
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          {node.frontmatter.title}
        </Title>
        <Description
          data-sal="slide-left"
          data-sal-delay="500"
          data-sal-easing="ease"
        >
          {node.rawMarkdownBody}
        </Description>
      </ContentWrapper>
    </LandingContainer>
  );
};

export default Landing;
