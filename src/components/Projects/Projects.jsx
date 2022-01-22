import React from "react";
import { ProjectsContainer } from "./Projects.styled";
import Project from "./Project";
import SectionTitle from "../Common/SectionTitle/Index";

const Projects = () => {
  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      <Project
        title="reddit analytics"
        description="find the best time to post on reddit"
        // image="temp"
      />
    </ProjectsContainer>
  );
};

export default Projects;
