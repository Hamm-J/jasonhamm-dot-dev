import styled from "styled-components";

export const ProjectContainer = styled.article``;

export const ProjectTitle = styled.h3`
  font-family: ${(props) => props.theme.fontTitle};
  margin: 0;
`;

export const DividerLine = styled.span`
  display: block;
  padding-top: 12px;
  margin-bottom: 12px;
  border-bottom: 3px solid white;
`;

export const ProjectDescription = styled.article`
  font-family: ${(props) => props.theme.fontBody};
  font-size: 20px;
`;

export const ProjectImage = styled.img`
  transition: 0.5s ease;
  margin: 0;
  width: 920px;
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;

  transition: transform 0.5s ease;
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
    padding: 25px 25px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  height: 400px;
  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colorAccent};
  }

  &:hover ${ProjectImage}, &:focus ${ProjectImage} {
    transform: scale(1.2);
  }

  &:hover ${ProjectOverlay}, &:focus ${ProjectOverlay} {
    opacity: 0.8;
    transition: transform 0.5s ease;
  }

  &:hover ${InfoWrapper}, &:focus ${InfoWrapper} {
    opacity: 1;
    transform: translateY(0);
    overflow-y: scroll;
  }
`;
export const TechListItem = styled.li`
  margin: 5px 5px 5px 0;
  padding: 5px 10px 5px 10px;
  background-color: ${(props) => props.theme.colorPrimary};
  color: ${(props) => props.theme.colorSecondary};
  font-family: ${(props) => props.theme.fontBody};
  font-size: 20px;
  border-radius: 3px;
`;
export const TechList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;

  &:focus ${TechListItem} {
    background-color: ${(props) => props.theme.colorAccent};
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
