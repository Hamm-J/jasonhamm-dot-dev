import styled from "styled-components";

export const ProjectContainer = styled.div``;

export const ProjectTitle = styled.h3``;

export const ProjectDescription = styled.p``;

export const ProjectImage = styled.img`
  transition: 0.5s ease;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  opacity: 0;
  transform: translateY(-15px);
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
`;

export const ImageWrapper = styled.div`
  background-color: black;
  position: relative;
  max-height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${ProjectImage} {
    opacity: 0.3;
  }

  &:hover ${InfoWrapper} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TechList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const TechListItem = styled.li`
  margin: 5px 5px 5px 0;
  padding: 5px 10px 5px 10px;
  background-color: black;
  color: white;
`;
