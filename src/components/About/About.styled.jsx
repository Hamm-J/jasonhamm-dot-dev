import styled from "styled-components";

export const AboutContainer = styled.section``;

export const ExperienceTitle = styled.h3`
  font-family: ${(props) => props.theme.fontTitle};
`;

export const Position = styled.h5``;

export const Date = styled.h6``;

export const Description = styled.p`
  font-family: ${(props) => props.theme.fontBody};
  font-size: 20px;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colorAccent};
  }
`;

export const Accent = styled.span`
  color: ${(props) => props.theme.colorAccent};
`;

export const ExperienceItem = styled.div``;
