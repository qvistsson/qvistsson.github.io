import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from 'styles/theme.json';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import 'styles/utils.scss';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.lightBg};
  font-family: 'Nunito', sans-serif;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app-wrapper')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
