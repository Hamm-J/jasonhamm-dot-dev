import React from "react";
import {
  ProjectContainer,
  ProjectTitle,
  DividerLine,
  ProjectImage,
  ProjectOverlay,
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
    <ProjectContainer>
      <ImageWrapper
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-easing="ease"
        tabIndex={0}
      >
        <ProjectImage loading="lazy" src={image} alt={`Image of ${title}`} />
        <ProjectOverlay />
        <InfoWrapper>
          <ProjectTitle>{title}</ProjectTitle>
          <DividerLine></DividerLine>
          <ProjectDescription
            dangerouslySetInnerHTML={{ __html: `<div>${description}</div>` }}
          ></ProjectDescription>
        </InfoWrapper>
      </ImageWrapper>
      <TechList
        data-sal="slide-left"
        data-sal-delay="700"
        data-sal-easing="ease"
      >
        {techList.map((item, itemIdx) => (
          <TechListItem key={itemIdx}>{item}</TechListItem>
        ))}
      </TechList>
      <LinksWrapper
        data-sal="slide-up"
        data-sal-delay="900"
        data-sal-easing="ease"
      >
        <Comment>
          {title === "My Website" ? (
            <div>You're looking at it 😉</div>
          ) : (
            <GeneralAnchor href={deploymentLink} target="_blank">
              Demo <FontAwesomeIcon icon={faLink} />
            </GeneralAnchor>
          )}
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
