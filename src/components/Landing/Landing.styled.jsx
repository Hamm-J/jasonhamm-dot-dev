import styled from "styled-components";

export const LandingContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div``;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fontTitle};
  color: ${(props) => props.theme.colorAccent};
  margin: 0;
  padding: 0;
`;

export const Description = styled.h2`
  font-family: ${(props) => props.theme.fontTitle};
  white-space: pre-line;
  margin: 0;
  padding: 0;
`;

export const DividerLine = styled.div`
  display: block;
  border-bottom: 4px solid ${(props) => props.theme.colorAccent};
  margin-top: 28px;
`;
