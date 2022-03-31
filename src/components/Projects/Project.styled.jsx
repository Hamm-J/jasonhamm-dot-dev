import styled from "styled-components";

export const ProjectContainer = styled.div``;

export const ProjectTitle = styled.h3`
  font-family: ${(props) => props.theme.fontTitle};
`;

export const ProjectDescription = styled.div`
  font-family: ${(props) => props.theme.fontBody};
`;

export const ProjectImage = styled.img`
  transition: 0.5s ease;
  opacity: 0.8;
  background-color: black;
  margin: 0;
  width: 920px;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 50px;
  z-index: 1;
  color: white;
  opacity: 0;
  transform: translateY(-15px);
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;

  @media (max-width: 576px) {
    padding: 15px 25px;
  }
`;

export const ImageWrapper = styled.div`
  background-color: black;
  position: relative;

  overflow: hidden;
  height: 400px;
  max-width: 1000px;

  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  &:hover ${ProjectImage} {
    opacity: 0.3;
    transform: scale(1.2);
    transition: transform 0.5s ease;
  }

  &:hover ${InfoWrapper} {
    opacity: 1;
    transform: translateY(0);
    overflow-y: scroll;
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
