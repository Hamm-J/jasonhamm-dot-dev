import React from "react";
import {
  ToolsContainer,
  Description,
  ListTitle,
  TechList,
  TechListItem,
  TechListItemImage,
  TechColumn,
  ListGrid,
} from "./Tools.styled";
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
              tools {
                tool_image
                tool_name
              }
              title
            }
          }
        }
      }
    }
  `);

  const { edges } = data.allMarkdownRemark;

  let frontend = {};
  let backend = {};
  let other = {};

  // console.log(edges);
  edges.forEach((item) => {
    if (item.node.frontmatter.title === "Frontend") {
      frontend = item.node.frontmatter;
    } else if (item.node.frontmatter.title === "Backend") {
      backend = item.node.frontmatter;
    } else if (item.node.frontmatter.title === "Other") {
      other = item.node.frontmatter;
    }
  });

  return (
    <ToolsContainer id="tools">
      <SectionTitle>Tools</SectionTitle>
      <Description
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        Tools come and go, but what stays are the ways those tools helped one
        think about and solve a problem. I am always learning new tools and
        refreshing old ones, this is one of the most exciting and fun parts of
        programming. Here is a list of some of the current tools I use:
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
            {frontend.tools.map((item, itemIdx) => (
              <TechListItem key={itemIdx}>
                {item.tool_name}
                <TechListItemImage
                  loading="lazy"
                  src={item.tool_image}
                  alt={`${item.tool_name} icon`}
                />
              </TechListItem>
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
            {backend.tools.map((item, itemIdx) => (
              <TechListItem key={itemIdx}>
                {item.tool_name}{" "}
                <TechListItemImage
                  loading="lazy"
                  src={item.tool_image}
                  alt={`${item.tool_name} icon`}
                />
              </TechListItem>
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
            {other.tools.map((item, itemIdx) => (
              <TechListItem key={itemIdx}>
                {item.tool_name}{" "}
                <TechListItemImage
                  loading="lazy"
                  src={item.tool_image}
                  alt={`${item.tool_name} icon`}
                />
              </TechListItem>
            ))}
          </TechList>
        </TechColumn>
      </ListGrid>
    </ToolsContainer>
  );
};

export default Tools;
