import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}

  /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS */
  html {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', 'Roboto', sans-serif;
    background: #272C35;
    color: #eee;
  }
  * , *:before, *:after {
    box-sizing: inherit;
  }
   a {
     text-decoration: none;
     color: inherit;
   }
`;

export default GlobalStyle;
