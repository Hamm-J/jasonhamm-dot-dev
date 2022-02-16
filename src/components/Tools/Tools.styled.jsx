import styled from "styled-components";

export const ToolsContainer = styled.section``;

export const Description = styled.p``;

export const ListTitle = styled.h3`
  font-family: Palatino;
`;

export const TechList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TechListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const TechListItemImage = styled.img`
  padding-left: 10px;
  width: 40px;
`;

export const TechColumn = styled.div``;

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
`;
