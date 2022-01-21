import React from "react"
import {
  ProjectContainer,
  ProjectTitle,
  ProjectImage,
  ProjectDescription,
  TechList,
  TechListItem,
} from "./Project.styled"

const Project = ({ title, description, image }) => {
  return (
    <ProjectContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      {/* <ProjectImage>{image} </ProjectImage> */}
      <TechList>
        <TechListItem>temp item</TechListItem>
      </TechList>
    </ProjectContainer>
  )
}

export default Project
