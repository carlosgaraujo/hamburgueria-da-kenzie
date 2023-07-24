import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;

  }
  html,body{
    margin: 0;
    padding: 0;
    /* min-width: 100%; */
        width: 100vw;
    overflow-x: hidden;
    
  };

  button{
    cursor: pointer;
  }

  #root{
    max-width: 1444px;
    margin: auto;
  }

`;
