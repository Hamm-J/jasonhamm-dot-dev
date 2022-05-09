import styled from "styled-components";

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fontTitle};
  outline: none;

  &:focus {
    color: ${(props) => props.theme.colorAccent};
  }
`;
