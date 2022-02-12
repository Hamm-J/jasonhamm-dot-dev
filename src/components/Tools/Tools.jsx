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
  console.log(edges);
  console.log(edges[0].node.frontmatter.title);
  console.log(edges[1].node.frontmatter.title);
  console.log(edges[2].node.frontmatter.title);

  const frontend = edges[0].node.frontmatter;

  const backend = edges[2].node.frontmatter;

  const other = edges[1].node.frontmatter;

  return (
    <ToolsContainer id="tools">
      <SectionTitle>Tools</SectionTitle>
      <Comment>
        I am always in the process of learning new tools for software
        development. Check back in a few months, or even weeks, and you'll
        likely see a new tech below. Learning is life.
      </Comment>
      <ListGrid>
        <TechColumn>
          <ListTitle>{frontend.title}</ListTitle>
          <TechList>
            {frontend.tool_list.map((item, itemIdx) => (
              <TechListItem key={itemIdx}>{item}</TechListItem>
            ))}
          </TechList>
        </TechColumn>
        <TechColumn>
          <ListTitle>{backend.title}</ListTitle>
          <TechList>
            {backend.tool_list.map((item, itemIdx) => (
              <TechListItem key={itemIdx}>{item}</TechListItem>
            ))}
          </TechList>
        </TechColumn>
        <TechColumn>
          <ListTitle>{other.title}</ListTitle>
          <TechList>
            {other.tool_list.map((item, itemIdx) => (
              <TechListItem key={itemIdx}>{item}</TechListItem>
            ))}
          </TechList>
        </TechColumn>
        {/* {edges.map((edge, edgeIdx) => (
          <TechColumn key={edgeIdx}>
            <ListTitle>{edge.node.frontmatter.title}</ListTitle>
            <TechList>
              {edge.node.frontmatter.tool_list.map((tool, toolIdx) => (
                <TechListItem key={toolIdx}>{tool}</TechListItem>
              ))}
            </TechList>
          </TechColumn>
        ))} */}
      </ListGrid>
    </ToolsContainer>
  );
};

export default Tools;
