import styled from "styled-components";

export const Anchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colorPrimary};

  &:hover {
    color: ${(props) => props.theme.colorAccent};
  }
`;
