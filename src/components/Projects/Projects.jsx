import React from "react";
import { ProjectsContainer, ProjectsWrapper } from "./Projects.styled";
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
              code_link
            }
            rawMarkdownBody
          }
        }
      }
    }
  `);

  const { edges } = data.allMarkdownRemark;

  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsWrapper>
        {edges.map((edge, edgeIdx) => (
          <Project
            key={edgeIdx}
            title={edge.node.frontmatter.title}
            image={edge.node.frontmatter.image}
            techList={edge.node.frontmatter.tech_list}
            codeLink={edge.node.frontmatter.code_link}
            deploymentLink={edge.node.frontmatter.deployment_link}
            description={edge.node.rawMarkdownBody}
          />
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
