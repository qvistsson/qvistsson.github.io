import React from 'react';
import './Divider.css';

const Divider = ({ margin, indent, divString, keystring }) => (
  <div
    className={
      margin
        ? 'Divider-div flex-row align-center justify-center Style-max-width ' + margin
        : 'Divider-div flex-row align-center justify-center Style-max-width'
    }
    key={keystring}
  >
    <div className="hide screen-small-block" style={{ width: indent }}></div>
    <div className="Divider-horizontal-line"></div>
    <p className="Divider-divstring">{divString}</p>
    <div className="Divider-horizontal-line"></div>
  </div>
);

export default Divider;
