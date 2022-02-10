import React from "react";
import {
  ProjectContainer,
  ProjectTitle,
  ProjectImage,
  ImageWrapper,
  ProjectDescription,
  InfoWrapper,
  TechList,
  TechListItem,
} from "./Project.styled";
import Comment from "../Common/Comment/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
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
    <ProjectContainer
    // data-sal="slide-up"
    // data-sal-delay="300"
    // data-sal-easing="ease"
    >
      <ImageWrapper>
        <ProjectImage src={image}></ProjectImage>
        <InfoWrapper>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
        </InfoWrapper>
      </ImageWrapper>
      <Comment>Tech Stack</Comment>
      <TechList>
        {techList.map((item, itemIdx) => (
          <TechListItem key={itemIdx}>{item}</TechListItem>
        ))}
      </TechList>
      <Comment>
        See Code: <FontAwesomeIcon icon="fa-brands fa-github" />
        <a href={codeLink} target="_blank">
          {codeLabel}
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Comment>
      <Comment>
        See Site:{" "}
        <a href={deploymentLink} target="_blank">
          {deploymentLabel}
          <FontAwesomeIcon icon={faLink} />
        </a>
      </Comment>
    </ProjectContainer>
  );
};

export default Project;
