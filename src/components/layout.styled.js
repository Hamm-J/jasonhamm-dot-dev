import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.colorPrimary};
  }
`;

export default GlobalStyle;
