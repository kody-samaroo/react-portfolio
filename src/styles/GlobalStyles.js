import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --light-bg: #F3F3F3;
    --light-text-1: #1D1C1C;
    --light-accent-1: #AEA8A8;
    --light-accent-2: #000;
    --light-accent-3: #FFF;
    
    --dark-bg: #262626;
    --dark-text-1: #BCB4B4;
    --dark-accent-1: #1E1E1E;
    --dark-accent-2: #FFF;
    --dark-accent-3: #000;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
`;
export default GlobalStyles;