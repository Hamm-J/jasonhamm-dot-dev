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
  const projectsOrdered = [];

  edges.forEach((item) => {
    switch (item.node.frontmatter.title) {
      case "My Website":
        projectsOrdered[2] = [item.node.frontmatter, item.node.rawMarkdownBody];
        break;
      case "Storybook React UI Kit":
        projectsOrdered[1] = [item.node.frontmatter, item.node.rawMarkdownBody];
        break;
      case "Reddit Top Posts Heatmap":
        projectsOrdered[0] = [item.node.frontmatter, item.node.rawMarkdownBody];
        break;
      default:
      // pass
    }
  });

  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsWrapper>
        {projectsOrdered.map((project, projectIdx) => (
          <Project
            key={projectIdx}
            title={project[0].title}
            image={project[0].image}
            techList={project[0].tech_list}
            codeLink={project[0].code_link}
            deploymentLink={project[0].deployment_link}
            description={project[1]}
          />
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
