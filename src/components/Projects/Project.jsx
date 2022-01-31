import React from "react";
import {
  ProjectContainer,
  ProjectTitle,
  ProjectImage,
  ProjectDescription,
  TechList,
  TechListItem,
} from "./Project.styled";
import Comment from "../Common/Comment/Index";

const Project = ({
  title,
  description,
  image,
  techList,
  codeLink,
  codeLabel,
  deploymentLink,
  deploymentLabel,
}) => {
  return (
    <ProjectContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectImage src={image} width="200px" height="200px"></ProjectImage>
      <Comment>Tech Stack</Comment>
      <TechList>
        {techList.map((item, itemIdx) => (
          <TechListItem key={itemIdx}>{item}</TechListItem>
        ))}
      </TechList>
      <Comment>
        See Code:{" "}
        <a href={codeLink} target="_blank">
          {codeLabel}
        </a>
      </Comment>
      <Comment>
        See Site:{" "}
        <a href={deploymentLink} target="_blank">
          {deploymentLabel}
        </a>
      </Comment>
    </ProjectContainer>
  );
};

export default Project;
