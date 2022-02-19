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
  color: ${(props) => props.theme.cranberry};
`;

export const Description = styled.h1`
  font-family: ${(props) => props.theme.fontTitle};
`;
