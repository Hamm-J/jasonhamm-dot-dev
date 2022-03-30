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
  LinksWrapper,
} from "./Project.styled";
import Comment from "../Common/Comment/Index";
import GeneralAnchor from "../Common/GeneralAnchor/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Project = ({
  title,
  description,
  image,
  techList,
  codeLink,
  deploymentLink,
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
      <TechList>
        {techList.map((item, itemIdx) => (
          <TechListItem key={itemIdx}>{item}</TechListItem>
        ))}
      </TechList>
      <LinksWrapper>
        <Comment>
          <GeneralAnchor href={deploymentLink} target="_blank">
            Website <FontAwesomeIcon icon={faLink} />
          </GeneralAnchor>
        </Comment>
        <Comment>
          <GeneralAnchor href={codeLink} target="_blank">
            Code <FontAwesomeIcon icon={faGithub} />
          </GeneralAnchor>
        </Comment>
      </LinksWrapper>
    </ProjectContainer>
  );
};

export default Project;
