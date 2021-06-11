import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from '../src/styles/GlobalStyles';
import GlobalFonts from '../src/styles/GlobalFonts';
import App from './components//App';

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <GlobalFonts />
    <App />
  </Router>,
  document.getElementById('root')
);
