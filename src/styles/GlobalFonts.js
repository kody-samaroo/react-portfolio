import { createGlobalStyle } from 'styled-components';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Georgia';
    font-style: normal;
  }
  @font-face {
    font-family: 'Times New Roman';
    font-style: normal;
  }
  @font-face {
    font-family: 'Garamond';
    font-style: normal;
  }
  html{
    font-family: 'Georgia';
    color: ${props => !props.darkMode ? 'var(--dark-text-1)' : 'var(--light-text-1)'};
  }
  *{
    font-family: 'Times New Roman';
    color: ${props => !props.darkMode ? 'var(--dark-text-1)' : 'var(--light-text-1)'};
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Garamond'
  }
`;

export default GlobalFonts;