import styled from "styled-components";

export const Anchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colorPrimary};
  outline: none;
  font-size: 20px;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colorAccent};
  }
`;
