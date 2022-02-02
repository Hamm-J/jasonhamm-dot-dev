import React from "react";
import { ProjectsContainer } from "./Projects.styled";
import Project from "./Project";
import SectionTitle from "../Common/SectionTitle/Index";
import image from "../../images/gatsby-astronaut.png";

const Projects = () => {
  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      <Project
        title="reddit analytics"
        description="find the best time to post on reddit"
        image={image}
        techList={["React", "Firebase", "styled-components"]}
        codeLink={"https://www.github.com"}
        codeLabel={"GitHub"}
        deploymentLink={"https://www.firebase.com"}
        deploymentLabel={"Firebase"}
      />
    </ProjectsContainer>
  );
};

export default Projects;
