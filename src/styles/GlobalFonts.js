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
    color: ${props => !props.darkMode ? 'var(--dark-text-1)' : 'var(--light-text-1)'};
  }
  *{
    font-family: 'Helvetica';
    color: ${props => !props.darkMode ? 'var(--dark-text-1)' : 'var(--light-text-1)'};
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Monaco'
  }
`;

export default GlobalFonts;