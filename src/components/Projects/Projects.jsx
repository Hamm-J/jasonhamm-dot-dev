import React from "react";
import { ProjectsContainer } from "./Projects.styled";
import Project from "./Project";
import SectionTitle from "../Common/SectionTitle/Index";
import { useStaticQuery, graphql } from "gatsby";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "src/cms/projects/" } }
      ) {
        edges {
          node {
            frontmatter {
              image
              title
              tech_list
              deployment_link
              deployment_label
              code_link
              code_label
            }
            rawMarkdownBody
          }
        }
      }
    }
  `);

  const { edges } = data.allMarkdownRemark;

  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      {edges.map((edge, edgeIdx) => (
        <Project
          key={edgeIdx}
          title={edge.node.frontmatter.title}
          image={edge.node.frontmatter.image}
          techList={edge.node.frontmatter.tech_list}
          codeLink={edge.node.frontmatter.code_link}
          codeLabel={edge.node.frontmatter.code_label}
          deploymentLink={edge.node.frontmatter.deployment_link}
          deploymentLabel={edge.node.frontmatter.deployment_label}
          description={edge.node.rawMarkdownBody}
        />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
