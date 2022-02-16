import React from "react";
import {
  ToolsContainer,
  Description,
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

  const frontend = edges[0].node.frontmatter;

  const backend = edges[1].node.frontmatter;

  const other = edges[2].node.frontmatter;

  return (
    <ToolsContainer id="tools">
      <SectionTitle>Tools</SectionTitle>
      <Description
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        I am always in the process of learning new tools for software
        development. Check back in a few months, or even weeks, and you'll
        likely see a different tech below. Here is what I am currently using.
      </Description>
      <ListGrid>
        <TechColumn>
          <ListTitle
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            {frontend.title}
          </ListTitle>
          <TechList
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
          >
            {frontend.tool_list.map((item, itemIdx) => (
              <TechListItem key={itemIdx}>{item}</TechListItem>
            ))}
          </TechList>
        </TechColumn>
        <TechColumn>
          <ListTitle
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease"
          >
            {backend.title}
          </ListTitle>
          <TechList
            data-sal="slide-up"
            data-sal-delay="700"
            data-sal-easing="ease"
          >
            {backend.tool_list.map((item, itemIdx) => (
              <TechListItem key={itemIdx}>{item}</TechListItem>
            ))}
          </TechList>
        </TechColumn>
        <TechColumn>
          <ListTitle
            data-sal="slide-up"
            data-sal-delay="800"
            data-sal-easing="ease"
          >
            {other.title}
          </ListTitle>
          <TechList
            data-sal="slide-up"
            data-sal-delay="900"
            data-sal-easing="ease"
          >
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
