import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="flex-column screen-small-flex-row justify-center align-center">
    <p class="Footer-text">© Oscar Lindqvist 2020</p>
    <i className="fas fa-circle hide screen-small-block m-left-small m-right-small Footer-circle"></i>
    <p class="Footer-text">
      Powered by{' '}
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        React
      </a>
    </p>
    <i className="fas fa-circle hide screen-small-block m-left-small m-right-small Footer-circle"></i>
    <p class="Footer-text">
      Icons from{' '}
      <a
        href="https://fontawesome.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Font Awesome
      </a>
    </p>
  </footer>
);

export default Footer;
