import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');

  *{
      box-sizing: border-box;
  }  

  body {
    margin: 0;
    font-family:'Montserrat', sans-serif;
  }

`;

export default GlobalStyles;
