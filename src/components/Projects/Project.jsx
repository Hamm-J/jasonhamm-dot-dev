import React from "react"
import {
  ProjectContainer,
  ProjectTitle,
  ProjectImage,
  ProjectDescription,
  TechList,
  TechListItem,
} from "./Project.styled"
import Comment from "../Common/Comment/Index"

const Project = ({ title, description, image }) => {
  return (
    <ProjectContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      {/* <ProjectImage>{image} </ProjectImage> */}
      <Comment>Tech Stack</Comment>
      <TechList>
        <TechListItem>temp item</TechListItem>
      </TechList>
      <Comment>See Code</Comment>
    </ProjectContainer>
  )
}

export default Project
