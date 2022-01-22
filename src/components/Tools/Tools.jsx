import React from "react"
import {
  ToolsContainer,
  ListTitle,
  TechList,
  TechListItem,
  TechColumn,
} from "./Tools.styled"
import Comment from "../Common/Comment/Index"
import SectionTitle from "../Common/SectionTitle/Index"

const Tools = () => {
  return (
    <ToolsContainer>
      <SectionTitle>Tools</SectionTitle>
      <Comment>
        I am always in the process of learning new tools for software
        development. Check back in a few months, or even weeks, and you'll
        likely see a new tech below. Learning is life.
      </Comment>
      <TechColumn>
        <ListTitle>Frontend Technologies</ListTitle>
        <TechList>
          <TechListItem>JavaScript</TechListItem>
          <TechListItem>ReactJS</TechListItem>
          <TechListItem>CSS</TechListItem>
          <TechListItem>SCSS</TechListItem>
          <TechListItem>HTML</TechListItem>
          <TechListItem>Styled Components</TechListItem>
          <TechListItem>StorybookJS</TechListItem>
          <TechListItem>GatsbyJS</TechListItem>
        </TechList>
      </TechColumn>
      <TechColumn>
        <ListTitle>Backend Technologies</ListTitle>
        <TechList>
          <TechListItem>NodeJS</TechListItem>
          <TechListItem>Python</TechListItem>
          <TechListItem>Flask</TechListItem>
          <TechListItem>Firebase</TechListItem>
          <TechListItem>Netlify</TechListItem>
        </TechList>
      </TechColumn>
      <TechColumn>
        <ListTitle>Other</ListTitle>
        <TechList>
          <TechListItem>Git</TechListItem>
          <TechListItem>Unix/Linux</TechListItem>
          <TechListItem>TypeScript</TechListItem>
          <TechListItem>Vim/NeoVim</TechListItem>
          <TechListItem>tmux</TechListItem>
          <TechListItem>R</TechListItem>
          <TechListItem>RStudio</TechListItem>
        </TechList>
      </TechColumn>
    </ToolsContainer>
  )
}

export default Tools
