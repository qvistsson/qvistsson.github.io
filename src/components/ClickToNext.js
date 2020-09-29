import React from 'react';
import './ClickToNext.css';

const ClickToNext = () => [
  <div className="grow" key="grow-div" />,
  <div className="maxed flex-row align-center justify-center" key="link-div">
    <a
      className="ClickToNext-link flex-row align-center justify-center"
      href="#projects-anchor"
    >
      <i className="fas fa-chevron-down ClickToNext-icon m-small"></i>
      Click here to see my projects!
      <i className="fas fa-chevron-down ClickToNext-icon m-small"></i>
    </a>
  </div>,
];

export default ClickToNext;
