import styled from "styled-components";

export const ProjectContainer = styled.div``;

export const ProjectTitle = styled.h3`
  font-family: ${(props) => props.theme.fontTitle};
`;

export const ProjectDescription = styled.p`
  font-family: ${(props) => props.theme.fontBody};
`;

export const ProjectImage = styled.img`
  transition: 0.5s ease;
  opacity: 0.8;
  background-color: black;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
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
  border-radius: 3px;

  &:hover ${ProjectImage} {
    opacity: 0.3;
    transform: scale(1.2);
    transition: transform 0.5s ease;
    overflow: hidden;
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
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TechListItem = styled.li`
  margin: 5px 5px 5px 0;
  padding: 5px 10px 5px 10px;
  background-color: ${(props) => props.theme.colorPrimary};
  color: ${(props) => props.theme.colorSecondary};
  font-family: ${(props) => props.theme.fontBody};
  border-radius: 3px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
