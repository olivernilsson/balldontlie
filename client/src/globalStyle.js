import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    max-height: 100vh
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    display: flex;
    font-family: "Jost";
    color: ${(props) => (props.darkMode ? "#d2dae2" : "#1e272e")};
    background: ${(props) => (props.darkMode ? "#1e272e" : "#545D60")};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  div {
    font-size: 18px;
  }

  h1 {
    font-size: 42px;
    font-weight: 400;
    line-height: 41px;
  }
`
