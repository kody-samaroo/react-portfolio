import { createGlobalStyle } from 'styled-components';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Verdana';
    font-style: normal;
  }
  @font-face {
    font-family: 'Helvetica';
    font-style: normal;
  }
  @font-face {
    font-family: 'Monaco';
    font-style: normal;
  }
  html{
    font-family: 'Verdana';
    color: var(--text-color);
  }
  *{
    font-family: 'Helvetica';
    color: var(--text-color);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Monaco'
  }
`;

export default GlobalFonts;