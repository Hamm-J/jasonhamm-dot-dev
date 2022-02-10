import React from "react";
import {
  ToolsContainer,
  ListTitle,
  TechList,
  TechListItem,
  TechColumn,
  ListGrid,
} from "./Tools.styled";
import Comment from "../Common/Comment/Index";
import SectionTitle from "../Common/SectionTitle/Index";
import { useStaticQuery, graphql } from "gatsby";

const Tools = () => {
  const data = useStaticQuery(graphql`
    query ToolsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "src/cms/tools/" } }
      ) {
        edges {
          node {
            rawMarkdownBody
            frontmatter {
              title
              tool_list
            }
          }
        }
      }
    }
  `);

  const { edges } = data.allMarkdownRemark;
  return (
    <ToolsContainer id="tools">
      <SectionTitle>Tools</SectionTitle>
      <Comment>
        I am always in the process of learning new tools for software
        development. Check back in a few months, or even weeks, and you'll
        likely see a new tech below. Learning is life.
      </Comment>
      <ListGrid>
        {edges.map((edge, edgeIdx) => (
          <TechColumn key={edgeIdx}>
            <ListTitle>{edge.node.frontmatter.title}</ListTitle>
            <TechList>
              {edge.node.frontmatter.tool_list.map((tool, toolIdx) => (
                <TechListItem key={toolIdx}>{tool}</TechListItem>
              ))}
            </TechList>
          </TechColumn>
        ))}
      </ListGrid>
    </ToolsContainer>
  );
};

export default Tools;
