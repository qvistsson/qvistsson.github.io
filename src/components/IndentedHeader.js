import React from 'react';
import './IndentedHeader.css';

const IndentedHeader = ({ margin, text, excl, type }) => (
  <div
    className={
      margin ? 'flex-row align-center ' + margin : 'flex-row align-center'
    }
  >
    <div className="hide screen-small-flex-row align-center grow IndentedHeader-indent-line">
      <div className={"IndentedHeader-deco-" + type + " m-right-small grow"}></div>
      <i className={"fas fa-circle m-right-small IndentedHeader-circle-" + type}></i>
    </div>
    <p className={"IndentedHeader-text-" + type}>
      {text}
      {excl && <span className={"IndentedHeader-excl-" + type}>!</span>}
    </p>
  </div>
);

export default IndentedHeader;
