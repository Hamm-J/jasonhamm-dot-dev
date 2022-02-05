import React from "react";
import { ProjectsContainer } from "./Projects.styled";
import Project from "./Project";
import SectionTitle from "../Common/SectionTitle/Index";
import image from "../../images/gatsby-astronaut.png";
import { useStaticQuery, graphql } from "gatsby";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "src/cms/projects/" } }
      ) {
        nodes {
          frontmatter {
            title
            image
            deployment_label
            deployment_link
            code_label
            code_link
            tech_list
          }
          rawMarkdownBody
        }
      }
    }
  `);

  console.log(data);
  const { nodes } = data.allMarkdownRemark;
  console.log(nodes);
  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      {nodes.map((node, nodeIdx) => (
        <Project
          key={nodeIdx}
          title={node.frontmatter.title}
          image={`../..${node.frontmatter.image}`}
          // techList={}
          codeLink={node.frontmatter.code_link}
          codeLabel={node.frontmatter.code_label}
          deploymentLink={node.frontmatter.deployment_link}
          deploymentLabel={node.frontmatter.deployment_label}
          description={node.rawMarkdownBody}
          // image={image}
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
