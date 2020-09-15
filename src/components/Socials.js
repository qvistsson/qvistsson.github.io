import React from 'react';
import './Socials.css';

const Socials = ({ margin }) => (
  <div
    className={
      margin
        ? 'flex-column ' + margin
        : 'flex-column'
    }
  >
    <a
      id="obf-target"
      href="mailto:enable-javascript@for-email.com"
      className="Socials-link"
    >
      <i className="far fa-envelope"></i>e-mail
    </a>
    <a
      href="https://www.linkedin.com/in/qvistdev09/"
      target="_blank"
      rel="noopener noreferrer"
      className="Socials-link m-top-small"
    >
      <i className="fab fa-linkedin"></i>LinkedIn
    </a>
    <a
      href="https://github.com/qvistdev09"
      target="_blank"
      rel="noopener noreferrer"
      className="Socials-link m-top-small"
    >
      <i className="fab fa-github"></i>GitHub
    </a>
  </div>
);

export default Socials;
