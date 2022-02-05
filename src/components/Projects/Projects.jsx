import React from "react";
import { ProjectsContainer } from "./Projects.styled";
import Project from "./Project";
import SectionTitle from "../Common/SectionTitle/Index";
import image from "../../images/test.png";
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

  console.log(data);
  const { edges } = data.allMarkdownRemark;
  console.log(edges);
  console.log(image);
  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      {edges.map((edge, edgeIdx) => (
        <Project
          key={edgeIdx}
          title={edge.node.frontmatter.title}
          // image={edge.node.frontmatter.image}
          image={image}
          // techList={}
          codeLink={edge.node.frontmatter.code_link}
          codeLabel={edge.node.frontmatter.code_label}
          deploymentLink={edge.node.frontmatter.deployment_link}
          deploymentLabel={edge.node.frontmatter.deployment_label}
          description={edge.node.rawMarkdownBody}
        />
      ))}

      {/* <Project
        title="reddit analytics"
        image={image}
        techList={["React", "Firebase", "styled-components"]}
        codeLink={"https://www.github.com"}
        codeLabel={"GitHub"}
        deploymentLink={"https://www.firebase.com"}
        deploymentLabel={"Firebase"}
        description="find the best time to post on reddit"
      /> */}
    </ProjectsContainer>
  );
};

export default Projects;
